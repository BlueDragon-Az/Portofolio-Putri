export type Project = {
  number: string;
  title: string;
  category: string;
  myRole: string;
  detailedRole?: string;
  description: string;
  fullDescription?: string;
  tags: string[];
  status: string;
  link: string;
  githubLink?: string;
  images?: string[];
};

export const projects: Project[] = [
  {
    number: "01",
    title: "Vault of Evidence",
    category: "FEATURED PROJECTS",
    myRole: "Frontend Developer",
    detailedRole: "Contributed to the frontend development of the platform, including dashboard, project, worklist, and findings interfaces, as well as reusable components, form validation, responsive layouts, and REST API integration.",
    description: "Evidence management platform for organizing worklists, documenting findings, and storing proof-of-concept evidence in one centralized workspace.",
    fullDescription: "Vault of Evidence is a web-based penetration testing management platform built with React, TypeScript, Go, and PostgreSQL. Inspired by penetration testing workflows, we decided to built a platform where a penetration tester can organize their worklists, document their findings, and store the proof-of-concept evidence that they've found in one centralized workspace.",
    tags: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "REST API",
      "Vite",
      "Responsive Design",
      "Git/Github"
    ],
    status: "ACTIVE",
    link: "/projects/vault-of-evidence",
    githubLink: "https://github.com/AgileOrc/Vault-of-Evidence",
    images: [
      "/VOE/sign-up VOE.png",
      "/VOE/login VOE.png",
      "/VOE/reset-pass VOE.png",
      "/VOE/dashboaard VOE.png",
      "/VOE/project-page VOE.png",
      "/VOE/worklists VOE.png",
      "/VOE/cvss-calculator VOE.png",
      "/VOE/cvss-calculator VOE (1).png",
      "/VOE/cvss-calculator VOE (2).png",
      "/VOE/cvss-calculator VOE (4).png",
    ]
  },
  {
    number: "02",
    title: "Hack The Box",
    category: "FEATURED PROJECTS",
    myRole: "Penetration Testing Team Member",
    description: "Performed network penetration testing on a Hack The Box machine to identify and exploit vulnerabilities, gaining initial shell access and escalating privileges to root.",
    tags: [
      "Nmap",
      "RCE",
      "CVE-2024-31982",
      "Reverse Shell",
      "Privilege Escalation",
      "Linux"
    ],
    status: "COMPLETED",
    link: "/projects/hack-the-box",
  },
  {
    number: "03",
    title: "Slang Dictionary",
    category: "FEATURED PROJECTS",
    myRole: "Solo Developer",
    description: "A C-based slang dictionary application that uses a Trie data structure to store, search for specific words, find words by prefix, and display all stored slang words with their meanings.",
    tags: [
      "C",
      "Data Structures",
      "Trie",
      "Algorithms",
      "Recursion",
      "String Processing",
      "Dynamic Memory"
    ],
    status: "COMPLETED",
    link: "/projects/slang-dictionary",
  },
  {
    number: "04",
    title: "Property Data Management",
    category: "FEATURED PROJECTS",
    myRole: "Solo Developer",
    description: "A C-based property data management program for reading and processing data from CSV files. Provides features to display, search, sort, and export property data based on various attributes.",
    tags: [
      "C",
      "Data Processing",
      "File Handling",
      "Searching",
      "Sorting",
      "CSV"
    ],
    status: "COMPLETED",
    link: "/projects/property-data-management",
  },
  {
    number: "05",
    title: "HBV & HCV Alignmnet",
    category: "FEATURED PROJECTS",
    myRole: "Team Member — Bioinformatics Analysis",
    description: "A bioinformatics project analyzing the local alignment of HBV and HCV Core Gene sequences using the Smith-Waterman algorithm in Google Collab.",
    tags: [
      "Python",
      "Bioinformatics",
      "Smith-Waterman",
      "Sequence Alignment", 
      "Google Colab", 
      "Data Analysis"
    ],
    status: "COMPLETED",
    link: "/projects/hbv-hcv-alignment",
  },
  {
    number: "06",
    title: "EDUCATION & EQUAL OPPORTUNITY - Exploring Educational Access in Jakarta",
    category: "OTHER ACADEMIC PROJECTS",
    myRole: "Research and Media Team Member",
    description: "A qualitative research project exploring challenges in educational access for children from low-income families in Jakarta and the role of Yayasan Bulir Padi in addressing these challenges.",
    tags: [
      "Qualitative Research",
      "Interview",
      "Data Analysis",
      "Educational Research", 
      "SDG 4"
    ],
    status: "COMPLETED",
    link: "/projects/cb-pancasila",
  },
  {
    number: "07",
    title: "Water Management - Exploring Water Management in Central Jakarta",
    category: "OTHER ACADEMIC PROJECTS",
    myRole: "Research Team Member",
    description: "A qualitative research project exploring water management and clean water provision along the Ciliwung River in Central Jakarta.",
    tags: [
      "Qualitative Research",
      "Interview",
      "Educational Research",
      "Sequence Alignment",
      "Water Managemet",
      "SDG 6"
    ],
    status: "COMPLETED",
    link: "/projects/cb-kewarganegaraan",
  },
  {
    number: "08",
    title: "FAITH & TOLERANCE - Exploring Perspectives on Interfaith Harmony",
    category: "OTHER ACADEMIC PROJECTS",
    myRole: "Research and Media Team Member",
    description: "A collaborative research project exploring religious leaders’ perspectives on faith, tolerance, and interfaith harmony in the context of SDG 16.",
    tags: [
      "Qualitative Research",
      "Interfaith Tolerance ",
      "Scientific Writing",
      "SDG 16"
    ],
    status: "COMPLETED",
    link: "/projects/cb-agama",
  },
  {
    number: "09",
    title: "BOOST CAMP",
    category: "TEACHING EXPERIENCE",
    myRole: "Co-Founder & Linear Algebra Instructor",
    description: "A co-founded educational bootcamp providing structured mentorship and instructional sessions for undergraduates, driving peer learning and practical problem-solving",
    tags: [
      "Linear Algebra",
      "Teaching",
      "Mentoring",
      "Problem Solving", 
      "Academic Leadership"
    ],
    status: "COMPLETED",
    link: "/projects/boostcamp",
  },
  {
    number: "10",
    title: "DIGITAL LITERACY TUTORDIGITAL LITERACY TUTOR",
    category: "VOLUNTEER EXPERIENCE",
    myRole: "Volunteer ICT Tutor",
    description: "A volunteer tutoring activity focused on helping elementary school students develop basic computer literacy and digital skills through one-on-one learning sessions.",
    tags: [
      "Volunteer",
      "Teaching",
      "ICT Education",
      "Digital Literacy ", 
      "Canva",
      "Ms Word",
      "Ms Powerpoint"
    ],
    status: "COMPLETED",
    link: "/projects/ict-tutor",
  },
  {
    number: "11",
    title: "2025 ICPC Asia Jakarta – Indonesia National Contest",
    category: "COMPETITIONS",
    myRole: "Contestant",
    description: "Participated in the 2025 ICPC Asia Jakarta – Indonesia National Contest as part of a three-member team, solving algorithmic and data structure challenges under strict time constraints.",
    tags: [
      "C",
      "Data Structures",
      "Algorithms",
      "Problem Solving",
      "Competitive Programming"
    ],
    status: "COMPLETED",
    link: "/projects/2025-icpc",
  },
];