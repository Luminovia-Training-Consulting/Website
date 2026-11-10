import {screen} from "@testing-library/react";
import {describe, expect, it} from "vitest";
import ClientProofSection from "./ClientProofSection.jsx";
import {renderWithProviders} from "../test/test-utils.jsx";

describe("ClientProofSection", () => {
    it("links to the organisation and describes the work without attributing feedback", () => {
        renderWithProviders(<ClientProofSection compact/>);

        const card = screen.getByRole("link", {name: /Fast Lane \/ AI CERTs/i});

        expect(card).toHaveAttribute("href", "https://www.flane.de/en/courses/ai-certs");
        expect(screen.getByText(/certification-oriented AI training/i)).toBeInTheDocument();
        expect(screen.queryByText(/Feedback theme/i)).not.toBeInTheDocument();
    });
});
