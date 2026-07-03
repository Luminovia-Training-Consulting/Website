const base = import.meta.env.BASE_URL || "/";

export const PROFILE = {
    name: "Luminovia Training & Consulting",
    founder: "Carina Sophie Schoppe",
    role: "Training & Consulting for AI, IT and digital business",
    location: "Brisbane, Australia",
    addressLines: ["43/9 Eduard Place", "4116 Calamvale", "Brisbane, Australia"],
    remote: "Remote training and consulting for Europe, Australia & the world",
    email: "info@carinaschoppe.com",
    phoneAustralia: "+61 451 448 724",
    phoneGermany: "+49 175 5738 757",
    github: "https://github.com/CarinaSchoppe",
    linkedin: "https://www.linkedin.com/in/carinaschoppe/",
    lecturerProfile: `${base}lecturer.zip`,
    trainingPortfolio: `${base}carina-sophie-schoppe-training-portfolio.html`,
    trainingCatalogue: `${base}carina-sophie-schoppe-ai-it-training-catalogue.html`,
    appointmentSchedule: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1DRa4OAiQN9y8F-86ull0Jqb25hCL2ZimE4Wo5dojeEF3eSVDBMk6mGJMUG0mZxUR8wSD5-BB6?gv=true",
    analyticsId: "G-YNGD292XE5",
};

export const IMAGES = {
    hero: `${base}images/carina-hero.jpg`,
    tablet: `${base}images/carina-tablet.jpg`,
    headshot: `${base}images/carina-headshot.jpg`,
    outdoor: `${base}images/carina-outdoor.jpg`,
    fullBody: `${base}images/carina-fullbody.jpg`,
    luminoviaLogoFull: `${base}images/luminovia-logo-full.png`,
    luminoviaLogoMark: `${base}images/luminovia-logo-mark.png`,
};

export const navItems = [
    {to: "/", key: "home"},
    {to: "/training", key: "training"},
    {to: "/consulting", key: "consulting"},
    {to: "/offers", key: "offers"},
    {to: "/clients", key: "clients"},
    {to: "/projects", key: "software"},
    {to: "/about", key: "about"},
    {to: "/contact", key: "book"},
];
