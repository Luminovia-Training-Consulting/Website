# Website enquiries to the Luminovia Portal

The static contact page displays the form when all three public Vite build values are present. It keeps the existing email contact. The browser sends a scoped Turnstile challenge and stable submission UUID to this relay. The relay validates the challenge server side, ties its hostname, action and submission ID to the Website, and calls the existing authenticated Portal intake. It returns a receipt for the same submission only after the Portal accepts it. [Turnstile server validation](https://developers.cloudflare.com/turnstile/get-started/server-side-validation/)

| Setting | Location and value |
| --- | --- |
| `WEBSITE_ORIGIN` | Relay variable. Exact public HTTPS Website origin, including the intended host variant |
| `PORTAL_ENQUIRY_URL` | Relay variable. HTTPS Portal endpoint ending in `/backend/functions/v1/website-enquiries` or `/functions/v1/website-enquiries` |
| `PORTAL_CLIENT_KEY` | Relay binding. Supabase public publishable or legacy anonymous key for the target |
| `PORTAL_INTEGRATION_TOKEN` | Relay secret. The separate trusted sender credential configured on the portal host |
| `TURNSTILE_SECRET` | Relay secret. The verification secret of the widget approved for the Website |
| `PRIVACY_NOTICE_VERSION` | Relay variable. Current notice identifier shared with the Portal |
| `VITE_ENQUIRY_URL` | Website build variable. Exact relay HTTPS endpoint ending in `/website-enquiry` |
| `VITE_ENQUIRY_SITE_KEY` | Website build variable. Public Turnstile site key |
| `VITE_ENQUIRY_PRIVACY_VERSION` | Website build variable. Same reviewed notice identifier |

The Portal's private settings are `PORTAL_WEBSITE_ENQUIRIES_ENABLED`, `PORTAL_WEBSITE_ORIGIN`, `PORTAL_WEBSITE_PRIVACY_NOTICE_VERSION` and `PORTAL_WEBSITE_INTEGRATION_TOKEN`. Existing server-to-server ingress, persisted quotas and reviewed triage are used directly. The Website submits only the approved contact and request fields; it does not upload files, assign roles or create a customer.

1. Review the Website privacy notice for the challenge provider and enquiry processing. Record its version and the selected authorities in the commissioning record.
2. Use a separate test origin and Portal installation to configure an approved widget, the Worker route, the two relay secrets and matching Portal variables. The supplied Worker configuration leaves the public routes disabled until configured by the operator.
3. Set the three public build variables and verify both languages, keyboard controls, an invalid verification, retry of a confirmed UUID and appearance of a single matching intake in the Portal.
4. Release the approved Website build and route only after domain, origin, privacy notice, provider and Portal authority agree. To suspend intake, remove the relay route or disable the Portal intake and rebuild the Website without the three form settings.

The fixture checks run using `npm exec -- vitest run integrations/portal-enquiry/worker.test.mjs`. Public Pages serves static files. The relay is an independently configured Cloudflare Worker. The static build contains only the three public settings.
