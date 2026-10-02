import ProjectCard from "../components/projectCard";
import { Link } from 'react-router-dom'
import {
  Search,
  ChevronDown,
  Terminal
} from 'lucide-react'
import { useRef, useState } from "react";

type Project = {
  number: string;
  title: string;
  category: string;
  myRole: string;
  description: string;
  tags: string[];
  status: string;
  link: string;
};

function Library() {
  const [searchTerm, setSearchTerm] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('ALL')

  const projectsRef = useRef<HTMLDivElement>(null);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const projects: Project[] = [
    {
      number: "01",
      title: "Vault of Evidence",
      category: "FEATURED PROJECTS",
      myRole: "Frontend Developer",
      description: "Evidence management platform for organizing worklists, documenting findings, and storing proof-of-concept evidence in one centralized workspace.",
      tags: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "REST API",
        "Vite",
        "Responsive Design",
        "Git/Github",
      ],
      status: "ACTIVE",
      link: "/projects/vault-of-evidence",
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
        "Linux",
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
        "Dynamic Memory",
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
        "CSV",
      ],
      status: "COMPLETED",
      link: "/projects/property-data-management",
    },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      project.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const macthesCategory =
      categoryFilter === 'ALL' || 
      project.category === categoryFilter

    return matchesSearch && macthesCategory
  }, [searchTerm, categoryFilter]);

  const categories = [
    'ALL', 
    ...Array.from(new Set(projects.map((project) => project.category))),
  ];

  const groupProjects = categories
    .filter((category) => category != 'ALL')
    .map((category) => ({
      category,
      projects: filteredProjects.filter((project) => project.category === category),
    }))
    .filter((group) => group.projects.length > 0);
  
{/*================================================================================================================*/}
  return (
    <main className="min-h-screen bg-linear-to-br from-[#BDEEFF]/10 to-[#07eaff]/20 text-[#FFFFFF]">
      {/* Navbar */}
      <nav className="border-b border-[#FFFFFF]/50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link 
            to='/' 
            className="font-mono text-md text-[#07eaff] transition hover:text-[#FFFFFF]"
          >
            ~/putri/portfolio
          </Link>

          <div className="flex gap-7 font-mono text-md font-semibold text-[#3b99e6]">
            <Link 
              to="/library" 
              className="transition hover:text-[#FFFFFF]"
            >
              WORK
            </Link>
            
            <Link 
              to="/"
              className="transition hover:text-[#FFFFFF]"
            >
              ABOUT
            </Link>
            
            <Link 
              to="/contact"
              className="transition hover:text-[#FFFFFF]"
            >
              CONTACT
            </Link>
          </div>
        </div>
      </nav>

      {/* Search & Status Filter */}
      <section className="px-6 py-20 md:px-15">
        <div className="mx-auto max-w-6xl">
          <div className="-mt-2 font-mono text-md text-[#07eaff]">
            $ cd ./library
            <span className="terminal-cursor ml-1">_</span>
          </div>

          <h1 className="mt-5 font-montserrat text-4xl font-extrabold md:text-6xl">
            PROJECT LIBRARY
          </h1>

          <p className="mt-4 max-w-2xl font-mono text-md leading-6 text-[#C2C2C2]">
            A collection of projects, experiments, and technical work.
            Browse by category or search through the archive.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 md:px-15">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-xl border border-[#07eaff]/20 bg-[#001B2E]/30 p-4">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* FITUR SEARCH */}
              <div className="flex flex-1 items-center gap-3 rounded-lg border border-[#FFFFFF]/20 bg-[#00111D]/40 px-4 py-3">
                <Search 
                  size={18} 
                  className= 'shrink-0 text-[#0F65AD]'
                />

                <input 
                  type="text"
                  placeholder="Search Project..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      scrollToProjects();
                    }
                  }}
                  className="w-full bg-transparent text-sm md:text-base font-montserrat focus:outline-none"
                />
              </div>

              {/* CATEGORY FILTER */}
              <div className="relative">
                <select
                  value={categoryFilter}
                  onChange={(e) => {
                    setCategoryFilter(e.target.value);
                    scrollToProjects();
                  }}
                  className="w-full appearance-none rounded-lg border border-[#FFFFFF]/20 bg-[#00111D] px-4 py-3 
                    pr-10 font-mono text-sm text-[#C2C2C2] outline-none transition hover:border-[#07eaff]/50 
                    focus:border-[#07eaff] lg:w-56"
                >
                  {categories.map((category) => (
                    <option
                      key={category}
                      value={category}
                      className="bg-[#00111D]"
                    >
                      {category === 'ALL' ? 'ALL CATEGORIES' : category}
                    </option>
                  ))}
                </select>

                <ChevronDown
                  size={16}
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#07eaff]"
                />
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* Projects */}
      <section 
        ref={projectsRef} 
        className="px-6 py-16 md:px-15"
      >  
        <div className="mx-auto max-w-6xl">

          {/* RESULT COUNTER */}
          <div className="mb-3 flex items-center justify-between border-b border-[#FFFFFF]/10 pb-">

            <div className="-mt-10 flex items-center gap-3 font-mono font-semibold text-[20px]">
              <Terminal
                size={16}
                className="text-[#07eaff]"
              />

              <span className="text-[#e2dede]">
                archive/
              </span>

              <span className="text-[#07eaff]">
                {filteredProjects.length}
              </span>

              <span className="text-[#87a5b6]">
                results
              </span>
              
            </div>
          </div>

          {groupProjects.length > 0 ? (
            <div className="space-y-20">
              {groupProjects.map((group) => (
                <div key={group.category}>
                  
                  {/*CATEGORY HEADER*/}
                  <div className="mb-8 flex items-center gap-4">
                    
                    <div className="font-mono text-sm text-[#07eaff]">
                      [{group.category}]
                    </div>

                    <div className="h-px flex-1 bg-linear-to-r from-[#07eaff]/30 to-transparent" />

                    <div className="font-mono text-sm text-[#87a5b6]">
                      {group.projects.length} PROJECT
                      {group.projects.length !== 1 ? "S" : ""}
                    </div>

                  </div>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {group.projects.map((project, index) => (
                      <ProjectCard
                        key={project.number}
                        number={project.number}
                        title={project.title}
                        category={project.category}
                        myRole={project.myRole}
                        description={project.description}
                        tags={project.tags}
                        status={project.status}
                        delay={index * 150}
                        link={project.link}
                      />
                    ))}
                  </div>
                </div>

              ))}

            </div>
          ) : (
            <div className="flex min-h-64 flex-col items-center justify-center rounded-xl border border-dashed border-[#07eaff]/20 bg-[#001B2E]/20 text-center">
              <Search
                size={32}
                className="mb-4 text-[#07eaff]/50"
              />

              <p className="font-mono text-sm text-[#C2C2C2]">
                ERROR: no projects found
              </p>

              <p className="mt-2 font-mono text-xs text-[#5E7887]">
                Try another project name or category.
              </p>

              <button
                onClick={() => {
                  setSearchTerm("");
                  setCategoryFilter("ALL");
                }}
                className="mt-5 rounded-md border border-[#07eaff]/30 px-4 py-2 font-mono text-xs text-[#07eaff] transition hover:border-[#07eaff] hover:bg-[#07eaff]/10"
              >
                CLEAR FILTERS
              </button>

            </div>
          )}

        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-6">
          <p className="font-mono text-sm">
            © PUTRI - 2026
          </p>
        </div>
      </footer>
    </main>
  );
}

export default Library;