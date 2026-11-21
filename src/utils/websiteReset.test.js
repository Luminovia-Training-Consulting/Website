import {beforeEach, expect, it, vi} from "vitest";
import {authorizeWebsiteReset, stampWebsiteWorker} from "../../scripts/website-reset.mjs";

const revision = "a".repeat(40);
let env;
let permission;
let main;

beforeEach(() => {
    env = {
        GITHUB_REPOSITORY: "Luminovia-Training-Consulting/Website",
        GITHUB_EVENT_NAME: "workflow_dispatch",
        GITHUB_REF: "refs/heads/main",
        GITHUB_SHA: revision,
        GITHUB_ACTOR: "fixture-admin",
        GITHUB_TRIGGERING_ACTOR: "fixture-admin",
        WEBSITE_RESET_CONFIRMATION: "RESET luminovia.org",
        WEBSITE_RESET_GENERATION: "12345-1",
    };
    permission = vi.fn().mockResolvedValue("admin");
    main = vi.fn().mockResolvedValue(revision);
});

it("requires current repository admin status and current main before permitting a scoped reset", async () => {
    await expect(authorizeWebsiteReset(env, permission, main)).resolves.toBe("12345-1");
    expect(permission).toHaveBeenCalledExactlyOnceWith("fixture-admin");
    expect(main).toHaveBeenCalledTimes(1);
});

it.each([
    ["GITHUB_REPOSITORY", "Luminovia-Training-Consulting/Luminovia-Management-Tool"],
    ["GITHUB_EVENT_NAME", "push"],
    ["GITHUB_REF", "refs/heads/test"],
    ["WEBSITE_RESET_CONFIRMATION", "RESET cms.luminovia.org"],
])("rejects an invalid %s before looking up privileges", async (key, value) => {
    await expect(authorizeWebsiteReset({...env, [key]: value}, permission, main)).rejects.toThrow(/confirmation/);
    expect(permission).not.toHaveBeenCalled();
});

it("checks both operators when a different collaborator reruns the dispatch", async () => {
    env.GITHUB_TRIGGERING_ACTOR = "fixture-writer";
    permission.mockResolvedValueOnce("admin").mockResolvedValueOnce("write");
    await expect(authorizeWebsiteReset(env, permission, main)).rejects.toThrow(/administrator/);
    expect(permission.mock.calls.flat()).toEqual(["fixture-admin", "fixture-writer"]);
});

it("refuses a reset rerun with a stale checked-out revision", async () => {
    main.mockResolvedValue("c".repeat(40));
    await expect(authorizeWebsiteReset(env, permission, main)).rejects.toThrow(/current main/);
});

it("stamps one fixed worker declaration and refuses malformed or duplicate changes", () => {
    const worker = 'const CACHE_VERSION = "luminovia-website-v1";';
    expect(stampWebsiteWorker(worker, "12345-2")).toBe('const CACHE_VERSION = "luminovia-website-reset-12345-2";');
    expect(() => stampWebsiteWorker(worker, "bad input")).toThrow();
    expect(() => stampWebsiteWorker(worker + worker, "12345-2")).toThrow();
});
