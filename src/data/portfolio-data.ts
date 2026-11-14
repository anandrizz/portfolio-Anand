export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  highlights: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  category: "Full Stack" | "AI / ML" | "Backend";
  metrics?: { label: string; value: string }[];
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  startDate: string;
  endDate: string;
  type: string;
  responsibilities: string[];
  achievements: string[];
  techStack: string[];
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level?: "Core" | "Proficient" | "Familiar" }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  details: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  credentialUrl?: string;
  date?: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Anand Jolly",
    initials: "AJ",
    title: "Full Stack Developer",
    secondaryTitle: "Software Engineer | Backend Development | AI-powered Applications",
    location: "Bareilly, Uttar Pradesh, India",
    status: "Available for opportunities",
    email: "anandj45678@gmail.com",
    github: "https://github.com/anandrizz",
    linkedin: "https://www.linkedin.com/in/anand-jolly-231339263/",
    summary:
      "I'm a Full Stack Developer who enjoys building scalable web applications, designing efficient backend systems, and creating seamless user experiences. I work across modern frontend and backend technologies, with an interest in AI-powered applications and intelligent automation.",
    bio: [
      "BCA graduate from Invertis University with hands-on full stack development experience across the complete software lifecycle.",
      "Specialized in architecting reliable backend systems, robust RESTful APIs, secure authentication flows, and high-performance database schemas.",
      "Experienced with modern frontend integrations, creating responsive, accessible, and fast user interfaces.",
      "Passionate about exploring generative AI, LLM tooling, and intelligent automation to build practical, real-world solutions.",
    ],
  },

  experience: [
    {
      company: "TalentxMinds",
      role: "Full Stack Developer Intern",
      location: "Remote",
      period: "August 2026 – September 2026",
      startDate: "Aug 2026",
      endDate: "Sep 2026",
      type: "Internship",
      responsibilities: [
        "Completed an intensive 30-day AI-driven Java Full Stack training program covering Core Java, OOP, Spring Boot, MySQL, React.js, and JWT authentication.",
        "Built and shipped REST APIs using Spring Boot, Spring Data JPA, and MySQL.",
        "Developed authentication using Spring Security and JWT with protected routes and role-based access control (RBAC).",
        "Integrated React.js with Spring Boot using Axios, implementing CRUD operations, live search, and server-side pagination.",
      ],
      achievements: [
        "Improved average endpoint response time by 35% through query optimization, indexed fields, and efficient caching strategies.",
        "Contributed to MongoDB schema redesign, boosting read throughput by 30% for high-frequency queries.",
        "Engineered end-to-end token refresh and route guard architecture, preventing unauthorized endpoint access.",
      ],
      techStack: [
        "Java",
        "Spring Boot",
        "Spring Security",
        "Spring Data JPA",
        "MySQL",
        "MongoDB",
        "React.js",
        "JWT",
        "Axios",
      ],
    },
  ] as Experience[],

  projects: [
    {
      id: "student-management-system",
      title: "Student Management System",
      tagline: "Full-stack academic administration platform with robust RBAC & high-throughput APIs",
      description:
        "A full-stack student management application engineered with role-based access control for administrators, teachers, and students. Provides end-to-end workflow automation for academic records, user governance, and data verification.",
      technologies: ["JavaScript", "Node.js", "Express.js", "MongoDB", "JWT", "RBAC", "Render"],
      category: "Full Stack",
      featured: true,
      githubUrl: "https://github.com/anandrizz/Student-management-system",
      metrics: [
        { label: "REST Endpoints", value: "15+" },
        { label: "Access Roles", value: "3 Tiers" },
        { label: "Deployment", value: "Render CI/CD" },
      ],
      highlights: [
        "Secure JWT authentication with bcrypt password hashing and token validation pipelines.",
        "Granular Role-Based Access Control (RBAC) separating Admin, Faculty, and Student permissions.",
        "15+ scalable REST API endpoints handling enrollment, grades, profile management, and audits.",
        "Optimized MongoDB indexing and compound queries for rapid data retrieval.",
        "Comprehensive validation, rate limiting, and centralized error-handling middleware.",
        "Production deployment on Render with automated continuous integration (CI/CD).",
      ],
    },
    {
      id: "movie-recommendation-system",
      title: "Movie Recommendation System",
      tagline: "FastAPI recommendation engine processing 50K+ titles with vectorized cosine similarity",
      description:
        "A machine learning-driven recommendation engine that delivers personalized movie suggestions using content-based and collaborative filtering approaches across extensive film catalogs.",
      technologies: ["Python", "FastAPI", "Scikit-learn", "Pandas", "NumPy", "REST API", "Swagger"],
      category: "AI / ML",
      featured: true,
      githubUrl: "https://github.com/anandrizz/movie-recommendation-system",
      metrics: [
        { label: "Records Processed", value: "50,000+" },
        { label: "Latency", value: "<120ms" },
        { label: "API Docs", value: "Interactive Swagger" },
      ],
      highlights: [
        "Vectorized cosine similarity calculations powered by Scikit-learn TF-IDF matrix generation.",
        "High-performance dataset processing across 50,000+ movie records using Pandas & NumPy.",
        "Asynchronous FastAPI backend providing sub-120ms response times under load.",
        "Interactive Swagger & OpenAPI documentation for seamless client integration.",
        "Hybrid content-based feature extraction factoring genres, cast, crew, and narrative keywords.",
        "Optimized algorithmic matrix operations with lightweight in-memory caching.",
      ],
    },
  ] as Project[],

  skills: [
    {
      category: "Languages",
      skills: [
        { name: "JavaScript", level: "Core" },
        { name: "TypeScript", level: "Core" },
        { name: "Python", level: "Core" },
        { name: "Java", level: "Core" },
        { name: "SQL", level: "Proficient" },
      ],
    },
    {
      category: "Frontend",
      skills: [
        { name: "React.js", level: "Core" },
        { name: "Next.js", level: "Core" },
        { name: "Tailwind CSS", level: "Core" },
        { name: "HTML5", level: "Proficient" },
        { name: "CSS3", level: "Proficient" },
        { name: "Bootstrap", level: "Familiar" },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: "Core" },
        { name: "Express.js", level: "Core" },
        { name: "Spring Boot", level: "Core" },
        { name: "Spring Security", level: "Proficient" },
        { name: "Spring Data JPA", level: "Proficient" },
        { name: "Hibernate", level: "Proficient" },
        { name: "REST APIs", level: "Core" },
      ],
    },
    {
      category: "Databases",
      skills: [
        { name: "MongoDB", level: "Core" },
        { name: "MySQL", level: "Core" },
        { name: "PostgreSQL", level: "Proficient" },
        { name: "Mongoose", level: "Core" },
        { name: "Prisma", level: "Proficient" },
      ],
    },
    {
      category: "Authentication & Security",
      skills: [
        { name: "JWT", level: "Core" },
        { name: "OAuth", level: "Proficient" },
        { name: "bcrypt", level: "Core" },
        { name: "RBAC", level: "Core" },
      ],
    },
    {
      category: "Cloud & DevOps",
      skills: [
        { name: "Docker", level: "Proficient" },
        { name: "AWS EC2", level: "Proficient" },
        { name: "AWS S3", level: "Proficient" },
        { name: "Vercel", level: "Core" },
        { name: "Render", level: "Core" },
        { name: "CI/CD", level: "Proficient" },
        { name: "Git", level: "Core" },
        { name: "GitHub", level: "Core" },
      ],
    },
    {
      category: "AI & LLM",
      skills: [
        { name: "OpenAI API", level: "Proficient" },
        { name: "Google Gemini API", level: "Proficient" },
        { name: "LangChain", level: "Proficient" },
        { name: "Hugging Face", level: "Familiar" },
        { name: "LlamaIndex", level: "Familiar" },
      ],
    },
    {
      category: "Tools & Workflow",
      skills: [
        { name: "Postman", level: "Core" },
        { name: "VS Code", level: "Core" },
        { name: "IntelliJ IDEA", level: "Core" },
        { name: "Maven", level: "Proficient" },
        { name: "Jest (Basics)", level: "Familiar" },
        { name: "Figma (Basics)", level: "Familiar" },
      ],
    },
  ] as SkillCategory[],

  education: [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Invertis University",
      period: "August 2023 – June 2026",
      location: "Bareilly, Uttar Pradesh, India",
      details:
        "Comprehensive curriculum covering Computer Science fundamentals, Object-Oriented Programming, Data Structures & Algorithms, Database Management Systems, Computer Networks, and Software Engineering methodologies.",
    },
  ] as EducationItem[],

  certifications: [
    {
      title: "Full Stack Web Development",
      issuer: "100xDevs (Harkirat Singh)",
      credentialUrl: "https://100xdevs.com",
      date: "2024",
    },
    {
      title: "Python 101 for Data Science",
      issuer: "IBM",
      credentialUrl: "https://www.credly.com",
      date: "2024",
    },
  ] as CertificationItem[],

  terminalCommands: [
    {
      command: "help",
      description: "List all available interactive terminal commands",
    },
    {
      command: "about",
      description: "Display executive summary and developer background",
    },
    {
      command: "experience",
      description: "Show professional experience and internship achievements",
    },
    {
      command: "projects",
      description: "List featured full-stack and machine learning projects",
    },
    {
      command: "skills",
      description: "Display grouped technical stack and engineering proficiencies",
    },
    {
      command: "education",
      description: "View university degree and professional certifications",
    },
    {
      command: "contact",
      description: "Print direct contact methods, email, and social links",
    },
    {
      command: "resume",
      description: "View resume summary and quick download prompt",
    },
    {
      command: "clear",
      description: "Clear terminal history and output screen",
    },
  ],
};
