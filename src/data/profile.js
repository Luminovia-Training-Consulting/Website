const base = import.meta.env.BASE_URL || "/";
const env = import.meta.env;

function publicEnv(key, fallback) {
  const value = env[key];
  return typeof value === "string" && value.trim() !== "" ? value.trim() : fallback;
}

export const PROFILE = {
  name: publicEnv("VITE_SITE_NAME", "Carina Sophie Schoppe"),
  role: publicEnv("VITE_SITE_ROLE", "Freelance IT Lecturer - AI Trainer - Business Technology Speaker"),
  location: publicEnv("VITE_SITE_LOCATION", "Brisbane, Australia"),
  addressLines: publicEnv("VITE_SITE_ADDRESS", "Unit 28|436 Ann Street|Brisbane QLD 4000|Australia").split("|").map((line) => line.trim()).filter(Boolean),
  remote: publicEnv("VITE_SITE_REMOTE", "Remote delivery for Europe & APAC"),
  email: publicEnv("VITE_SITE_EMAIL", "info@carinaschoppe.com"),
  phoneAustralia: publicEnv("VITE_SITE_PHONE_AU", "+61 451 448 724"),
  phoneGermany: publicEnv("VITE_SITE_PHONE_DE", "+49 175 5738 757"),
  github: publicEnv("VITE_SITE_GITHUB", "https://github.com/CarinaSchoppe"),
  linkedin: publicEnv("VITE_SITE_LINKEDIN", "https://www.linkedin.com/in/carinaschoppe/"),
  lecturerProfile: publicEnv("VITE_LECTURER_PROFILE_URL", `${base}lecturer.zip`),
  trainingPortfolio: publicEnv("VITE_TRAINING_PORTFOLIO_URL", `${base}carina-sophie-schoppe-training-portfolio.html`),
  trainingCatalogue: publicEnv("VITE_TRAINING_CATALOGUE_URL", `${base}carina-sophie-schoppe-ai-it-training-catalogue.html`),
  appointmentSchedule: publicEnv("VITE_APPOINTMENT_SCHEDULE_URL", "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1DRa4OAiQN9y8F-86ull0Jqb25hCL2ZimE4Wo5dojeEF3eSVDBMk6mGJMUG0mZxUR8wSD5-BB6?gv=true"),
  analyticsId: publicEnv("VITE_GA_MEASUREMENT_ID", "G-YNGD292XE5"),
};

export const IMAGES = {
  hero: `${base}images/carina-hero.jpg`,
  tablet: `${base}images/carina-tablet.jpg`,
  headshot: `${base}images/carina-headshot.jpg`,
  outdoor: `${base}images/carina-outdoor.jpg`,
  fullBody: `${base}images/carina-fullbody.jpg`,
};

export const navItems = [
  { to: "/", key: "home" },
  { to: "/training", key: "training" },
  { to: "/skills", key: "skills" },
  { to: "/software", key: "software" },
  { to: "/portfolio", key: "clients" },
  { to: "/my-way", key: "myWay" },
  { to: "/blog", key: "blog" },
  { to: "/contact", key: "book" },
];
