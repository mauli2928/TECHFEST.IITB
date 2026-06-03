/** Official Techfest IIT Bombay — https://www.techfest.org */

export const TECHFEST = {
  name: "Techfest",
  institute: "IIT Bombay",
  tagline: "Spreading Science and Technology",
  website: "https://www.techfest.org",
  email: "info@techfest.org",
  location: "Indian Institute of Technology Bombay, Powai, Mumbai",
} as const;

export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#evolution", label: "Evolution" },
  { href: "#technology", label: "Tech" },
  { href: "#experience", label: "Interface" },
  { href: "#events", label: "Events" },
  { href: "#community", label: "Builders" },
] as const;

export const TECHFEST_STATS = [
  { value: 180, suffix: "K+", label: "Annual Footfall" },
  { value: 35, suffix: "K+", label: "Competition Participants" },
  { value: 20, suffix: "+", label: "Countries" },
  { value: 27, suffix: "+", label: "Years of Legacy" },
] as const;

export const HERO_STATS = [
  { value: "180K+", label: "Visitors" },
  { value: "35K+", label: "Competitors" },
  { value: "20+", label: "Nations" },
] as const;

export const EVOLUTION_STAGES = [
  {
    id: "human",
    phase: "01",
    title: "Human Intelligence",
    description:
      "Curiosity, invention, and the drive to understand — the biological foundation from which every breakthrough at Techfest emerges.",
  },
  {
    id: "ai",
    phase: "02",
    title: "Artificial Intelligence",
    description:
      "From Datamatics Hackathon to Hack AI — machine learning and generative systems redefine what minds can achieve together.",
  },
  {
    id: "neural",
    phase: "03",
    title: "Neural Integration",
    description:
      "Brain-computer paradigms and intelligent interfaces — where human intuition meets computational precision at global scale.",
  },
  {
    id: "cybernetic",
    phase: "04",
    title: "Cybernetic Civilization",
    description:
      "Robowars arenas, autonomous drones, and humanoid conclaves — engineered symbiosis of flesh, metal, and code.",
  },
  {
    id: "future",
    phase: "05",
    title: "Future Engineering",
    description:
      "Techfest IIT Bombay — where 175,000+ innovators annually prototype the civilization humanity is becoming.",
  },
] as const;

export const TECHNOLOGY_DOMAINS = [
  {
    id: "ai",
    name: "Artificial Intelligence & ML",
    tag: "HACK-AI",
    description:
      "Datamatics Hackathon, Hack AI, and ML challenges — building intelligent systems for real-world impact.",
  },
  {
    id: "robotics",
    name: "Robotics & Automation",
    tag: "ROBOWARS",
    description:
      "International Robowars, Roboracer, Cozmoclench, Micromouse — combat and precision robotics at world-class scale.",
  },
  {
    id: "space",
    name: "Aerospace & Drones",
    tag: "ORBIT-X",
    description:
      "Drone Challenge and Boeing Aeromodelling — flight systems, UAVs, and aerospace engineering frontiers.",
  },
  {
    id: "quantum",
    name: "Computing & Code",
    tag: "CODE-Ω",
    description:
      "International Coding Challenge, World Programming Championship, and competitive programming at global level.",
  },
  {
    id: "neural",
    name: "Aquatics & Autonomous Systems",
    tag: "AUV-9",
    description:
      "Autonomous Underwater Vehicle Challenge — next-gen navigation, sensing, and marine robotics.",
  },
  {
    id: "security",
    name: "Fintech & Cyber",
    tag: "SHIELD",
    description:
      "International competitions in fintech, secure systems, and the digital infrastructure of tomorrow.",
  },
  {
    id: "sustainable",
    name: "Ideation & Impact",
    tag: "IDEATE",
    description:
      "Urban Futurism, Safetronics, Tech Aid — solving real-world problems through breakthrough innovation.",
  },
] as const;

export const EVENTS = [
  {
    id: "robowars",
    name: "International Robowars",
    category: "Robotics",
    status: "live" as const,
    description:
      "Flagship combat robotics in a bulletproof arena — teams from across the globe design battle machines for the ultimate showdown.",
  },
  {
    id: "competitions",
    name: "International Competitions",
    category: "Compete",
    status: "live" as const,
    description:
      "35,000+ participants across coding, aerospace, aquatics, gaming, structural engineering, and AI/ML challenges.",
  },
  {
    id: "lectures",
    name: "Lecture Series",
    category: "Knowledge",
    status: "active" as const,
    description:
      "Keynotes from national leaders, industry pioneers, and global visionaries at the frontier of science and technology.",
  },
  {
    id: "exhibitions",
    name: "Exhibitions & TechConnect",
    category: "Showcase",
    status: "live" as const,
    description:
      "140+ working models, R&D demos, and TechConnect — manufacturing, AI, biosciences, defence, and game design innovations.",
  },
  {
    id: "workshops",
    name: "Workshops & Hands-On Labs",
    category: "Learn",
    status: "open" as const,
    description:
      "Immersive sessions where drones fly, robots battle, and participants build skills in emerging technologies firsthand.",
  },
  {
    id: "ideate",
    name: "Ideate Competitions",
    category: "Innovation",
    status: "open" as const,
    description:
      "Urban Futurism, Safetronics, Aarohan, Tech Aid — invent solutions to humanity's most pressing engineering challenges.",
  },
  {
    id: "zonals",
    name: "International Zonals",
    category: "Global",
    status: "active" as const,
    description:
      "Official qualifying rounds across countries — winners advance to compete at Techfest IIT Bombay.",
  },
  {
    id: "performances",
    name: "Shows & Night Events",
    category: "Experience",
    status: "live" as const,
    description:
      "International performances, high-energy showcases, and unforgettable nights celebrating innovation culture.",
  },
] as const;

export const EXPERIENCE_HIGHLIGHTS = [
  "International Robowars arena",
  "Drone flights & Boeing Aeromodelling",
  "Global Humanoid Conclave",
  "TechConnect R&D exhibition",
  "E-sports & gaming championships",
  "ResCon research conclave",
] as const;

export const FUTURE_BUILDERS = [
  {
    name: "Competitors",
    role: "35,000+ prove their mettle globally",
    count: "35K+",
  },
  {
    name: "Visitors",
    role: "180,000+ experience innovation live",
    count: "180K+",
  },
  {
    name: "Countries",
    role: "20+ nations at the frontier of tech",
    count: "20+",
  },
  {
    name: "Workshops",
    role: "Hands-on labs in emerging tech",
    count: "100+",
  },
  {
    name: "Exhibits",
    role: "Industry & institute showcases",
    count: "140+",
  },
  {
    name: "Startups",
    role: "Ideate & entrepreneurial minds",
    count: "∞",
  },
] as const;

export const FOOTER_LINKS = [
  { label: "Official Website", href: "https://www.techfest.org" },
  { label: "Competitions", href: "https://www.techfest.org" },
  { label: "Contact", href: "mailto:info@techfest.org" },
  { label: "IIT Bombay", href: "https://www.iitb.ac.in" },
] as const;
