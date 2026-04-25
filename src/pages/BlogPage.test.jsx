import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Route, Routes } from "react-router-dom";
import BlogPage from "./BlogPage.jsx";
import BlogPostPage from "./BlogPostPage.jsx";
import { renderWithProviders } from "../test/test-utils.jsx";

function renderBlog(route = "/blog") {
  return renderWithProviders(
    <Routes>
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:slug" element={<BlogPostPage />} />
    </Routes>,
    { route },
  );
}

describe("BlogPage", () => {
  it("renders the article overview with links to every long-form post", () => {
    renderBlog();

    expect(screen.getByRole("heading", { name: /Blog on AI/i })).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: /Agentic AI/i }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: /Project management/i }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: /Teaching with AI/i }).length).toBeGreaterThan(0);
  });

  it("opens a dedicated article page when a blog card is clicked", async () => {
    const user = userEvent.setup();
    renderBlog();

    await user.click(screen.getAllByRole("link", { name: /Project management/i })[0]);

    expect(screen.getByRole("heading", { name: /less administration, more judgement/i })).toBeInTheDocument();
    expect(screen.getByText(/Sources and further reading/i)).toBeInTheDocument();
  });

  it("renders the German article overview after switching language", async () => {
    window.localStorage.setItem("carina_site_language", "de");
    renderBlog();

    expect(screen.getByRole("heading", { name: /Blog zu AI/i })).toBeInTheDocument();
  });
});
