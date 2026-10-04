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
  githubLink?: string;
  gogleCollabLink?: string;
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
    detailedRole: "Conducted network enumeration, vulnerability identification, exploitation, and privilege escalation on a Hack The Box environment, exploiting XWiki RCE and PATH hijacking vulnerabilities to obtain root access.",
    description: "Performed network penetration testing on a Hack The Box machine to identify and exploit vulnerabilities, gaining initial shell access and escalating privileges to root.",
    fullDescription: "Performed network penetration testing on a Hack The Box machine to identify and exploit vulnerabilities, gaining initial shell access through XWiki RCE and escalating privileges to root via PATH hijacking.",
    tags: [
      "Nmap",
      "RCE",
      "CVE-2024-31982",
      "Reverse Shell",
      "Privilege Escalation",
      "Linux"
    ],
    status: "COMPLETED",
    images: [
      "/HTB/htb editor.png",
      "/HTB/nmap 1.png",
      "/HTB/nmap 2.png",
      "/HTB/nmap 3.png",
      "/HTB/xwiki.png",
      "/HTB/cve.png",
      "/HTB/nc 1.png",
      "/HTB/nc 2.png",
      "/HTB/nc 3.png",
      "/HTB/ssh.png",
      "/HTB/first flag.png",
      "/HTB/nsudo.png",
      "/HTB/poc.png",
      "/HTB/root flag.png"
    ]
  },
  {
    number: "03",
    title: "Slang Dictionary",
    category: "FEATURED PROJECTS",
    myRole: "Solo Developer",
    detailedRole: "Designed and developed the application independently, including the Trie data structure, word insertion and search functionality, prefix-based search, and slang word management.",
    description: "A C-based slang dictionary application that uses a Trie data structure to store, search for specific words, find words by prefix, and display all stored slang words with their meanings.",
    fullDescription: "A C-based slang dictionary application that uses a Trie data structure to store, search, and manage slang words and their meanings. The program supports adding and updating slang words, searching for specific words, finding words by prefix, and displaying all stored slang words.",
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
    images: [
      "/slang dictionary/dashboard slang dictionary.png",
      "/slang dictionary/pilihan 1.png",
      "/slang dictionary/pilihan 2 (1).png",
      "/slang dictionary/pilihan 2 (2).png",
      "/slang dictionary/pilihan 3 (1).png",
      "/slang dictionary/pilihan 3 (2).png",
      "/slang dictionary/pilihan 4.png",
      "/slang dictionary/goodbye.png",
      "/slang dictionary/struct trie.png",
      "/slang dictionary/new slang.png",
      "/slang dictionary/input makna.png",
      "/slang dictionary/print prefix.png",
      "/slang dictionary/print slang.png"
    ]
  },
  {
    number: "04",
    title: "Property Data Management",
    category: "FEATURED PROJECTS",
    myRole: "Solo Developer",
    detailedRole: "Independently designed and developed the program, including CSV file handling, data searching, sorting, display, and export functionality.",
    description: "A C-based property data management program for reading and processing data from CSV files. Provides features to display, search, sort, and export property data based on various attributes.",
    fullDescription: "A C-based property data management program for reading, processing, and managing property records from CSV files. The program provides features to display, search, sort, and export property data based on various attributes such as location, price, rooms, bathrooms, and furnishing.",
    tags: [
      "C",
      "Data Processing",
      "File Handling",
      "Searching",
      "Sorting",
      "CSV"
    ],
    status: "COMPLETED",
    images: [
      "/property data management/welcome.png",
      "/property data management/display.png",
      "/property data management/search.png",
      "/property data management/sort display 1.png",
      "/property data management/sort display 2.png",
      "/property data management/export.png",
      "/property data management/goodbye.png",
      "/property data management/struct.png",
      "/property data management/baca file.png",
      "/property data management/void display.png",
      "/property data management/void search 1.png",
      "/property data management/void search 2.png",
      "/property data management/void search 3.png",
      "/property data management/sort 1.png",
      "/property data management/sort 2.png",
      "/property data management/sort 3.png",
    ]
  },
  {
    number: "05",
    title: "HBV & HCV Alignmnet",
    category: "FEATURED PROJECTS",
    myRole: "Team Member — Bioinformatics Analysis",
    detailedRole: "Contributed to the Python implementation and analysis of the Smith-Waterman alignment results, including sequence comparison and interpretation of alignment statistics.",
    description: "A bioinformatics project analyzing the local alignment of HBV and HCV Core Gene sequences using the Smith-Waterman algorithm in Google Collab.",
    fullDescription: "A bioinformatics project analyzing the local alignment of HBV and HCV Core Gene sequences using the Smith-Waterman algorithm. The analysis was implemented in Python using Google Colab to identify conserved regions and evaluate alignment score, sequence identity, matches, mismatches, and gaps.",
    tags: [
      "Python",
      "Bioinformatics",
      "Smith-Waterman",
      "Sequence Alignment", 
      "Google Colab", 
      "Data Analysis"
    ],
    status: "COMPLETED",
    gogleCollabLink: "https://colab.research.google.com/drive/1d8jlvBH_9PgrTWO3s4vP7dR5r3xh16fJ?usp=sharing",
    images: [
      "/hbv & hcv alignment/hbv.png",
      "/hbv & hcv alignment/hcv.png",
      "/hbv & hcv alignment/hbv fasta.png",
      "/hbv & hcv alignment/hcv fasta.png",
      "/hbv & hcv alignment/hbv 15 kodon terbanyak.png",
      "/hbv & hcv alignment/hcv 15 kodon terbanyak.png",
      "/hbv & hcv alignment/panjang sequence.png",
      "/hbv & hcv alignment/komposisi basa.png",
      "/hbv & hcv alignment/komposisi alignment.png",
      "/hbv & hcv alignment/persentase identitas.png",
      "/hbv & hcv alignment/heat map.png",
      "/hbv & hcv alignment/conclusion.png",
      "/hbv & hcv alignment/referensi.png",
      "/hbv & hcv alignment/statistik deskriptif.png",
      "/hbv & hcv alignment/statistik deskriptif (kode).png",
      "/hbv & hcv alignment/smith-waterman algorithm.png",
      "/hbv & hcv alignment/analisis hasil alignment.png",
      "/hbv & hcv alignment/hasil alignment 1.png",
      "/hbv & hcv alignment/hasil alignment 2.png",    
    ]
  },
  {
    number: "06",
    title: "EDUCATION & EQUAL OPPORTUNITY - Exploring Educational Access in Jakarta",
    category: "OTHER ACADEMIC PROJECTS",
    myRole: "Research and Media Team Member",
    detailedRole: "Contributed to the research process through interview-based data collection, analysis, and the development of the scientific article. Documenting the interview process.",
    description: "A qualitative research project exploring challenges in educational access for children from low-income families in Jakarta and the role of Yayasan Bulir Padi in addressing these challenges.",
    fullDescription: "A qualitative research project exploring challenges in educational access for children from low-income families in Jakarta and the role of Yayasan Bulir Padi in addressing these challenges. The study involved interviews and documentation to examine the foundation’s educational programs, challenges, and efforts to improve access to education.",
    tags: [
      "Qualitative Research",
      "Interview",
      "Data Analysis",
      "Educational Research", 
      "SDG 4"
    ],
    status: "COMPLETED",
    images: [
      "/cb 1/1.JPG",
      "/cb 1/2.JPG",
      "/cb 1/3.JPG",
      "/cb 1/4.png",
      "/cb 1/5.png"
    ]
  },
  {
    number: "07",
    title: "Water Management - Exploring Water Management in Central Jakarta",
    category: "OTHER ACADEMIC PROJECTS",
    myRole: "Research Team Member",
    detailedRole: "Participated in field observations, interviewed the research subject, and contributed to writing and developing the scientific article.",
    description: "A qualitative research project exploring water management and clean water provision along the Ciliwung River in Central Jakarta.",
    fullDescription: "A qualitative research project exploring water management and clean water provision along the Ciliwung River in Central Jakarta. The study examined environmental challenges, community initiatives, and stakeholder efforts in supporting sustainable water management and the achievement of SDG 6.",
    tags: [
      "Qualitative Research",
      "Interview",
      "Educational Research",
      "Sequence Alignment",
      "Water Managemet",
      "SDG 6"
    ],
    status: "COMPLETED",
    images: [
      "/cb 2/1.png",
      "/cb 2/2.png",
      "/cb 2/3.png",
      "/cb 2/4.jpg",
      "/cb 2/5.jpg",
      "/cb 2/6.jpg"
    ]
  },
  {
    number: "08",
    title: "FAITH & TOLERANCE - Exploring Perspectives on Interfaith Harmony",
    category: "OTHER ACADEMIC PROJECTS",
    myRole: "Research and Media Team Member",
    detailedRole: "Contributed to the development of the scientific article and project documentation, while serving as Host 2 to deliver the closing discussion and conclusion in the final video.",
    description: "A collaborative research project exploring religious leaders’ perspectives on faith, tolerance, and interfaith harmony in the context of SDG 16.",
    fullDescription: "A collaborative research project exploring religious leaders’ perspectives on faith, tolerance, and interfaith harmony in the context of SDG 16. The project was presented through an educational video discussing the importance of respecting differences, avoiding prejudice, and building harmonious relationships across religious communities.",
    tags: [
      "Qualitative Research",
      "Interfaith Tolerance ",
      "Scientific Writing",
      "SDG 16"
    ],
    status: "COMPLETED",
    images: [
      "/cb 3/1.png",
      "/cb 3/2.png",
      "/cb 3/3.png",
      "/cb 3/4.JPG",
      "/cb 3/5.png"
    ]
  },
  {
    number: "09",
    title: "BOOST CAMP",
    category: "TEACHING EXPERIENCE",
    myRole: "Co-Founder & Linear Algebra Instructor",
    detailedRole: "Co-founded the bootcamp, prepared learning materials, delivered Linear Algebra sessions, and mentored students through interactive problem-solving activities.",
    description: "A co-founded educational bootcamp providing structured mentorship and instructional sessions for undergraduates, driving peer learning and practical problem-solving",
    fullDescription: "A student-led bootcamp designed to help undergraduate students strengthen their understanding of Linear Algebra, Basic Statistic, Algorithm and Programming, and Discrete Mathematics through structured learning materials, instructional sessions, and interactive problem-solving activities.",
    tags: [
      "Linear Algebra",
      "Teaching",
      "Mentoring",
      "Problem Solving", 
      "Academic Leadership"
    ],
    status: "COMPLETED",
    images: [
      "/boostcamp/1.png",
      "/boostcamp/3.png",
      "/boostcamp/2.png"
    ]
  },
  {
    number: "10",
    title: "DIGITAL LITERACY TUTORDIGITAL LITERACY TUTOR",
    category: "VOLUNTEER EXPERIENCE",
    myRole: "Volunteer ICT Tutor",
    detailedRole: "Provided one-on-one tutoring using personal laptops, covering Microsoft Word and PowerPoint, basic Canva design, internet navigation and online research, file management, downloads, and other basic digital tools.",
    description: "A volunteer tutoring activity focused on helping elementary school students develop basic computer literacy and digital skills through one-on-one learning sessions.",
    fullDescription: "A volunteer tutoring activity focused on helping elementary school students develop basic computer literacy and digital skills through one-on-one learning sessions.",
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
    images: [
      "/volunteer/5.jpg",
      "/volunteer/4.jpg",
      "/volunteer/3.jpg",
      "/volunteer/2.jpg",
      "/volunteer/1.jpg",
    ]
  },
  {
    number: "11",
    title: "2025 ICPC Asia Jakarta – Indonesia National Contest",
    category: "COMPETITIONS",
    myRole: "Contestant",
    detailedRole: "Collaborated with two teammates to solve C++/C programming challenges, applying algorithmic problem-solving, debugging, and optimization techniques.",
    description: "Participated in the 2025 ICPC Asia Jakarta – Indonesia National Contest as part of a three-member team, solving algorithmic and data structure challenges under strict time constraints.",
    fullDescription: "Participated in the 2025 ICPC Asia Jakarta – Indonesia National Contest as part of a three-member team, solving algorithmic and data structure challenges under strict time constraints.",
    tags: [
      "C",
      "Data Structures",
      "Algorithms",
      "Problem Solving",
      "Competitive Programming"
    ],
    status: "COMPLETED",
    images: [
      "/competitions/rank.png",
      "/competitions/thumbnail icpc certif.png",
      "/competitions/problem A.png",
      "/competitions/probA 1.png",
      "/competitions/probA 2.png",
      "/competitions/probA 3.png",
      "/competitions/probA 4.png",
      "/competitions/probA hasil.png",
      "/competitions/problem E.png",
      "/competitions/probE 1.png",
      "/competitions/probE 2.png",
      "/competitions/probE 3.png",
      "/competitions/probE 4.png",
      "/competitions/probE 5.png",
      "/competitions/probE hasil.png",
    ]
  },
];