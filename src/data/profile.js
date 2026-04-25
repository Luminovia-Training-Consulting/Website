export const PROFILE = {
  name: "Carina Sophie Schoppe",
  role: "Freelance IT Lecturer · AI Trainer · Business Technology Speaker",
  location: "Brisbane, Australia",
  remote: "Remote delivery for Europe & APAC",
  email: "info@carinaschoppe.com",
  github: "https://github.com/CarinaSchoppe",
  linkedin: "https://www.linkedin.com/in/carinaschoppe/",
  booking: "https://calendar.app.google/z7ADMxUcLz6q5Us8A",
  analyticsId: import.meta.env.VITE_GA_MEASUREMENT_ID || "G-YNGD292XE5",
};

const base = import.meta.env.BASE_URL || "/";

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
