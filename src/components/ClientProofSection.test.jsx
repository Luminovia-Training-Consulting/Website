import {screen} from "@testing-library/react";
import {describe, expect, it} from "vitest";
import ClientProofSection from "./ClientProofSection.jsx";
import {renderWithProviders} from "../test/test-utils.jsx";

describe("ClientProofSection", () => {
    it("renders client proof and feedback as static card content", () => {
        renderWithProviders(<ClientProofSection compact/>);

        const card = screen.getByRole("link", {name: /Fast Lane \/ AI CERTs/i});

        expect(card).toHaveTextContent(/Feedback theme/i);
        expect(card).toHaveTextContent(/Anonymised pattern/i);
    });
});
