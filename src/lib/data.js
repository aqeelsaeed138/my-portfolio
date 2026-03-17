import { Code, Database, Cloud, Wrench, Brain, Bot } from "lucide-react";

export const skills = [
  // Frontend
  { name: "React.js", category: "frontend", icon: "react.webp" },
  { name: "Next.js", category: "frontend", icon: "next.webp" },
  { name: "JavaScript", category: "frontend", icon: "javaScript.webp" },
  { name: "TypeScript", category: "frontend", icon: "typeScript.webp" },
  { name: "Tailwind CSS", category: "frontend", icon: "tailwind.webp" },
  { name: "HTML5", category: "frontend", icon: "html.webp" },
  { name: "CSS3", category: "frontend", icon: "css.webp" },
  { name: "Zustand", category: "frontend", icon: "zustand.svg" },

  // Backend (MERN Focused)
  { name: "Node.js", category: "backend", icon: "node.webp" },
  { name: "Express.js", category: "backend", icon: "express.webp" },
  { name: "MongoDB", category: "backend", icon: "mongodb.webp" },
  { name: "PostgreSQL", category: "backend", icon: "postgres.webp" },
  { name: "Supabase", category: "backend", icon: "supabase-logo-icon.webp" },
  { name: "Redis", category: "backend", icon: "redis.webp" },

  // Cloud & DevOps
  { name: "Docker", category: "cloud", icon: "Docker.webp" },
  { name: "Kubernetes", category: "cloud", icon: "kubernetes.webp" },
  { name: "Google Kubernetes Engine", category: "cloud", icon: "gke.webp" },
  { name: "Azure Kubernetes Service", category: "cloud", icon: "aks.webp" },
  { name: "Firebase", category: "cloud", icon: "firebase.webp" },

  // AI / NLP
  { name: "NLP", category: "AI", icon: "nlp.webp" },
  { name: "Machine Learning", category: "AI", icon: "ml.webp" },
  { name: "Deep Learning", category: "AI", icon: "dl.webp" },
  { name: "Transformers", category: "AI", icon: "transformer.webp" },
  { name: "Gemini AI", category: "AI", icon: "gemini.webp" },

  // Tools
  { name: "Git", category: "tools", icon: "git.webp" },
  { name: "GitHub", category: "tools", icon: "github.webp" },
  { name: "VS Code", category: "tools", icon: "vs-code.webp" },
  { name: "Postman", category: "tools", icon: "postman.webp" },
];
export const skillCategories = [
  { id: "all", name: "All Skills", icon: Code },
  { id: "frontend", name: "Frontend", icon: Code },
  { id: "backend", name: "Backend", icon: Database },
  { id: "cloud", name: "Cloud & DevOps", icon: Cloud },
  { id: "AI", name: "AI / NLP", icon: Bot },
  { id: "tools", name: "Tools", icon: Wrench },
];
export const projects = [
  {
    id: 1,
    title: "Inventory Genius",
    description: "Cloud-native inventory management system with multi-tenant architecture, RBAC, and real-time analytics.",
    image: "/projects/inventary.png",
    tags: ["React", "TypeScript", "Supabase", "PostgreSQL", "Docker", "Kubernetes"],
    demoUrl: "https://inventory-genius-public.vercel.app/",
    githubUrl: "https://github.com/aqeelsaeed138/inventory-genius-public",
    featured: true,
    category: "Full Stack / DevOps"
  },

  {
    id: 2,
    title: "Smart HR Suite",
    description: "Multi-tenant HR management system with authentication, role-based access, and employee analytics.",
    image: "/projects/EMS.png",
    tags: ["React", "TypeScript", "Supabase", "Tailwind", "RLS"],
    demoUrl: "https://smart-hr-suite.vercel.app/login",
    githubUrl: "",
    featured: true,
    category: "Full Stack SaaS"
  },

  {
    id: 3,
    title: "Docsense AI",
    description: "AI-powered document processing system with OCR, NER, classification, and summarization using Gemini AI.",
    image: "/projects/docsense.png",
    tags: ["React", "Supabase", "Gemini AI", "NLP", "OCR"],
    demoUrl: "https://docsense-ai.vercel.app/",
    githubUrl: "",
    featured: true,
    category: "AI / NLP"
  },

  {
    id: 4,
    title: "Kubernetes & DevOps Labs",
    description: "Hands-on deployment of containerized applications using Kubernetes, GKE, and AKS with real-world DevOps practices.",
    image: "/projects/kubernetes.webp",
    tags: ["Docker", "Kubernetes", "GKE", "AKS"],
    demoUrl: "https://github.com/aqeelsaeed138/kubernetes",
    githubUrl: "https://github.com/aqeelsaeed138",
    featured: true,
    category: "DevOps / Cloud"
  }
];

export const aboutSkills = [
  {
    icon: Code,
    title: "MERN Stack Development",
    description: "Building scalable full-stack applications using React, Node.js, Express, and MongoDB.",
  },
  {
    icon: Cloud,
    title: "DevOps & Cloud",
    description: "Deploying applications using Docker, Kubernetes, GKE, and AKS with cloud-native practices.",
  },
  {
    icon: Brain,
    title: "AI & NLP",
    description: "Exploring NLP pipelines, deep learning models, and AI-powered applications.",
  }
];

export const experiences = [
  {
    id: 1,
    company: "Personal Projects",
    role: "Full Stack Developer",
    
    // ✅ Fixed dates
    startDate: "2024",
    endDate: "Present",
    period: "1+ Years",

    // ✅ Added missing fields
    type: "Self-Employed",
    location: "Lahore, Pakistan",
    logo: "/logos/personal.png", // 👉 put any placeholder image in public/logos

    description:
      "Developed multiple full-stack and AI-powered applications using MERN stack, DevOps tools, and modern cloud technologies.",

    responsibilities: [
      "Built scalable MERN stack applications with authentication, REST APIs, and responsive UI",
      "Implemented Docker containerization and Kubernetes deployments (Minikube, GKE)",
      "Integrated AI/NLP features using APIs like Gemini for smart automation",
      "Worked with MongoDB, PostgreSQL, and Supabase for backend and database management"
    ],

    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "Supabase",
      "Docker",
      "Kubernetes",
      "Firebase",
      "TypeScript"
    ],

    // ✅ Added achievements (important for UI expand section)
    achievements: [
      "Successfully deployed multiple applications on Vercel and cloud platforms",
      "Improved application performance and scalability using containerization",
      "Built production-ready full-stack projects for portfolio and freelance work",
      "Gained hands-on experience with DevOps and cloud-native architecture"
    ],

    isActive: true
  }
];