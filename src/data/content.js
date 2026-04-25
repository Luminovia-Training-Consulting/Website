import { PROFILE } from "./profile.js";

export const trustStats = [
  { value: "150+", label: "documented teaching hours" },
  { value: "4.9/5", label: "average learner rating" },
  { value: "DE / EN", label: "German and English delivery" },
  { value: "B.Sc. · M.Sc. · MBA", label: "business IT and management background" },
];

export const coreOffers = [
  {
    kicker: "Corporate training",
    title: "AI & Digital Skills Workshops",
    outcome: "Turn AI confusion into confident, practical use.",
    copy: "For companies that want their teams to understand generative AI, use it productively, assess risks, and apply it in everyday workflows without losing quality or control.",
    deliverables: [
      "AI literacy and responsible use training",
      "Prompt engineering for office and specialist workflows",
      "Role-based exercises for real business scenarios",
      "Workflow templates and practical checklists",
      "Optional executive briefing for leadership alignment",
    ],
    bestFor: "Companies, public-sector teams, education providers, SMEs",
    gradient: "from-cyan-300/20 via-blue-400/10 to-violet-500/20",
  },
  {
    kicker: "Freelance lecturer",
    title: "IT, AI & Business Courses",
    outcome: "Structured teaching for adult learners and professional education.",
    copy: "Remote-first course delivery for education providers, academies, universities, bootcamps and funded training programmes that need reliable, clear, practice-oriented instruction.",
    deliverables: [
      "Python, SQL, databases, AI, cloud and cybersecurity",
      "Theory blocks combined with hands-on exercises",
      "Learning checks, recap sessions and transfer tasks",
      "Prepared materials, labs and structured learning paths",
      "German or English teaching for mixed skill levels",
    ],
    bestFor: "Training providers, universities, academies, adult education",
    gradient: "from-emerald-300/15 via-cyan-300/10 to-blue-500/20",
  },
  {
    kicker: "Talks & lectures",
    title: "Keynotes, Expert Talks & Guest Lectures",
    outcome: "Clear, modern talks on AI, IT security and digital transformation.",
    copy: "For events, internal knowledge days, leadership meetings and education programmes that need a speaker who can make complex technology engaging and business-relevant.",
    deliverables: [
      "AI in business: opportunities, limits and risks",
      "Responsible AI and governance in everyday work",
      "Cybersecurity awareness for non-technical teams",
      "Digital transformation and future skills",
      "Custom talk design for your audience and industry",
    ],
    bestFor: "Conferences, business events, schools, universities, internal events",
    gradient: "from-violet-400/20 via-fuchsia-400/10 to-cyan-300/20",
  },
];

export const formats = [
  { title: "90-minute impulse talk", label: "Fast orientation", copy: "Ideal for management briefings, internal learning days or event slots where the audience needs a strong overview and clear next steps." },
  { title: "Half-day / full-day workshop", label: "Practice-focused", copy: "Best for teams that should leave with practical tools, templates, workflows and enough confidence to apply the topic immediately." },
  { title: "2–5 day intensive training", label: "Skill building", copy: "For deeper upskilling in AI, Python, SQL, cybersecurity, cloud basics, business IT or digital transformation." },
  { title: "Multi-week course delivery", label: "Education provider format", copy: "Structured delivery for academies, online providers, vocational education, bootcamps and professional programmes." },
  { title: "Curriculum & material design", label: "Instructional design", copy: "Creation of course outlines, exercises, learning checks, slides, labs and learner-friendly documentation." },
  { title: "Exam / certification preparation", label: "Targeted readiness", copy: "Focused preparation around cybersecurity, AI, programming or business IT topics with structured practice and feedback loops." },
];

export const trainingTopics = [
  { group: "AI & Future Skills", items: ["AI literacy", "Prompt engineering", "Generative AI workflows", "Responsible AI", "AI governance basics", "AI for office productivity"] },
  { group: "Software & Data", items: ["Python programming", "SQL and databases", "APIs and automation", "Data science foundations", "Big data concepts", "UI/UX basics"] },
  { group: "Cybersecurity", items: ["Cybersecurity awareness", "Web security", "SOC foundations", "CompTIA Pentest+ preparation", "Ethical hacking foundations", "Password and data security"] },
  { group: "Business IT", items: ["Business informatics", "IT service management", "Cloud concepts", "Digital transformation", "SCRUM and agile work", "Process optimisation"] },
];

export const capabilities = [
  "AI literacy", "Prompt engineering", "Generative AI workflows", "Responsible AI", "AI governance basics", "Python", "SQL", "Databases", "APIs & automation", "Cybersecurity awareness", "Web security", "SOC foundations", "CompTIA Pentest+ prep", "Ethical hacking foundations", "Cloud concepts", "Business informatics", "IT service management", "Digital transformation", "SCRUM", "Blended learning", "Curriculum design", "Adult education",
];

export const audienceCards = [
  { title: "Education providers", copy: "Reliable remote lecturer for structured IT, AI, cybersecurity and business technology courses with adult learners.", bullets: ["multi-week courses", "clear material structure", "learner activation", "German / English delivery"] },
  { title: "Companies & SMEs", copy: "Practical upskilling for teams that need to use AI, data, automation or cybersecurity more confidently at work.", bullets: ["team workshops", "hands-on workflows", "risk awareness", "transfer into daily work"] },
  { title: "Universities & schools", copy: "Guest lectures, digital education formats and future-skills sessions that combine academic credibility with practical examples.", bullets: ["guest lectures", "AI and digitalisation", "student-friendly explanations", "modern learning design"] },
  { title: "Events & conferences", copy: "Talks that make AI, IT security and digital transformation understandable, relevant and engaging for mixed audiences.", bullets: ["keynotes", "panel inputs", "expert talks", "business relevance"] },
];

export const teachingProof = [
  { title: "Certified IT lecturer", value: "DiBak Trainer Certification", copy: "Covers didactics, pedagogy, learning platforms, material creation, learning checks, technical troubleshooting and quality assurance." },
  { title: "Learner rating", value: "4.9 / 5", copy: "Documented average rating after 150+ teaching hours, showing strong learner satisfaction and practical delivery quality." },
  { title: "Adult education strength", value: "Theory + practice", copy: "Learning formats are built around examples, exercises, recaps, learner activation, transfer tasks and clear outcomes." },
  { title: "International delivery", value: "Remote-first", copy: "Based in Brisbane while delivering online training for European and APAC clients in German or English." },
];

export const credentials = [
  { category: "Teaching", title: "DiBak Certified IT Lecturer", meta: "150+ teaching hours · average learner rating 4.9/5", detail: "Didactics, methods, learning platforms, material creation, learning checks and technology-supported instruction." },
  { category: "Teaching", title: "SCHLAU NRW Educational Work", meta: "Volunteer educator · Dec 2022 to Nov 2023", detail: "Workshops, facilitation, reflection and professional youth education in diversity and anti-discrimination contexts." },
  { category: "Teaching", title: "Software Innovation Lab Work Reference", meta: "University of Paderborn · KMUeinfachSicher project · 2021", detail: "Content work around IT security, passwords, password managers, data handling and didactic preparation for SMEs." },
  { category: "Academic", title: "Master of Business Administration", meta: "IU International University · completed 24 Mar 2026 · overall result Good (2.2)", detail: "Management credibility for IT, consulting, business strategy and client-facing advisory work." },
  { category: "Academic", title: "Master of Science in Business Computer Science", meta: "IU International University · completed 27 Nov 2025 · overall result Good (2.3)", detail: "120 ECTS covering AI, big data, research methods, IT services, UI/UX, cloud concepts and business IT." },
  { category: "Academic", title: "Bachelor of Science in Business Information Systems", meta: "University of Paderborn · completed 05 Feb 2025", detail: "Business, IT and information systems foundation for training, consulting and software-oriented work." },
  { category: "AI", title: "AI+ Developer™", meta: "AI CERTs · granted 05 Mar 2026", detail: "Certified AI development profile for explaining and building AI-enabled systems." },
  { category: "AI", title: "AI+ Researcher™", meta: "AI CERTs · granted 13 Mar 2026", detail: "Research-facing AI certification supporting academic and applied AI project work." },
  { category: "AI", title: "AI+ Prompt Engineer Level 1™", meta: "AI CERTs · granted 05 Mar 2026", detail: "Prompt design, AI interaction and practical workflow enablement." },
  { category: "AI", title: "AI+ Executive™", meta: "AI CERTs · granted 05 Mar 2026", detail: "Executive-level AI orientation for leadership, adoption and value creation." },
  { category: "AI", title: "AI+ Foundation™ / AI+ Everyone™", meta: "AI CERTs · granted 05 Mar 2026", detail: "Broad AI literacy and foundation-level AI capability." },
  { category: "AI", title: "AI+ Project Management Office Practitioner™", meta: "AI CERTs · granted 14 Apr 2026", detail: "AI project governance, PMO thinking and implementation control." },
  { category: "Cybersecurity", title: "AI+ Ethical Hacker™", meta: "AI CERTs · granted 05 Mar 2026", detail: "AI and cybersecurity positioning for ethical hacking and defensive awareness." },
  { category: "Cybersecurity", title: "TryHackMe Learning Paths", meta: "Web Fundamentals, Cyber Security, Pre Security, SOC Level 1, Complete Beginner, Pentest+, Jr Penetration Tester, Cyber Defense", detail: "Hands-on technical security learning for web, SOC, cyber defence and pentest foundations." },
  { category: "Cybersecurity", title: "Password Security Certificate", meta: "KMU. Einfach Sicher. · 25 Mar 2021", detail: "Training certificate focused on password security for small and medium-sized businesses." },
  { category: "Entrepreneurship", title: "garage33 Founding Certificate", meta: "Design Thinking · Lean Startup · Business Model Canvas · agile methods", detail: "Entrepreneurship training with prototype validation, USP, market, financial model and pricing work." },
  { category: "Entrepreneurship", title: "Top Talent Programme #4", meta: "University of Paderborn / garage33 · 2023", detail: "Design Thinking, Lean Startup, SDG business models, pitching, teamwork and personal development." },
  { category: "Language", title: "PTE Academic English", meta: "Overall 90 · valid until 18 Feb 2028", detail: "High-level English proof for international teaching, consulting and academic work." },
];

export const credentialCategories = ["All", "Teaching", "Academic", "AI", "Cybersecurity", "Entrepreneurship", "Language"];

export const selectedProjects = [
  { title: "Digital Education Systems", tag: "Instructional design", stack: "ADDIE · blended learning · adult education", copy: "Course concepts, hands-on labs, learning checks and structured learning paths for IT, business and AI education providers.", link: PROFILE.booking },
  { title: "Cybersecurity Learning Labs", tag: "Teaching proof", stack: "TryHackMe · SOC · Web security · Pentest+", copy: "Hands-on security learning paths used to strengthen practical teaching capability in web security, SOC foundations and penetration-testing basics.", link: PROFILE.github },
  { title: "PISMA Literature Review Pipeline", tag: "AI research automation", stack: "Python · AI · research tooling · data pipelines", copy: "A research workflow project for academic search, paper ranking, abstract analysis and structured systematic literature-review datasets.", link: "https://github.com/CarinaSchoppe/PISMA-Literature-Review-Pipeline-Automation-Tool" },
  { title: "AI at Work Research", tag: "AI adoption and HCI", stack: "Systematic literature review · AI adoption · human-machine interaction", copy: "Research around opportunities and risks of generative AI tools in organisations, especially human-machine interaction in everyday work.", link: PROFILE.linkedin },
];

export const formerClients = [
  {
    name: "Fast Lane / AI CERTs",
    initials: "FL",
    type: "AI certification training",
    work: "AI CERTs courses and certification-oriented AI training.",
    href: "https://www.fastlaneus.com/ai-certs-training",
  },
  {
    name: "BBA Monchengladbach",
    initials: "BBA",
    type: "IT retraining and professional education",
    work: "Fortbildung and Umschulung delivery for Fachinformatiker learners.",
    href: "https://bba-info.de/it.html",
  },
  {
    name: "SIW Hochschule",
    initials: "SIW",
    type: "Higher education",
    work: "Courses around software development and applied digital education.",
    href: "https://siw.swiss/",
  },
  {
    name: "TEKO Switzerland",
    initials: "TK",
    type: "Software, mobile and game development",
    work: "Software development, mobile development and Unity game-development courses.",
    href: "https://www.teko.ch/technik",
  },
  {
    name: "COMCAVE",
    initials: "CC",
    type: "Cybersecurity training",
    work: "Ethical-hacker and CompTIA PenTest+ focused course delivery.",
    href: "https://www.comcave.de/weiterbildung/it-programmierung-systeme/it-sicherheit/it-sicherheit-ethical-hacker-comptia-pentest-plus",
  },
  {
    name: "DiBak Digital Business Academy",
    initials: "DB",
    type: "Digital business education",
    work: "Broad professional development formats across digital, business and IT topics.",
    href: "https://db-akademie.com/",
  },
  {
    name: "damago GmbH",
    initials: "DG",
    type: "IT seminars and funded training",
    work: "Professional training in project management, databases and software development.",
    href: "https://www.damago.de/",
  },
  {
    name: "GFU Cyrus AG",
    initials: "GFU",
    type: "Software and AI courses",
    work: "Software-development and AI courses for Weiterbildung and Umschulung contexts.",
    href: "https://www.gfu.net/",
  },
  {
    name: "University of Queensland",
    initials: "UQ",
    type: "Research assistance",
    work: "Senior Research Assistant work in the area of Agentic AI.",
    href: "https://ai.uq.edu.au/",
  },
  {
    name: "RSL Akademie",
    initials: "RSL",
    type: "Bundeswehr ZAW education",
    work: "IT-area instruction for Bachelor Professional and Master Professional pathways.",
    href: "https://www.rsl-akademie.de/ausbildung/",
  },
  {
    name: "GPDM Azubi Akademie",
    initials: "GP",
    type: "Apprentice training",
    work: "Azubi Weiterbildung and Fortbildung across IT and professional course formats.",
    href: "https://ausbildung-akademie.de/",
  },
  {
    name: "Stapelfux Akademie",
    initials: "SF",
    type: "Current Scrum training",
    work: "Scrum and agile working training for professional teams.",
    href: "https://stapelfux-akademie.de/",
  },
];

export const testimonialProof = [
  {
    title: "Trusted by education providers",
    quote: "Repeated bookings across Weiterbildung, Umschulung, academy and university settings show that my delivery works for structured adult education.",
  },
  {
    title: "Broad enough for mixed IT groups",
    quote: "From Fachinformatiker cohorts to AI certification learners, I can adapt depth, pace and examples to the group in front of me.",
  },
  {
    title: "Practical training, not slide reading",
    quote: "My courses focus on exercises, implementation thinking, learner activation and clear transfer into work or exams.",
  },
];

export const lifeMilestones = [
  {
    year: "2000",
    title: "Born and raised in Bodenwerder",
    category: "Origin",
    copy: "Born in the Weserbergland region near Hameln and raised in Bodenwerder before moving out for university in 2019.",
  },
  {
    year: "2011-2019",
    title: "Gymnasium at Internat Solling",
    category: "School",
    copy: "Boarding-school education in Holzminden with early strengths in general education, IT, independence and international orientation.",
  },
  {
    year: "2013-2018",
    title: "Language stays in Australia, England and Spain",
    category: "International",
    copy: "Several language and culture stays that shaped an international mindset and multilingual communication.",
  },
  {
    year: "2019",
    title: "Abitur and first business responsibility",
    category: "Foundation",
    copy: "Completed Abitur and began taking responsibility in family business contexts around real estate and construction.",
  },
  {
    year: "2020",
    title: "Business informatics studies and first IT startup",
    category: "IT start",
    copy: "Started the B.Sc. in Business Information Systems at University of Paderborn and turned years of self-taught programming into first IT self-employment.",
  },
  {
    year: "2021",
    title: "Hotel management company",
    category: "Management",
    copy: "Helped create Baron von Munchhausen Hotelverwaltungs-GmbH after family-business restructuring.",
  },
  {
    year: "2023",
    title: "bytes Coding GmbH",
    category: "Software and education",
    copy: "Expanded software-development and education work into bytes Coding, connecting training demand with technical implementation.",
  },
  {
    year: "2024",
    title: "Schoppe & Partner EU",
    category: "Freelance profile",
    copy: "Built a broader freelance profile around lecturing, training, consulting, mediation, trading and development.",
  },
  {
    year: "2025",
    title: "Bachelor and Master in Business Computer Science",
    category: "Academic",
    copy: "Completed the B.Sc. after a long path and then completed the M.Sc. in Business Computer Science at IU International University.",
  },
  {
    year: "2026",
    title: "MBA, Australia and international training profile",
    category: "Current",
    copy: "Completed an MBA in Digital Business, moved to Brisbane and positioned the work around international AI, IT and business-technology education.",
  },
];

export const skillGroups = [
  {
    group: "Teaching and learning design",
    items: ["Adult education", "Curriculum design", "Blended learning", "Exam preparation", "Learner activation", "Workshop facilitation", "Course material design", "Remote classroom delivery"],
  },
  {
    group: "AI and automation",
    items: ["AI literacy", "Prompt engineering", "Agentic AI", "Generative AI workflows", "Responsible AI", "AI governance basics", "LangChain concepts", "Research automation"],
  },
  {
    group: "Software development",
    items: ["Python", "Java", "Kotlin", "C#", "Rust", "Dart", "Flutter", "Android", "APIs", "Microservices", "Spring", "React basics"],
  },
  {
    group: "Data and systems",
    items: ["SQL", "MySQL", "MongoDB", "Redis", "Database modelling", "Data pipelines", "Docker", "Kubernetes", "Ubuntu", "Cloud concepts"],
  },
  {
    group: "Cybersecurity",
    items: ["Security awareness", "Ethical hacking foundations", "CompTIA PenTest+ prep", "Web security", "SOC basics", "Kali Linux", "Password security", "Risk communication"],
  },
  {
    group: "Business and management",
    items: ["Digital transformation", "Business informatics", "Project management", "SCRUM", "IT service management", "Process optimisation", "Entrepreneurship", "Stakeholder communication"],
  },
  {
    group: "Creative and web tools",
    items: ["WordPress", "Elementor", "Photoshop", "Illustrator", "Premiere Pro", "After Effects", "Audition", "UI/UX basics"],
  },
  {
    group: "Languages and communication",
    items: ["German", "English", "Spanish basics", "Technical explanation", "Academic writing", "Business communication", "Presentation", "Public speaking"],
  },
];

export const blogPosts = [
  {
    slug: "why-ai-training-needs-practice",
    title: "Why AI training needs practice, not just tool demos",
    date: "2026-04-25",
    category: "AI training",
    excerpt: "A practical note on why AI workshops work best when learners build repeatable workflows instead of only watching tool demonstrations.",
    body: [
      "AI training becomes useful when people leave with repeatable decisions, not just with a list of tools. A good format combines explanation, guided exercises, reflection and transfer into the learner's own work context.",
      "For companies, this means working with real examples from everyday tasks: writing, analysis, research, communication, planning and quality control.",
    ],
  },
  {
    slug: "from-software-to-teaching",
    title: "From software development to teaching digital skills",
    date: "2026-04-25",
    category: "Personal",
    excerpt: "How software development, business informatics and education connect in my work as a lecturer and trainer.",
    body: [
      "Software development gave me the habit of breaking complex systems into understandable parts. Teaching uses the same skill, but with people instead of code.",
      "The strongest courses are not only technically correct. They are structured, paced and connected to what learners actually need to do after the session.",
    ],
  },
  {
    slug: "what-i-am-building-next",
    title: "What I am building next",
    date: "2026-04-25",
    category: "Updates",
    excerpt: "A place for future notes about research, teaching formats, AI systems, software projects and life in Brisbane.",
    body: [
      "This blog is designed as a lightweight space for updates: teaching reflections, AI research notes, project writeups and personal milestones.",
      "New posts can be added in the blogPosts array in src/data/content.js and will appear automatically on the blog page.",
    ],
  },
];

export const softwareProjects = [
  {
    name: "Automatic Mail Sender System",
    type: "Python automation",
    status: "Updated Apr 2026",
    description: "SMTP-based outreach automation system that organises recipients, templates and sending workflows.",
    stack: ["Python", "SMTP", "Automation", "GUI"],
    href: "https://github.com/CarinaSchoppe/Automatic-Mail-Sender-System",
  },
  {
    name: "PISMA Literature Review Pipeline",
    type: "AI research automation",
    status: "Updated Apr 2026",
    description: "AI-powered literature-review workflow for academic search, citation expansion and title/abstract relevance analysis.",
    stack: ["Python", "AI", "Research", "Data pipelines"],
    href: "https://github.com/CarinaSchoppe/PISMA-Literature-Review-Pipeline-Automation-Tool",
  },
  {
    name: "OneDrive Duplicate Cleaner",
    type: "Data cleanup notebook",
    status: "Updated Mar 2026",
    description: "Notebook-based utility for cleaning duplicate files and reducing manual OneDrive maintenance.",
    stack: ["Jupyter Notebook", "Python", "File cleanup"],
    href: "https://github.com/CarinaSchoppe/OneDriveDublicateCleaner",
  },
  {
    name: "Skylife",
    type: "Minecraft / PaperMC plugin",
    status: "Updated Feb 2026",
    description: "Feature-rich PaperMC PvP minigame with lobby-to-match flow, loadouts, ranked UI, coin rewards and player progression.",
    stack: ["Kotlin", "PaperMC", "Minecraft", "Game systems"],
    href: "https://github.com/CarinaSchoppe/Skylife",
  },
  {
    name: "theHunter",
    type: "Kotlin plugin recode",
    status: "Updated Jul 2025",
    description: "A remastered Kotlin recode of a theHunter plugin, showing game-plugin architecture and Kotlin migration work.",
    stack: ["Kotlin", "Plugin development", "Game logic"],
    href: "https://github.com/CarinaSchoppe/theHunter",
  },
  {
    name: "Soundboardz",
    type: "Android app",
    status: "Archive project",
    description: "Android soundboard app project and an example of mobile Kotlin development from earlier portfolio work.",
    stack: ["Kotlin", "Android", "Mobile app"],
    href: "https://github.com/CarinaSchoppe/Soundboardz",
  },
  {
    name: "Color Sweaper",
    type: "Java desktop game",
    status: "Archive project",
    description: "Swing-based mini game showing older Java desktop UI and game-logic practice.",
    stack: ["Java", "Swing", "Game development"],
    href: "https://github.com/CarinaSchoppe/Color-Sweaper",
  },
  {
    name: "Remote Client Server",
    type: "Minecraft remote tooling",
    status: "Archive project",
    description: "Remote access tooling for Minecraft Paper environments, reflecting earlier server and plugin experimentation.",
    stack: ["Kotlin", "Paper", "Remote tooling"],
    href: "https://github.com/CarinaSchoppe/Remote-Client-Server",
  },
];

export const timeline = [
  { year: "2021", title: "IT security learning content", copy: "Worked on didactic IT security content for SMEs in the KMUeinfachSicher project at University of Paderborn." },
  { year: "2022–2023", title: "Education and facilitation", copy: "Built cyber learning foundations and contributed to SCHLAU NRW educational workshops and facilitation." },
  { year: "2023–2024", title: "Entrepreneurship and learning design", copy: "Top Talent Programme and garage33 with Design Thinking, Lean Startup, pitching and agile working methods." },
  { year: "2025", title: "Business IT academic profile", copy: "Completed B.Sc. and M.Sc. with AI, data, HCI, IT management and digitalisation focus areas." },
  { year: "2026", title: "International lecturer and AI trainer", copy: "MBA, AI certifications and remote-first teaching profile based in Brisbane for Europe and APAC." },
];

export const faqs = [
  { q: "What is your main offer?", a: "My main offer is teaching: IT, AI, cybersecurity, business IT, digital skills, workshops, talks and structured professional training." },
  { q: "Do you deliver full courses or only short workshops?", a: "Both. I can deliver 90-minute talks, one-day workshops, multi-day trainings and multi-week courses for education providers." },
  { q: "Do you teach in German or English?", a: "Both. German and English delivery are possible for corporate teams, academies, universities and online training groups." },
  { q: "Do you still do consulting?", a: "Yes, but consulting supports the training focus. I position consulting around AI adoption, curriculum design, workflow training and digital capability building." },
];
