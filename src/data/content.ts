export type Project = {
  slug: string;
  title: string;
  category: string;
  kind: "Professional" | "Independent";
  description: string;
  image: string;
  alt: string;
  accent: string;
  externalUrl?: string;
  externalLabel?: string;
};

export const projects: Project[] = [
  {
    slug: "aava-2",
    title: "AAVA 2.0",
    category: "Agentic platform",
    kind: "Professional",
    description:
      "Reduced manual task effort by approximately 40% through simplified, structured AI agents and workflow configuration.",
    image: "/images/Z947hAxBvgZI21zOjWsGc7EGRGQ.png",
    alt: "AAVA wordmark on white",
    accent: "#F1F1EF",
  },
  {
    slug: "hp-inc",
    title: "HP Inc.",
    category: "Enterprise platforms",
    kind: "Professional",
    description:
      "Designed UX improvements for HP Global Solutions and printer parts management platforms to streamline complex enterprise workflows.",
    image: "/images/tIgb7SPZGDL6R8Cw93LrLPmD0.png",
    alt: "HP logo in blue",
    accent: "#E8F4FB",
  },
  {
    slug: "axos-bank",
    title: "Axos Bank",
    category: "Digital banking",
    kind: "Professional",
    description:
      "Designed and scaled Axos Bank’s design system to ensure consistency across digital banking products.",
    image: "/images/N0oDVYZIs3sUL40mJPzSHDNeFs.png",
    alt: "Axos Bank wordmark",
    accent: "#f5f0e7",
  },
  {
    slug: "cvs-healthcare",
    title: "CVS Healthcare",
    category: "Digital healthcare",
    kind: "Professional",
    description:
      "Created accessible, user-centered interfaces that improved clarity and trust in digital healthcare.",
    image: "/images/NYBlesRRoK6IxkAKLy1zFYFw0eQ.png",
    alt: "CVS Health wordmark",
    accent: "#f7e8e4",
  },
  {
    slug: "startwise-ai",
    title: "Startwise AI",
    category: "From idea to execution · UX case study",
    kind: "Independent",
    description:
      "A product design project exploring how AI and structured workflows can help people research, plan, and transform business ideas into execution-ready outcomes.",
    image: "/images/4MrtAXAIXpIDpCQtvymkgYt4Y1c.png",
    alt: "Startwise AI UX case study cover showing a product dashboard and workflow concepts",
    accent: "#f1e9ff",
    externalUrl:
      "https://www.figma.com/proto/mWzmrItXxMeqom8OdAbDY9/Valma-Creations_UX-Design?page-id=3251%3A3810&node-id=3478-4444&viewport=-395%2C183%2C0.5&t=1mjW58dP0UOdLUYY-1&scaling=min-zoom&content-scaling=fixed",
    externalLabel: "Open source prototype",
  },
  {
    slug: "tsb-saving-pot",
    title: "TSB · Saving Pot",
    category: "Shared savings · Banking",
    kind: "Independent",
    description:
      "Saving Pot enables couples to set shared goals, track progress in real time, and clearly see individual contributions—building transparency and trust throughout the savings journey.",
    image: "/images/QEcWTYDbFBlrcfV3oR8Bl24gTH4.png",
    alt: "TSB Saving Pot concept with a mobile screen and blue savings interface",
    accent: "#112451",
    externalUrl:
      "https://www.figma.com/proto/qxTb6YUyPlUxKO3e0bbhxL/WIP?node-id=3651-113685&t=BhtZ0OIN93lA90FP-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=3651%3A113685",
    externalLabel: "Open source prototype",
  },
  {
    slug: "flexi-ui-kit",
    title: "Flexi UI Kit",
    category: "Design system · Figma",
    kind: "Independent",
    description:
      "A flexible Figma UI kit with variable tokens, effortless light and dark mode switching, and customizable themes to streamline workflows and adapt to any brand style.",
    image: "/images/9zRez1ItuaOXm2jTxWAffFlNME.png",
    alt: "Flexi UI kit page showing theme options, tokens, and interface components",
    accent: "#f0efff",
    externalUrl: "https://bharathwaajintoux.framer.website/trenco",
    externalLabel: "Open original project route",
  },
  {
    slug: "gallivanter",
    title: "Gallivanter",
    category: "Social travel application · Case study",
    kind: "Independent",
    description:
      "A social travel application. The source archive includes a project visual and title, but no project-specific written overview.",
    image: "/images/jmeeTKsPIfGVFKfj2G3DyoEaCdw.png",
    alt: "Gallivanter social travel app overview with mobile travel screens",
    accent: "#edf4fa",
  },
  {
    slug: "ai-operations-analytics",
    title: "AI Operations Analytics",
    category: "AI · Analytics dashboard",
    kind: "Independent",
    description:
      "A dashboard providing a centralized view of AI performance, usage, and system health.",
    image: "/images/WJNTL69LcXAXLpbHZMwcVefAiVo.png",
    alt: "Dark AI operations dashboard with performance, usage, and system health metrics",
    accent: "#171923",
    externalUrl: "https://bharathwaajintoux.framer.website/trenco",
    externalLabel: "Open original project route",
  },
  {
    slug: "surgi-tech",
    title: "Surgi Tech",
    category: "Landing page · Surgical technology",
    kind: "Independent",
    description:
      "Landing page UI design for a surgical technical supply industry. The source describes it as receiving very good customer reviews and offering easy contact support.",
    image: "/images/4zQfB8dvS8HFzMPtyhokrTtFAo.png",
    alt: "Surgi Tech landing page design for surgical supplies and support",
    accent: "#eaf3f4",
    externalUrl:
      "https://www.figma.com/proto/mWzmrItXxMeqom8OdAbDY9/Valma-Creations_UX-Design?page-id=3251%3A3810&node-id=3478-4444&viewport=-395%2C183%2C0.5&t=1mjW58dP0UOdLUYY-1&scaling=min-zoom&content-scaling=fixed",
    externalLabel: "Open source prototype",
  },
];

export const experiences = [
  {
    role: "Product Designer - Associate",
    period: "September 2025 — Current",
    logo: "/images/VhAWFcEOl0fIkxjS2Pjxrfxg.png",
    logoAlt: "Ascendion logo",
    description:
      "Works at the intersection of user needs, business goals, and technical feasibility to turn complex problems into intuitive, scalable experiences. Contributions also include product strategy, design systems, experience direction, design initiatives, and cross-functional collaboration.",
  },
  {
    role: "Product Designer - ELT",
    period: "September 2024 — September 2025",
    logo: "/images/VhAWFcEOl0fIkxjS2Pjxrfxg.png",
    logoAlt: "Ascendion logo",
    description:
      "Worked on the Play+ Design System, managing Figma tokenization for scalable, consistent design; built and maintained components for rapid prototyping and handoff; designed user and task flows; conducted usability testing; and contributed to AI agentic workflows and the AAVA Agentic Platform.",
  },
  {
    role: "UX Designer Intern",
    period: "June 2024 — July 2024 · 2 months",
    logo: "/images/GeE4fLaVH8z3C2l0X59FtLbSu7M.png",
    logoAlt: "Anamahrs Web Solutions logo",
    description:
      "Completed a UI/UX design internship after formal training, gaining hands-on experience in stakeholder interviews, advanced Figma workflows, and usability testing while contributing to user-centered design projects.",
  },
  {
    role: "UI/UX Trainee",
    period: "6-month program · dates not listed",
    logo: "/images/K3EnWPEQ6fgQphEO1qFh4EIgI.png",
    logoAlt: "GUVI and HCL logo",
    description:
      "Completed a six-month UI/UX program covering design thinking, user research, wireframing, and prototyping. Created end-to-end UX case studies using Figma and usability testing to design user-centered digital experiences.",
  },
];

export const capabilities = [
  { name: "Design thinking", description: "Applying human-centered design to uncover user needs, ideate solutions, and rapidly prototype for validation." },
  { name: "Design systems", description: "Building and maintaining scalable design systems for consistency, reusability, and efficient collaboration." },
  { name: "User research", description: "Using qualitative and quantitative research to uncover needs, behaviors, and pain points." },
  { name: "Journey mapping", description: "Visualizing user experiences to identify pain points and opportunities." },
  { name: "Accessibility", description: "Designing inclusive experiences that meet accessibility standards." },
  { name: "Interaction design", description: "Designing smooth, engaging interactions that enhance usability." },
  { name: "UX writing", description: "Crafting clear, user-focused microcopy and instructions." },
  { name: "User testing", description: "Planning, conducting, and analyzing usability tests to validate decisions and improve experience." },
  { name: "Information architecture", description: "Organizing content and structure for clear, intuitive navigation." },
  { name: "User & task flows", description: "Mapping goal-oriented interactions step by step for seamless, intuitive experiences." },
  { name: "Wireframing & prototyping", description: "Creating low- and high-fidelity prototypes to test and communicate design solutions." },
  { name: "Visual design", description: "Crafting appealing, accessible interfaces aligned with brand guidelines." },
];

export const tools = [
  { name: "Figma", icon: "/images/figma-brandmark.svg" },
  { name: "Claude AI", icon: "https://cdn.simpleicons.org/claude" },
  { name: "Framer", icon: "https://cdn.simpleicons.org/framer" },
  { name: "Lovable.dev", icon: "/images/phIbv03I17Ph8q2bd4TWIdc1bk.png" },
  { name: "ChatGPT", icon: "/images/HII7G48lo9xcnLvOcbEdzJsRYc.png" },
  { name: "Maze", icon: "https://cdn.simpleicons.org/maze" },
  { name: "Miro", icon: "https://cdn.simpleicons.org/miro" },
  { name: "Jira", icon: "https://cdn.simpleicons.org/jira" },
  { name: "Bolt.dev", icon: "/images/mdyt2DUuAIJl6362iddSP1XO88.png" },
  { name: "Codex", icon: "https://images.ctfassets.net/kftzwdyauwt9/7E1L5KrvfinYdmBBNDPhf5/710a8a46258bafe8fe2d26f31ff242c0/Codex_Landing_Page_SEO.png?fit=fill&h=128&w=128" },
  { name: "Copilot", icon: "https://cdn.simpleicons.org/githubcopilot" },
  { name: "Claude Code", icon: "https://cdn.simpleicons.org/claudecode" },
];

export const motivations = [
  { name: "Research", description: "Understanding what people do, why they do it, and how the experience can improve." },
  { name: "Problem solving", description: "Blending analytical thinking with design intuition." },
  { name: "Crafting interfaces", description: "Creating clean, intuitive visual design with accessibility and usability in mind." },
];

export const achievements = [
  {
    title: "Champion of Excellence · Q1 & Q2 2025",
    description: "Awarded Ascendion’s Champion of Excellence for two consecutive quarters in 2025, recognizing consistent performance and high-impact UX contributions.",
    image: "/images/SwA31B1ON3ZHPKw4cCHEzkkzM3c.jpg",
    alt: "Champion of Excellence certificate for Bharathwaaj Murugan",
  },
  {
    title: "Product–Business Alignment Masterclass",
    description: "Attended a session by Satyam Kantamneni, Founder of UX Reactor, on aligning product strategy with business objectives to deliver meaningful user experiences.",
    image: "/images/F7gNux9gaxiB8KycENyxSIrOg.jpg",
    alt: "Team group photo from the Product–Business Alignment Masterclass",
  },
  {
    title: "Collaborative ideation through card sorting",
    description: "Applied card-sorting techniques in team workshops to structure information architecture and drive user-centered ideation.",
    image: "/images/GsJzr7VUxdefzKCzfgYuATuq6xs.jpg",
    alt: "Workshop board with cards and notes used for collaborative ideation",
  },
  {
    title: "Learning the 5D UX problem-solving framework",
    description: "Received User Experience Design to Fuel Business Growth as a gift from Satyam Kantemneni and learned the 5D methodology for structured, outcome-driven UX problem solving.",
    image: "/images/0Z6QeO6YuF7QEePhhuuunjyqUxA.jpg",
    alt: "User Experience Design to Fuel Business Growth book",
  },
  {
    title: "Generative AI 101 · Cognixia",
    description: "Completed Cognixia’s Generative AI Level 101 certification covering LLMs, prompt engineering, and real-world GenAI applications.",
    image: "/images/5yLhpaKRnQ8PpOSeoh8rgyMzGE.jpg",
    alt: "Cognixia Generative AI Level 101 certificate",
  },
];

export const sourceLinks = {
  portfolio: "https://bharathwaajintoux.framer.website/",
  flexiAndAnalyticsRoute: "https://bharathwaajintoux.framer.website/trenco",
  linkedin: "https://in.linkedin.com/in/bharathwaaj-murugan-37a8472b5",
};

