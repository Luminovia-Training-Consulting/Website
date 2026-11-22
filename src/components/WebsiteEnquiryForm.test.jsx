import {act, render, screen, waitFor} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {MemoryRouter} from "react-router-dom";
import {afterEach, describe, expect, it, vi} from "vitest";
import WebsiteEnquiryForm from "./WebsiteEnquiryForm.jsx";
import {enquiryFormConfig, withEnquiryPolicy} from "../utils/enquiryConfig.js";

const config = {url: "https://enquiry.example.invalid/website-enquiry", siteKey: "public-widget", privacyVersion: "notice-1"};

afterEach(() => {
    vi.unstubAllGlobals();
});

describe("public enquiry form", () => {
    it("requires the public HTTPS configuration and never substitutes an incomplete setup", () => {
        expect(enquiryFormConfig({})).toBeNull();
        expect(enquiryFormConfig({
            VITE_ENQUIRY_URL: "http://enquiry.example.invalid/website-enquiry",
            VITE_ENQUIRY_SITE_KEY: config.siteKey,
            VITE_ENQUIRY_PRIVACY_VERSION: config.privacyVersion,
        })).toBeNull();
        expect(enquiryFormConfig({
            VITE_ENQUIRY_URL: config.url,
            VITE_ENQUIRY_SITE_KEY: config.siteKey,
            VITE_ENQUIRY_PRIVACY_VERSION: config.privacyVersion,
        })).toEqual(config);
    });

    it("adds only configured origins to a build with the enabled form", () => {
        const base = "script-src 'self'; connect-src 'self'; frame-src 'self'; object-src 'none'";
        expect(withEnquiryPolicy(base, null)).toBe(base);
        expect(withEnquiryPolicy(base, config)).toBe(
            "script-src 'self' https://challenges.cloudflare.com; connect-src 'self' https://challenges.cloudflare.com https://enquiry.example.invalid; frame-src 'self' https://challenges.cloudflare.com; object-src 'none'",
        );
    });

    it("keeps an unconfirmed submission and retries its exact receipt in German", async () => {
        const widget = {render: vi.fn(() => "widget"), remove: vi.fn()};
        vi.stubGlobal("turnstile", widget);
        let submission;
        const send = vi.fn()
            .mockImplementationOnce(async (_url, request) => {
                submission = JSON.parse(request.body);
                return Response.json({received: true, receipt: "different"}, {status: 202});
            })
            .mockImplementationOnce(async (_url, request) => {
                const payload = JSON.parse(request.body);
                expect(payload.submission_id).toBe(submission.submission_id);
                expect(payload.challenge_token).toBe("fresh-proof");
                return Response.json({received: true, receipt: payload.submission_id}, {status: 202});
            });
        vi.stubGlobal("fetch", send);
        const user = userEvent.setup();
        render(<MemoryRouter><WebsiteEnquiryForm config={config} language="de" subject="Trainingsanfrage" /></MemoryRouter>);
        await user.type(screen.getByRole("textbox", {name:"Organisation"}), "Fictional Training");
        await user.type(screen.getByRole("textbox", {name:"Name"}), "Test Person");
        await user.type(screen.getByRole("textbox", {name:"E-Mail"}), "learner@example.invalid");
        await user.type(screen.getByRole("textbox", {name:"Ihre Anfrage"}), "A test enquiry.");
        await user.click(screen.getByRole("checkbox"));
        await user.click(screen.getByRole("button", {name:"Anfrage senden"}));
        await waitFor(() => expect(widget.render).toHaveBeenCalledTimes(1));
        const initial = widget.render.mock.calls[0][1];
        expect(initial.action).toBe("website_enquiry");
        await act(async () => { await initial.callback("first-proof"); });
        expect(screen.getByRole("alert")).toHaveTextContent("konnte nicht bestätigt");
        expect(submission).toMatchObject({locale:"de", consent:true, privacy_notice_version:"notice-1", topic:"Trainingsanfrage"});
        expect(initial.cData).toBe(submission.submission_id);
        expect(screen.getByRole("textbox", {name:"Ihre Anfrage"})).toHaveValue("A test enquiry.");
        expect(screen.getByRole("link", {name:"Datenschutzhinweise"})).toHaveAttribute("href", "/privacy");
        await user.click(screen.getByRole("button", {name:"Anfrage senden"}));
        await waitFor(() => expect(widget.render).toHaveBeenCalledTimes(2));
        const retry = widget.render.mock.calls[1][1];
        expect(retry.cData).toBe(initial.cData);
        await act(async () => { await retry.callback("fresh-proof"); });
        expect(screen.getByRole("status")).toHaveTextContent("Ihre Anfrage ist eingegangen.");
        expect(screen.queryByRole("textbox", {name:"Ihre Anfrage"})).not.toBeInTheDocument();
        expect(widget.remove).toHaveBeenCalledTimes(2);
    });

    it("loads the verification script once requested and retries after a loading error", async () => {
        vi.stubGlobal("turnstile", undefined);
        const send = vi.fn(async () => { throw new Error("offline"); });
        vi.stubGlobal("fetch", send);
        const user = userEvent.setup();
        render(<MemoryRouter><WebsiteEnquiryForm config={config} language="en" subject="Training enquiry" /></MemoryRouter>);
        await user.type(screen.getByRole("textbox", {name:"Organisation"}), "Fictional Training");
        await user.type(screen.getByRole("textbox", {name:"Name"}), "Test Person");
        await user.type(screen.getByRole("textbox", {name:"Email"}), "learner@example.invalid");
        await user.type(screen.getByRole("textbox", {name:"Your enquiry"}), "A test enquiry.");
        await user.click(screen.getByRole("checkbox"));
        const findScript = () => document.querySelector('script[src*="challenges.cloudflare.com/turnstile"]');
        expect(findScript()).toBeNull();

        await user.click(screen.getByRole("button", {name:"Send enquiry"}));
        await waitFor(() => expect(findScript()).not.toBeNull());
        await act(async () => { findScript().dispatchEvent(new Event("error")); });
        expect(screen.getByRole("alert")).toHaveTextContent("could not confirm");
        expect(findScript()).toBeNull();

        await user.click(screen.getByRole("button", {name:"Send enquiry"}));
        await waitFor(() => expect(findScript()).not.toBeNull());
        const widget = {render: vi.fn(() => "loaded"), remove: vi.fn()};
        vi.stubGlobal("turnstile", widget);
        await act(async () => { findScript().dispatchEvent(new Event("load")); });
        await waitFor(() => expect(widget.render).toHaveBeenCalledTimes(1));
        const cancelled = widget.render.mock.calls[0][1];
        await user.click(screen.getByRole("button", {name:"Cancel submission"}));
        await act(async () => { await cancelled.callback("late-proof"); });
        expect(send).not.toHaveBeenCalled();

        await user.click(screen.getByRole("button", {name:"Send enquiry"}));
        await waitFor(() => expect(widget.render).toHaveBeenCalledTimes(2));
        await act(async () => { await widget.render.mock.calls[1][1].callback("fresh-proof"); });
        expect(send).toHaveBeenCalledTimes(1);
        expect(screen.getByRole("alert")).toBeVisible();
        expect(widget.remove).toHaveBeenCalledTimes(2);
        findScript().remove();
    });

    it("exposes the English fields and privacy link", () => {
        render(<MemoryRouter><WebsiteEnquiryForm config={config} language="en" subject="Training enquiry" /></MemoryRouter>);
        expect(screen.getByRole("textbox", {name:"Your enquiry"})).toBeRequired();
        expect(screen.getByRole("link", {name:"Privacy notice"})).toHaveAttribute("href", "/privacy");
        expect(screen.getByRole("checkbox")).toBeRequired();
    });
});
