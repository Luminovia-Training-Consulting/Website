import { describe, expect, it } from "vitest";
import { blogPosts } from "./content.js";

describe("blog post data", () => {
  it("contains the three publish-ready AI, project-management and education articles", () => {
    expect(blogPosts).toHaveLength(3);
    expect(blogPosts.map((post) => post.slug)).toEqual([
      "agentic-ai-from-demo-to-delegation",
      "project-management-in-the-age-of-ai",
      "teaching-with-ai-without-losing-learning",
    ]);
  });

  it("has enough structured content and sources for every article", () => {
    for (const post of blogPosts) {
      expect(post.title.length).toBeGreaterThan(20);
      expect(post.excerpt.length).toBeGreaterThan(100);
      expect(post.readTime).toMatch(/read$/);
      expect(post.body).toHaveLength(4);
      expect(post.takeaway.length).toBeGreaterThan(100);
      expect(post.sources).toHaveLength(3);

      for (const section of post.body) {
        expect(section.heading.length).toBeGreaterThan(10);
        expect(section.paragraphs).toHaveLength(2);
        section.paragraphs.forEach((paragraph) => expect(paragraph.length).toBeGreaterThan(160));
      }
    }
  });
});
