import {render} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import {LanguageProvider, LANGUAGE_STORAGE_KEY} from "../i18n.jsx";

export function renderWithProviders(ui, {route = "/"} = {}) {
    window.history.pushState({}, "Test page", route);
    if (!window.localStorage.getItem(LANGUAGE_STORAGE_KEY)) {
        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, "en");
    }

    return render(
        <LanguageProvider>
            <MemoryRouter initialEntries={[route]}>
                {ui}
            </MemoryRouter>
        </LanguageProvider>,
    );
}
