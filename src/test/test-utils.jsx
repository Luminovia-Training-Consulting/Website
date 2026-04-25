import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { LanguageProvider } from "../i18n.jsx";

export function renderWithProviders(ui, { route = "/" } = {}) {
  window.history.pushState({}, "Test page", route);

  return render(
    <LanguageProvider>
      <MemoryRouter initialEntries={[route]}>
        {ui}
      </MemoryRouter>
    </LanguageProvider>,
  );
}
