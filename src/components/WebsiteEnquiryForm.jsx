import {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";

const scriptUrl = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
const labels = {
    de: {
        company_name: "Organisation", contact_name: "Name", email: "E-Mail", topic: "Thema",
        message: "Ihre Anfrage", consent: "Ich habe die Datenschutzhinweise gelesen und möchte die Anfrage senden.",
        privacy: "Datenschutzhinweise", send: "Anfrage senden", cancel: "Versand abbrechen",
        pending: "Die Sicherheitsprüfung wird geladen.", sent: "Ihre Anfrage ist eingegangen.",
        error: "Die Anfrage konnte nicht bestätigt werden. Versuchen Sie es erneut oder nutzen Sie den E-Mail-Kontakt.",
    },
    en: {
        company_name: "Organisation", contact_name: "Name", email: "Email", topic: "Topic",
        message: "Your enquiry", consent: "I have read the privacy notice and want to send this enquiry.",
        privacy: "Privacy notice", send: "Send enquiry", cancel: "Cancel submission",
        pending: "The security check is loading.", sent: "Your enquiry was received.",
        error: "We could not confirm the enquiry. Try again or use the email contact.",
    },
};

let loadingWidget;

function loadWidget() {
    if (window.turnstile) return Promise.resolve(window.turnstile);
    if (!loadingWidget) {
        loadingWidget = new Promise((resolve, reject) => {
            const script = document.createElement("script");
            const failed = () => {
                clearTimeout(timer);
                script.remove();
                reject(new Error("Verification widget unavailable"));
            };
            const timer = window.setTimeout(failed, 12000);
            script.src = scriptUrl;
            script.async = true;
            script.onload = () => {
                if (!window.turnstile) return failed();
                clearTimeout(timer);
                resolve(window.turnstile);
            };
            script.onerror = failed;
            document.head.append(script);
        }).catch(error => {
            loadingWidget = undefined;
            throw error;
        });
    }
    return loadingWidget;
}

const knownFields = [
    ["company_name", 200, "text", "organization"],
    ["contact_name", 120, "text", "name"],
    ["email", 254, "email", "email"],
    ["topic", 200, "text", "off"],
];

export default function WebsiteEnquiryForm({config, language, subject}) {
    const copy = labels[language];
    const widget = useRef(null);
    const previous = useRef(null);
    const [attempt, setAttempt] = useState(null);
    const [status, setStatus] = useState("");

    useEffect(() => {
        if (!attempt) return;
        const controller = new AbortController();
        let widgetId;
        let started = false;
        let api;
        const fail = () => {
            if (controller.signal.aborted) return;
            setStatus("error");
            setAttempt(null);
        };

        loadWidget().then(loaded => {
            if (controller.signal.aborted) return;
            api = loaded;
            widgetId = api.render(widget.current, {
                sitekey: config.siteKey,
                language,
                action: "website_enquiry",
                cData: attempt.id,
                callback: async token => {
                    if (started || controller.signal.aborted) return;
                    started = true;
                    try {
                        const response = await fetch(config.url, {
                            method: "POST",
                            headers: {"Content-Type": "application/json"},
                            credentials: "omit",
                            redirect: "error",
                            body: JSON.stringify({...attempt.payload, submission_id: attempt.id, challenge_token: token}),
                            signal: AbortSignal.any([controller.signal, AbortSignal.timeout(16000)]),
                        });
                        const receipt = await response.json();
                        if (response.status !== 202 || receipt?.received !== true || receipt.receipt !== attempt.id) {
                            return fail();
                        }
                        if (controller.signal.aborted) return;
                        setStatus("sent");
                        setAttempt(null);
                    } catch {
                        fail();
                    }
                },
                "error-callback": fail,
                "expired-callback": () => { if (!started) fail(); },
                "timeout-callback": fail,
            });
        }).catch(fail);

        return () => {
            controller.abort();
            if (widgetId !== undefined) api.remove(widgetId);
        };
    }, [attempt, config.siteKey, config.url, language]);

    function submit(event) {
        event.preventDefault();
        if (attempt || status === "sent") return;
        const data = new FormData(event.currentTarget);
        const payload = {
            company_name: data.get("company_name").trim(),
            contact_name: data.get("contact_name").trim(),
            email: data.get("email").trim(),
            topic: data.get("topic").trim(),
            message: data.get("message").trim(),
            phone: "",
            preferred_dates: "",
            duration: "",
            delivery_type: "flexible",
            time_zone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            locale: language,
            privacy_notice_version: config.privacyVersion,
            consent: data.get("consent") === "on",
            website: data.get("website"),
        };
        const fingerprint = JSON.stringify(payload);
        const id = previous.current?.fingerprint === fingerprint ? previous.current.id : crypto.randomUUID();
        previous.current = {fingerprint, id};
        setStatus("pending");
        setAttempt({payload, id});
    }

    return (
        <form className="people-enquiry-form" onSubmit={submit}>
            {status !== "sent" && (
                <fieldset disabled={Boolean(attempt)}>
                    {knownFields.map(([name, limit, type, autoComplete]) => (
                        <label key={name}>
                            {copy[name]}
                            <input name={name} maxLength={limit} type={type} autoComplete={autoComplete}
                                defaultValue={name === "topic" ? subject : undefined} required />
                        </label>
                    ))}
                    <label>
                        {copy.message}
                        <textarea name="message" rows={5} maxLength={12000} required />
                    </label>
                    <label hidden>
                        Website <input name="website" autoComplete="off" tabIndex={-1} />
                    </label>
                    <label className="people-enquiry-consent">
                        <input type="checkbox" name="consent" required /> {copy.consent}
                    </label>
                    <Link to="/privacy">{copy.privacy}</Link>
                    <button type="submit" className="lumo-button" data-button-variant="primary">{copy.send}</button>
                </fieldset>
            )}
            {attempt && (
                <>
                    <div ref={widget} />
                    <button type="button" className="lumo-button" data-button-variant="secondary"
                        onClick={() => { setAttempt(null); setStatus(""); }}>{copy.cancel}</button>
                </>
            )}
            {status && <p role={status === "error" ? "alert" : "status"}>{copy[status]}</p>}
        </form>
    );
}
