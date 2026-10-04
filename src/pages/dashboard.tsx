import ProjectCard from "../components/projectCard";
import { Link, useLocation } from 'react-router-dom'
import CertificateCard from "../components/certifCard";
import { PhoneCall, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { projects, type Project } from "../data/All Projects";
import ProjectModal from "../components/ProjectModal";

function Dashboard() {
  const [SelectedProject, setSelectedProject] = useState<Project | null>(null);

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace("#", ""));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

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

          <div className="mr-3 flex gap-10 font-mono text-md font-semibold text-[#3b99e6]">
            <Link to="/" className="transition hover:text-[#FFFFFF]">
              DASHBOARD
            </Link>
            <Link to="/Library" className="transition hover:text-[#FFFFFF]">
              WORK
            </Link>
            <a href="#contact" className="transition hover:text-[#FFFFFF]">
              CONTACT
            </a>
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
            {projects.slice(0, 4).map((project, index) =>  (
              <div
                key={project.number || index}
                onClick={() => {
                  console.log("CLICKED", project);
                  setSelectedProject(project);
                }}
                className="cursor-pointer"
              >
                <ProjectCard
                  key={index}
                  number={String(index + 1).padStart(2, "0")}
                  title={project.title}
                  category={project.category}
                  myRole={project.myRole}
                  description={project.description}
                  tags={project.tags}
                  status={project.status}
                  delay={(index + 1) * 150}
                />
              </div>
            ))}
          </div>
        </div>

        <Link 
          to='/Library'
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
        <div className="-mt-2 ml-7 font-mono text-md text-[#07eaff]">
          $ cat ./contact
          <span className="terminal-cursor ml-1">_</span>
        </div>

        <div className="mt-8 ml-7 flex flex-col justify-between gap-12 md:flex-row md:items-start">
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold font-montserrat text-[#FFFFFF] md:text-5xl">
              My Contact
            </h2>

            <p className="mt-4 font-montserrat text-[#C2C2C2] leading-relaxed text-lg max-w-xl">
              Thank you for taking the time to explore my work and experiences. Each project has been an 
              opportunity to learn, grow, and challenge myself. I’m always open to new opportunities, 
              collaborations, and conversations. Feel free to reach out.
            </p>

            {/* List Contact */}
            <div className="mt-8 ml-5 flex flex-col gap-3 font-mono text-xl">
              {/* Phone Number */}
              <a 
                href="tel:+6287725100006"
                className="flex items-center gap-4 text-[#FFFFFF] transition hover:text-[#07eaff]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#07eaff]/40 bg-[#07eaff]/10 text-[#07eaff]">
                  <PhoneCall size={30} />
                </div>
                <span>+62-877-2510-0006</span>
              </a>

              {/* Whatsapp */}
              <a 
                href="https://wa.me/6287725100006"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-[#FFFFFF] transition hover:text-[#07eaff]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#07eaff]/40 bg-[#07eaff]/10 text-[#07eaff]">
                  <img
                    src="/whatsapp logo.png"
                    alt="WhatsApp"
                    className="h-8 w-8 object-contain"
                  />
                </div>
                <span>WhatsApp</span>
              </a>

              {/* Email */}
              <a
                href="mailto:putri.sofyar26@gmail.com"
                className="flex items-center gap-4 text-[#FFFFFF] transition hover:text-[#07eaff]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#07eaff]/40 bg-[#07eaff]/10 text-[#07eaff]">
                  <Mail size={30} />
                </div>
                <span>putri.sofyar26@gmail.com</span>
              </a>

              {/* Linkedin */}
              <a
                href="https://www.linkedin.com/in/annisa-putri-99320b323/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-[#FFFFFF] transition hover:text-[#07eaff]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#07eaff]/40 bg-[#07eaff]/10 text-[#07eaff]">
                  <img
                    src="/linkedin logo.png"
                    alt="LinkedIn"
                    className="h-8 w-8 object-contain"
                  />
                </div>
                <span>Annisa Putri</span>
              </a>

            </div>
          </div>

          {/* Foto */}
          <div className="-mt-10 mr-7 flex justify-center md:w-1/3 md:justify-end">
            <div className="relative">
              <div className="h-64 w-64 overflow-hidden rounded-3xl border border-[#07eaff]/50 shadow-[2px_2px_10px_2px_rgba(0,44,73,0.05)] md:h-120 md:w-80">
                <img
                  src="/foto formal 1.jpg"
                  alt="Annisa Putri Fadhilah"
                  className="h-full w-full scale-120 object-cover object-[25%_40%]"
                />
              </div>

              <div className="absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-2xl border border-[#07eaff]/20"/>
            </div>
          </div>
        </div>
      </section>
      
      {/* Project Pop-Up Modal */}
      <ProjectModal
        project={SelectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Footer */}
      <footer className="-mt-5 border-t border-white/10">
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