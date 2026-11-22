export function enquiryFormConfig(environment = import.meta.env) {
    const {VITE_ENQUIRY_URL: url, VITE_ENQUIRY_SITE_KEY: siteKey, VITE_ENQUIRY_PRIVACY_VERSION: privacyVersion} = environment;
    try {
        const parsed = new URL(url);
        if (parsed.protocol === "https:" && parsed.pathname === "/website-enquiry" &&
            !parsed.username && !parsed.password && !parsed.search && !parsed.hash &&
            siteKey && privacyVersion) return {url: parsed.href, siteKey, privacyVersion};
    } catch {
        return null;
    }
    return null;
}

/** Add only the configured service origins to the existing restrictive policy. */
export function withEnquiryPolicy(source, config) {
    if (!config) return source;
    const challenge = "https://challenges.cloudflare.com";
    const relay = new URL(config.url).origin;
    return source
        .replace(/script-src [^;"\r\n]+/g, directive => `${directive} ${challenge}`)
        .replace(/frame-src [^;"\r\n]+/g, directive => `${directive} ${challenge}`)
        .replace(/connect-src [^;"\r\n]+/g, directive => `${directive} ${challenge} ${relay}`);
}
