import ProjectCard from "../components/projectCard";
import { Link } from 'react-router-dom'
import CertificateCard from "../components/certifCard";

function Dashboard() {
  return (
    <main className="min-h-screen bg-linear-to-br from-[#BDEEFF]/10 to-[#07eaff]/20 text-[#FFFFFF]">
      
      {/* Navbar */}
      <nav className="border-b border-[#FFFFFF]/50 before:left-10 ">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link 
            to='/' 
            className="font-mono text-md text-[#07eaff]"
          >
            ~/putri/portfolio
          </Link>

          <div className="flex gap-7 font-mono text-md font-semibold text-[#3b99e6]">
            <Link to="/library" className="transition hover:text-[#FFFFFF]">
              WORK
            </Link>
            <Link to="/" className="transition hover:text-[#FFFFFF]">
              ABOUT
            </Link>
            <Link to="/contact" className="transition hover:text-[#FFFFFF]">
              CONTACT
            </Link>
          </div>
        </div>
      </nav>

      {/*Introduction*/}
      <section className="-mt-10 min-h-screen flex items-center px-15">
        
        <div className="w-full flex flex-col gap-12 md:flex-row md:items-center md:justify-between">
          {/*Text*/}
          <div className="md:w-2/3">
            <p className="font-mono text-md text-[#07eaff]">
              $ whoami
              <span className="terminal-cursor ml-1">_</span>
            </p>

            <h1 className="mt-5 text-5xl font-bold font-montserrat md:text-7xl">
              ANNISA PUTRI <br /> FADHILAH
            </h1>

            <p className="mt-6 font-montserrat text-lg font-medium text-[#d7d7d7dd]">
              Cyber Security Student at BINUS University
            </p>

            <div className="mt-6 max-w-3xl border-l border-[#07eaff] pl-4 leading-7 text-[#C2C2C2]">
              Cyber Security undergraduate with practical experience in cybersecurity, software development, 
              <br />
              and competitive programming. Aspiring SOC Analyst focused on network security, 
              <br />
              incident detection, log analysis, and secure software development.
            </div>

            <div className="mt-10 font-mono text-sm text-[#17E58F]">
              <span className="text-[#07eaff]">status:</span> system online
            </div>

          </div>

          {/*Picture*/}
          <div className="flex justify-center md:w-1/3 md:justify-end">
            <div className="relative">
              <div className="h-64 w-64 overflow-hidden rounded-3xl border border-[#07eaff]/50 shadow-[2px_2px_10px_2px_rgba(0,44,73,0.05)] md:h-120 md:w-80">

                <img
                  src="/foto non-formal 4.jpeg"
                  alt="Annisa Putri Fadhilah"
                  className="h-full w-full scale-150 object-cover object-[15%_40%]"
                />

              </div>

              <div className="absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-2xl border border-[#07eaff]/20" />
            </div>
          </div>
        </div>

      </section>

      {/* Projects */}
      <section
        id="work"
        className="relative px-15 py-24 before:absolute before:top-0 before:left-10 before:right-10 
          before:border-t before:border-[#FFFFFF]/50"
      >
        <div className="mb-8 mx-auto max-w-6xl">

          {/* Terminal command */}
          <div className="-mt-12 font-mono text-md text-[#07eaff]">
            $ ls ./featured projects
            <span className="terminal-cursor ml-1">_</span>
          </div>

          <p className="mt-3 font-mono text-sm text-[#C2C2C2]">
            displaying featured projects...
          </p>

          {/* Project cards */}
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">

            <ProjectCard
              number="01"
              title="Vault of Evidence"
              category="FEATURED PROJECTS"
              myRole="Frontend Developer"
              description="Evidence management platform for organizing worklists, documenting findings, and 
                storing proof-of-concept evidence in one centralized workspace."
              tags={["React", "TypeScript", "Tailwind CSS", "REST API", "Vite", "Responsive Design", "Git/Github"]}
              status="ACTIVE"
              delay={100}
              link="/projects/vault-of-evidence"
            />

            <ProjectCard
              number="02"
              title="Hack The Box - The Editor"
              category="FEATURED PROJECTS"
              myRole="Penetration Testing Team Member"
              description="Performed network penetration testing on a Hack The Box machine to identify and exploit 
                vulnerabilities, gaining initial shell access and escalating privileges to root."
              tags={["Nmap", "RCE", "CVE-2024-31982", "Reverse Shell", "Privilege Escalation", "Linux"]}
              status="COMPLETED"
              delay={250}
              link="/projects/hack-the-box"
            />

            <ProjectCard
              number="03"
              title="Slang Dictionary"
              category="FEATURED PROJECTS"
              myRole="Solo Developer"
              description="A C-based slang dictionary application that uses a Trie data structure to store, 
                search for specific word, find words by prefix, and displaying all stored slang words with their meanings."
              tags={["C", "Data Structures", "Trie", "Algorithms", "Recursion", "String Processing", "Dynamic Memory"]}
              status="COMPLETED"
              delay={400}
              link="/projects/slang-dictionary"
            />

            <ProjectCard
              number="04"
              title="Property Data Management"
              category="FEATURED PROJECTS"
              myRole="Solo Developer"
              description="A C-based property data management program for reading and processing data from CSV files. 
                Provides features to display, search, sort, and export property data based on various attributes."
              tags={["C", "Data Processing", "File Handling", "Searching", "Sorting", "CSV"]}
              status="COMPLETED"
              delay={550}
              link="/projects/property-data-management"
            />

          </div>
        </div>

        <Link 
          to='/src/pages/library.tsx'
          className="font-mono text-md text-[#07eaff] transition hover:text-[#FFFFFF]"
        >
          $ cd ./project library
          <span className="terminal-cursor ml-1">_</span>
        </Link>
      </section>

      {/* TECHINCAL SKILLS */}
      <section
        id="skills"
        className="-mt-15 relative px-15 py-10 before:absolute before:top-0 before:left-10 before:right-10 
          before:border-t before:border-[#FFFFFF]/50"
      >
        <div className="mx-auto max-w-6xl">

          {/* Terminal command */}
          <div className="font-mono text-md text-[#07eaff]">
            $ cat ./skills
            <span className="terminal-cursor ml-1">_</span>
          </div>
          
          {/* PROGRAMMING LANGUAGE */}
          <div>
            <p className="mt-4 font-montserrat text-lg font-semibold text-[#a8f8b5]">
              PROGRAMMING LANGUAGE
            </p>
            
            <div className="mt-2 mb-8 border-l border-[#07eaff] pl-2 leading-5 text-md font-medium text-[#C2C2C2]">
              C · TypeScript · SQL · Python · JavaScript
            </div>
          </div>

          {/* TOOLS & SOFTWARE */}
          <div>
            <p className="mt-4 font-montserrat text-lg font-semibold text-[#a8f8b5]">
              TOOLS & SOFTWARE
            </p>
            
            <div className="mt-2 mb-8 border-l border-[#07eaff] pl-2 leading-5 text-md font-medium text-[#C2C2C2]">
              VS Code · Linux · Git/GitHub · Figma · JADX · ADB · Burp Suite · Nmap · Frida · Apktool · Cisco Packet Tracer · Splunk
            </div>
          </div>

          {/* CYBERSECURITY */}
          <div>
            <p className="mt-4 font-montserrat text-lg font-semibold text-[#a8f8b5]">
              CYBERSECURITY
            </p>
            
            <div className="mt-2 mb-8 border-l border-[#07eaff] pl-2 leading-5 text-md font-medium text-[#C2C2C2]">
              Mobile & Network Penetration Testing · OWASP Top 10
            </div>
          </div>

          {/* NETWORKING */}
          <div>
            <p className="mt-4 font-montserrat text-lg font-semibold text-[#a8f8b5]">
              NETWORKING
            </p>
            
            <div className="mt-2 mb-8 border-l border-[#07eaff] pl-2 leading-5 text-md font-medium text-[#C2C2C2]">
              IP Addressing · Subnetting (FLSM/VLSM) · Static Routing · Network Cabling
            </div>
          </div>

          {/* FRONTEND DEVELOPMENT */}
          <div>
            <p className="mt-4 font-montserrat text-lg font-semibold text-[#a8f8b5]">
              FRONTEND DEVELOPMENT
            </p>
            
            <div className="mt-2 mb-8 border-l border-[#07eaff] pl-2 leading-5 text-md font-medium text-[#C2C2C2]">
              React · Tailwind CSS · REST API Integration · Responsive Web Design
            </div>
          </div>

        </div>
      </section>


      {/* CERTIFICATE */}
      <section
        id="certificate"
        className="-mt-10 relative px-15 py-10 before:absolute before:top-0 before:left-10 before:right-10 
          before:border-t before:border-[#FFFFFF]/50"
      >
        <div className="mx-auto max-w-6xl">

          {/* Terminal command */}
          <div className="-mt-2 font-mono text-md text-[#07eaff]">
            $ cat ./certificate
            <span className="terminal-cursor ml-1">_</span>
          </div>
          
          {/* ICPC */}
          <CertificateCard
            title='2025 ICPC Asia Jakarta'
            description='Participated in the 2025 ICPC Asia Jakarta – Indonesia National Contest as part of a 
              three-member team, solving algorithmic and data structure challenges under strict time constraints.'
            year='Oct 2025'
            image='thumbnail icpc certif.png'
            pdf="/2026-ICPC Asia Jakarta-Indonesia NC-Annisa Putri Fadhilah-PLACE.pdf"
          />

          {/* TIMEDOOR */}
          <CertificateCard
            title='Teens JavaScript Programmer'
            description='Programming certification focused on JavaScript development and fundamental programming concepts.'
            year='Sept 2024'
            image='/thumbnail timedoor certif.png'
            pdf="/Teens JavaScript Programmer - Annisa Putri Fadhillah.pdf"
          />

        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="relative px-15 py-10 before:absolute before:top-0 before:left-10 before:right-10 
          before:border-t before:border-[#FFFFFF]/50"
      >
        {/* Terminal command */}
        <div className="-mt-2 font-mono text-md text-[#07eaff]">
          $ cat ./contact
          <span className="terminal-cursor ml-1">_</span>
        </div>


      </section>

      {/* Footer */}
      <footer className="-mt-10 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-6">
          <p className="font-mono text-sm">
            © PUTRI - 2026
          </p>
        </div>
      </footer>
    </main>
  );
}

export default Dashboard;