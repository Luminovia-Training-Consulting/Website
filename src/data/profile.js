const base = import.meta.env.BASE_URL;

export const PROFILE = {
    name: "Luminovia Training & Consulting",
    founder: "Carina Sophie Schoppe",
    role: "Corporate training, digital capability and consulting",
    location: "Brisbane, Australia",
    addressLines: ["43/9 Eduard Place", "4116 Calamvale", "Brisbane, Australia"],
    remote: "Remote-first training and consulting for organisations in Europe, Australia and international markets",
    email: "info@luminovia.org",
    phoneAustralia: "+61 451 448 724",
    phoneGermany: "+49 175 5738 757",
    github: "https://github.com/Luminovia-Training-Consulting",
    linkedin: "https://www.linkedin.com/in/carinaschoppe/",
    appointmentSchedule: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1DRa4OAiQN9y8F-86ull0Jqb25hCL2ZimE4Wo5dojeEF3eSVDBMk6mGJMUG0mZxUR8wSD5-BB6?gv=true",
    analyticsId: "G-YNGD292XE5",
};

export const IMAGES = {
    hero: `${base}images/carina-hero.jpg`,
    tablet: `${base}images/carina-tablet.jpg`,
    headshot: `${base}images/carina-headshot.jpg`,
    outdoor: `${base}images/carina-outdoor.jpg`,
    fullBody: `${base}images/carina-fullbody.jpg`,
    luminoviaLogoFull: `${base}images/luminovia-logo-full-720.webp`,
    luminoviaLogoFullSmall: `${base}images/luminovia-logo-full-360.webp`,
    luminoviaLogoMark: `${base}images/luminovia-logo-mark.svg`,
    luminoviaLogoMarkWebp: `${base}images/luminovia-logo-mark-96.webp`,
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
