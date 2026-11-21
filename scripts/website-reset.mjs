/* global AbortSignal, fetch, process */

import {appendFile, readFile, writeFile} from "node:fs/promises";
import {URL, pathToFileURL} from "node:url";

const repository = "Luminovia-Training-Consulting/Website";
const confirmation = "RESET luminovia.org";
const cacheDeclaration = 'const CACHE_VERSION = "luminovia-website-v1";';

export async function authorizeWebsiteReset(env, getPermission, getMainRevision) {
    if (env.GITHUB_REPOSITORY !== repository || env.GITHUB_REF !== "refs/heads/main" ||
        env.GITHUB_EVENT_NAME !== "workflow_dispatch" || env.WEBSITE_RESET_CONFIRMATION !== confirmation) {
        throw new Error("Select main and enter the exact Website reset confirmation.");
    }

    const operators = new Set([env.GITHUB_ACTOR, env.GITHUB_TRIGGERING_ACTOR]);
    for (const operator of operators) {
        if (!/^[a-z\d][a-z\d-]{0,38}$/i.test(operator ?? "") ||
            await getPermission(operator) !== "admin") {
            throw new Error("Website reset requires current repository administrator permission.");
        }
    }

    if (!/^\d{1,20}-\d{1,8}$/.test(env.WEBSITE_RESET_GENERATION ?? "")) {
        throw new Error("Missing valid Workflow run identity for the Website reset.");
    }
    if (!/^[0-9a-f]{40}$/.test(env.GITHUB_SHA ?? "") || env.GITHUB_SHA !== await getMainRevision()) {
        throw new Error("Website reset requires the current main revision.");
    }
    return env.WEBSITE_RESET_GENERATION;
}

export function stampWebsiteWorker(source, generation) {
    if (!/^\d{1,20}-\d{1,8}$/.test(generation ?? "") || source.split(cacheDeclaration).length !== 2) {
        throw new Error("Cannot stamp the expected Website service worker.");
    }
    return source.replace(cacheDeclaration, `const CACHE_VERSION = "luminovia-website-reset-${generation}";`);
}

async function github(path) {
    const response = await fetch(`https://api.github.com/repos/${repository}/${path}`, {
        headers: {
            Accept: "application/vnd.github+json",
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
        redirect: "error",
        signal: AbortSignal.timeout(15_000),
    });
    if (!response.ok) throw new Error(`Could not verify the Website repository (HTTP ${response.status}).`);
    return response.json();
}

async function main() {
    if (process.argv[2] === "authorize") {
        const generation = await authorizeWebsiteReset(
            process.env,
            async (login) => (await github(`collaborators/${encodeURIComponent(login)}/permission`)).permission,
            async () => (await github("git/ref/heads/main")).object?.sha,
        );
        await appendFile(process.env.GITHUB_OUTPUT, `generation=${generation}\n`);
        return;
    }
    if (process.argv[2] === "stamp") {
        const worker = new URL("../dist/sw.js", import.meta.url);
        const source = await readFile(worker, "utf8");
        await writeFile(worker, stampWebsiteWorker(source, process.env.WEBSITE_RESET_GENERATION));
        return;
    }
    throw new Error("Select authorize or stamp.");
}

if (process.argv[1] && pathToFileURL(process.argv[1]).href === import.meta.url) {
    try {
        await main();
    } catch (error) {
        process.stderr.write(`${error.message}\n`);
        process.exitCode = 1;
    }
}
