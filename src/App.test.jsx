import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import App from "./App.jsx";

describe("App routing and language", () => {
  beforeEach(() => {
    window.localStorage.clear();
    vi.unstubAllGlobals();
  });

  it("renders the homepage and switches the visible copy to German", async () => {
    const user = userEvent.setup();
    render(<App />);

    expect(screen.getByRole("heading", { name: /Practical AI and IT education/i })).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /Switch language/i }));

    expect(screen.getByRole("heading", { name: /Praktische AI- und IT-Bildung/i })).toBeInTheDocument();
    expect(document.documentElement.lang).toBe("de");
  });

  it("renders the contact form and sends a successful request", async () => {
    const user = userEvent.setup();
    vi.stubGlobal("fetch", vi.fn(async () => ({
      ok: true,
      headers: { get: () => "application/json" },
      json: async () => ({ ok: true }),
    })));
    window.history.pushState({}, "Contact", "/contact");

    render(<App />);

    await user.type(screen.getByLabelText(/Name/i), "Test User");
    await user.type(screen.getByLabelText(/Email/i), "test@example.com");
    await user.type(screen.getByLabelText(/Message/i), "I would like to book an AI workshop.");
    await user.click(screen.getByRole("button", { name: /Send request/i }));

    expect(fetch).toHaveBeenCalledWith("/api/contact.php", expect.objectContaining({ method: "POST" }));
    expect(await screen.findByText(/Message sent/i)).toBeInTheDocument();
    expect(screen.getByTitle(/Google Calendar appointment scheduler/i)).toHaveAttribute("src", expect.stringContaining("calendar.google.com/calendar/appointments/schedules"));
  });
});
