export interface Skill {
    name: string;
    level: number;
    icon: string;
    category?: string;
}

export interface Project {
    projectName: string;
    projectType: string;
    link: { code: string; project: string };
    image: string;
    stack?: string[];
    problem?: string;
    approach?: string;
    highlights?: string[];
}

export interface Testimonial {
    quote: string;
    name: string;
    role: string;
}

export const portfolioData = {
    hero: {
        name: "Atif Moin",
        role: "Senior Software Engineer (Frontend)",
        tagline: "Senior Frontend Engineer.",
        description: "Senior Software Engineer with 3 years building scalable fintech and AI-driven applications using React, Next.js, and TypeScript, from performance optimization and reusable component architecture to LLM integration and full-stack delivery with FastAPI, PostgreSQL, and WebSockets.",
        primaryAction: "View Projects",
        secondaryAction: "Contact Me",
        resumeUrl: "/SSEFE.pdf"
    },
    skills: [
        { name: "JavaScript", level: 98, icon: "SiJavascript", category: "Languages" },
        { name: "TypeScript", level: 96, icon: "SiTypescript", category: "Languages" },
        { name: "Python", level: 80, icon: "SiPython", category: "Languages" },
        { name: "SQL", level: 78, icon: "", category: "Languages" },

        { name: "React", level: 97, icon: "FaReact", category: "Frontend" },
        { name: "Next.js", level: 90, icon: "TbBrandNextjs", category: "Frontend" },
        { name: "Redux Toolkit", level: 88, icon: "SiRedux", category: "Frontend" },
        { name: "RTK Query", level: 82, icon: "", category: "Frontend" },

        { name: "FastAPI", level: 84, icon: "SiFastapi", category: "Backend" },
        { name: "REST APIs", level: 92, icon: "", category: "Backend" },
        { name: "WebSockets", level: 85, icon: "", category: "Backend" },
        { name: "Redis", level: 78, icon: "SiRedis", category: "Backend" },

        { name: "PostgreSQL", level: 82, icon: "SiPostgresql", category: "Database" },
        { name: "SQLAlchemy", level: 78, icon: "SiSqlalchemy", category: "Database" },
        { name: "Alembic", level: 70, icon: "", category: "Database" },

        { name: "Groq API", level: 85, icon: "", category: "AI/LLM" },
        { name: "Gemini API", level: 85, icon: "SiGooglegemini", category: "AI/LLM" },
        { name: "Smallest.ai", level: 75, icon: "", category: "AI/LLM" },
        { name: "Llama 3.3 70B", level: 80, icon: "SiMeta", category: "AI/LLM" },
        { name: "Prompt Engineering", level: 88, icon: "", category: "AI/LLM" },

        { name: "Tailwind CSS", level: 90, icon: "SiTailwindcss", category: "UI" },
        { name: "Chakra UI", level: 90, icon: "SiChakraui", category: "UI" },
        { name: "Material UI", level: 80, icon: "SiMui", category: "UI" },

        { name: "Git", level: 92, icon: "SiGit", category: "Tools" },
        { name: "JIRA", level: 85, icon: "SiJira", category: "Tools" },
        { name: "Axios", level: 88, icon: "SiAxios", category: "Tools" },
        { name: "Docker", level: 75, icon: "SiDocker", category: "Tools" },
        { name: "Claude Code", level: 90, icon: "SiClaude", category: "Tools" },

        { name: "PWA", level: 82, icon: "SiPwa", category: "Other" },
        { name: "Performance Optimization", level: 92, icon: "", category: "Other" },
        { name: "CSP", level: 78, icon: "", category: "Other" },
        { name: "AES Encryption", level: 75, icon: "", category: "Other" }
    ] as Skill[],
    experience: [
        {
            company: "Zopper, Noida",
            role: "Senior Software Engineer (Frontend)",
            duration: "Apr 2026 - Present",
            description: "Led end-to-end development of scalable React applications for fintech platforms, from requirement gathering to production deployment, increasing development speed by 30%. Designed reusable component systems, reducing duplicate effort by 40%. Optimized large data rendering, reducing UI lag by 25%. Defined component architecture and design patterns improving the scalability and maintainability of frontend systems. Built and integrated REST APIs using FastAPI, and managed backend data using SQL. Improved performance on low-end devices, reducing latency by 20%. Collaborated with cross-functional teams to drive architectural and product decisions."
        },
        {
            company: "Zopper, Noida",
            role: "Software Engineer",
            duration: "Jun 2024 - May 2026",
            description: "Focused on code refactoring and UI responsiveness improvements across production fintech applications, working full-time as a Software Engineer."
        },
        {
            company: "Zopper, Noida",
            role: "Associate Software Engineer",
            duration: "Jul 2023 - Jun 2024",
            description: "Worked on UI responsiveness and DOM-focused frontend development, contributing to production applications as an Associate Software Engineer."
        },
        {
            company: "Zopper, Noida",
            role: "Front-End Intern",
            duration: "Jan 2023 - Jun 2023",
            description: "Appointed as a Front-End Intern at Zopper, working with TypeScript and focusing on UI responsiveness."
        }
    ],
    projects: [
        {
            projectName: "Zenova",
            projectType: "AI agent orchestration platform for insurance operations",
            stack: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Redis", "WebSockets", "Groq API", "Gemini 2.5 Flash", "Smallest.ai"],
            problem: "Insurance operators across multiple banking clients needed to run outbound voice campaigns, email workflows, and policy renewals at scale without manually coordinating agents for each client.",
            approach: "Built a full-stack multi-tenant platform with per-org PostgreSQL schema isolation via SQLAlchemy and Alembic, a Redis-backed WebSocket connection manager for real-time pub/sub, and a multi-agent mission registry with JWT-based role access control across configurable agent types.",
            highlights: [
                "Automated outbound voice calls, email campaigns, and renewal workflows across Axis Bank, Ujjivan Bank, and Star Health.",
                "Integrated Groq (Llama 3.3 70B) with a Gemini 2.5 Flash auto-fallback for AI chat, transcript analysis, KPI extraction, and intent detection, with multi-key rotation on rate limits.",
                "Integrated Smallest.ai voice AI to trigger automated outbound calls, streaming live call transcripts to the UI in real time over WebSockets.",
                "Architected a multi-agent mission registry spanning 30+ agents and 100+ missions across 5+ insurance workflows.",
                "Built a real-time nudge system pushing live sales cues to field agents during active calls, improving upsell response rates."
            ],
            link: { code: "", project: "" },
            image: ""
        },
        {
            projectName: "Zopper UI",
            projectType: "Internal React component library",
            stack: ["React", "TypeScript"],
            problem: "Multiple fintech product teams were rebuilding the same UI patterns independently, slowing delivery and fragmenting the look and feel across products.",
            approach: "Designed and built a shared, reusable component library with a consistent design system adopted across production applications.",
            highlights: [
                "Improved development efficiency by 40% across teams.",
                "Shipped features used in multiple production fintech applications.",
                "Established a scalable design system ensuring UI consistency across products."
            ],
            link: { code: "", project: "" },
            image: ""
        },
        {
            projectName: "EmailTemplateFlow",
            projectType: "No-code drag-and-drop email builder",
            stack: ["React", "TypeScript"],
            problem: "Marketing needed to build and ship HTML emails without engineering support, but hand-written templates routinely broke across email clients.",
            approach: "Built a drag-and-drop builder backed by a structured, client-safe email architecture.",
            highlights: [
                "Reduced email creation time by 60%.",
                "Solved cross-client rendering issues across Outlook and Gmail with structured markup."
            ],
            link: { code: "", project: "" },
            image: ""
        },
        {
            projectName: "Interesting UI",
            projectType: "Animation component library",
            stack: ["Next.js", "GSAP", "Framer Motion"],
            problem: "Every new project was writing one-off animation code instead of reusing production-grade, tested components.",
            approach: "Built a standalone library of high-performance animated components tuned for smooth playback.",
            highlights: [
                "40+ animated components achieving 60 FPS."
            ],
            link: { code: "", project: "" },
            image: ""
        },
        {
            projectName: "smart-virtual-scroll",
            projectType: "Open-source npm package, list virtualization",
            stack: ["JavaScript", "TypeScript"],
            problem: "Rendering large lists directly into the DOM caused severe scroll jank and memory bloat.",
            approach: "Built a virtualization library that only renders visible list items, and published it as an open-source npm package.",
            highlights: [
                "Improved list rendering performance by 80%.",
                "Reduced DOM node count and memory usage significantly."
            ],
            link: { code: "https://github.com/Atifmoin19/smart-virtual-scroll", project: "https://www.npmjs.com/package/smart-virtual-scroll" },
            image: ""
        },
        {
            projectName: "vite-pwa-updater",
            projectType: "Open-source npm package, PWA update manager",
            stack: ["JavaScript", "Vite", "PWA"],
            problem: "PWAs kept silently serving stale cached versions with no clean way to prompt users to update.",
            approach: "Built a plug-and-play update manager with background update detection and a non-blocking UI notification.",
            highlights: [
                "Published as an open-source npm package.",
                "Background update detection with non-blocking UI notifications."
            ],
            link: { code: "https://github.com/Atifmoin19/vite-pwa-updater", project: "https://www.npmjs.com/package/vite-pwa-updater" },
            image: ""
        }
    ] as Project[],
    testimonials: [] as Testimonial[],
    contact: {
        email: "atifmoin19@gmail.com",
        socials: [
            { network: "GitHub", url: "https://github.com/Atifmoin19", icon: "FaGithub" },
            { network: "LinkedIn", url: "https://www.linkedin.com/in/atif-moin-858167179/", icon: "FaLinkedin" },
            { network: "Portfolio", url: "https://atifmoin19.github.io/three-portfolio/", icon: "FaGlobe" }
        ]
    }
};
