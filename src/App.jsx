import { useState } from "react";
import profilePic from "./assets/profesional-picture.png";
import logo from "./assets/jpv-logo2.png";
import ResumeModal from "./custom-components/ResumeModal";
import ProjectModal from "./custom-components/ProjectModal";

const services = [
  {
    title: "Web Development",
    desc: "Building scalable, high-performance web applications using modern frameworks.",
  },
  {
    title: "Desktop Application",
    desc: "Designing and developing cross-platform desktop applications for Windows, macOS, and Linux.",
  },
  {
    title: "UI/UX Design",
    desc: "Creating intuitive wireframes, design systems, and user-centered digital interfaces.",
  },
  {
    title: "Graphic Design",
    desc: "Crafting visually appealing graphics, logos, and branding materials for digital and print media.",
  },
];

const experience = [
  {
    role: "Software Engineer",
    company: "Trust Arc",
    period: "2025 - Present",
    desc: "Promoted to Software Engineer. Took on ownership of core product features, streamlined system workflows, and collaborated more closely with cross-functional teams.",
  },
  {
    role: "Associate Software Engineer",
    company: "Trust Arc",
    period: "2021 - 2024",
    desc: "Transitioned from internship to a full-time associate role. Focused on building responsive components, debugging complex issues, and delivering robust web solutions.",
  },
  {
    role: "Software Engineering Intern",
    company: "Trust Arc",
    period: "2021",
    desc: "Gained hands-on experience in modern development workflows, assisted in writing clean code, and supported the team with day-to-day feature implementations.",
  },
];

const skills = [
  "React",
  "Angular",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "PHP",
  "Laravel",
  "Java",
  "Tailwind CSS",
  "Bootstrap",
  "Cypress",
  "Git",
  "GitHub",
  "Firebase",
  "SQL",
  "Figma",
  "Canva",
  "Photoshop",
];

const projects = [
  {
    id: "sams",
    title: "School Attendance Monitoring System",
    category: "Desktop / Enterprise App",
    description:
      "A reliable system designed to track student attendance securely and manage school records efficiently.",
    tech: ["Java", "SQL"],
  },
  {
    id: "lcs",
    title: "Live Chat System",
    category: "Real-Time Communication",
    description:
      "A real-time messaging application capable of handling instant user interactions with low-latency messaging protocols.",
    tech: ["JavaScript", "MQTT", "Bootstrap"],
  },
  {
    id: "pong",
    title: "Simple Ping Pong Game",
    category: "Game Development",
    description:
      "A simple implementation of the classic Ping Pong game with real-time gameplay.",
    tech: ["JavaScript", "Phaser", "Bootstrap"],
  },
  {
    id: "wms",
    title: "Water Distribution Management System",
    category: "Full Stack Web App",
    description:
      "A comprehensive utility management platform to monitor water distribution, track user records, and streamline operations.",
    tech: ["Angular", "PHP Laravel", "MySQL", "Bootstrap"],
  },
  {
    id: "pms",
    title: "Project Management System",
    category: "Productivity Tool",
    description:
      "A collaborative workspace platform for teams to organize tasks, track milestones, and manage project workflows.",
    tech: ["Angular", "PHP Laravel", "MySQL", "Bootstrap"],
  },
  {
    id: "pbm",
    title: "Printing Business Manager",
    category: "Full Stack Web App",
    description:
      "A streamlined management system tailored for printing businesses to handle customer orders, pricing, and tracking.",
    tech: ["React", "Tailwind CSS", "Shadcn UI", "Firebase"],
  },
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="bg-white text-slate-800 min-h-screen w-full selection:bg-blue-600 selection:text-white overflow-x-hidden font-sans relative">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 px-6 sm:px-12 lg:px-20 py-4 flex justify-between items-center z-50 shadow-sm">
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Profile Picture"
            className="w-10 h-10 rounded-full"
          />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
          <a href="#home" className="hover:text-blue-600 transition">
            Home
          </a>
          <a href="#services" className="hover:text-blue-600 transition">
            Services
          </a>
          <a href="#experience" className="hover:text-blue-600 transition">
            Experience
          </a>
          <a href="#skills" className="hover:text-blue-600 transition">
            Skill
          </a>
          <a href="#portfolio" className="hover:text-blue-600 transition">
            Portfolio
          </a>
        </div>

        {/* Let's Talk CTA */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs tracking-wider px-6 py-2.5 rounded transition shadow-sm"
          >
            LET'S TALK
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-slate-700 hover:text-blue-600 focus:outline-none p-2"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full bg-white border-b border-slate-200 py-6 px-6 flex flex-col gap-4 shadow-xl z-40">
          <a
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
            className="text-slate-700 hover:text-blue-600 font-medium"
          >
            Home
          </a>
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="text-slate-700 hover:text-blue-600 font-medium"
          >
            Services
          </a>
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="text-slate-700 hover:text-blue-600 font-medium"
          >
            Experience
          </a>
          <a
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="text-slate-700 hover:text-blue-600 font-medium"
          >
            Skill
          </a>
          <a
            href="#portfolio"
            onClick={() => setMobileMenuOpen(false)}
            className="text-slate-700 hover:text-blue-600 font-medium"
          >
            Portfolio
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="bg-blue-600 text-white text-center py-2.5 rounded font-medium text-sm tracking-wider"
          >
            LET'S TALK
          </a>
        </div>
      )}

      {/* Hero Section */}
      <section
        id="home"
        className="pt-32 pb-16 lg:pt-20 lg:pb-0 px-6 sm:px-12 lg:px-20 w-full relative overflow-hidden bg-gradient-to-r from-[#e6f0fa] via-[#edf4fc] to-[#deebf8] min-h-[90vh] flex items-center justify-center"
      >
        <div className="max-w-7xl w-full flex flex-col-reverse lg:grid lg:grid-cols-12 gap-8 lg:gap-8 items-center justify-between">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left z-10 py-6 lg:py-12">
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
                Hello, I'm <span className="text-[#1d4ed8]">John Paul</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1d4ed8] tracking-tight">
                Software Engineer
              </h2>
            </div>

            <p className="text-slate-600 text-sm sm:text-base max-w-lg mx-auto lg:mx-0 leading-relaxed font-normal">
              I worked as a Software Engineer since 2021 with over{" "}
              {new Date().getFullYear() - 2021}
              years of experience. I have full-stack capabilities, but my core
              expertise and greatest enthusiasm center on frontend development.
              I specialize in building websites, web apps, and desktop
              applications. I am actively involved in planning, developing,
              fixing issues, migrations, automation, and more.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 justify-center lg:justify-start">
              <button
                onClick={() => setCvModalOpen(true)}
                className="border border-[#1d4ed8] hover:bg-[#1d4ed8]/10 text-[#1d4ed8] font-medium px-8 py-3.5 rounded transition text-xs tracking-wider bg-white/80 shadow-sm cursor-pointer"
              >
                LEARN MORE
              </button>
              <a
                href="#contact"
                className="bg-[#1d4ed8] hover:bg-[#1e40af] text-white font-medium px-8 py-3.5 rounded transition shadow-sm text-xs tracking-wider"
              >
                CONTACT ME
              </a>
            </div>
          </div>

          {/* Profile Picture Box (Smaller on mobile/tablet) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative items-center w-full">
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[420px] bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-7 shadow-xl lg:shadow-2xl border border-blue-100 z-10">
              <div className="relative w-full h-[280px] sm:h-[320px] lg:h-[480px] bg-gradient-to-b from-blue-50/40 to-slate-100 rounded-xl sm:rounded-2xl overflow-hidden flex items-end justify-center border border-slate-100 shadow-inner">
                <img
                  src={profilePic}
                  alt="John Paul Vistal"
                  className="w-full h-full object-cover object-top scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-24 px-6 sm:px-12 lg:px-20 w-full bg-slate-50 border-t border-slate-100"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-600 text-xs font-bold tracking-widest uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              What I Do
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 text-slate-900">
              Services & Expertise
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {services.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border border-slate-200/70 shadow-sm hover:shadow-md transition"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 font-bold mb-6 text-xl">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-24 px-6 sm:px-12 lg:px-20 w-full bg-white border-t border-slate-100"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-600 text-xs font-bold tracking-widest uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Career History
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 text-slate-900">
              Work Experience
            </h2>
          </div>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="bg-slate-50 border border-slate-200/80 p-8 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
              >
                <div>
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded border border-blue-100">
                    {exp.period}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-2">
                    {exp.role}
                  </h3>
                  <p className="text-slate-600 font-medium text-sm">
                    {exp.company}
                  </p>
                </div>
                <p className="text-slate-500 text-sm max-w-md">{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-24 px-6 sm:px-12 lg:px-20 w-full bg-slate-50 border-t border-slate-100"
      >
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-blue-600 text-xs font-bold tracking-widest uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Core Competencies
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 mb-12 text-slate-900">
            Technical Skills
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-white border border-slate-200 text-slate-700 px-5 py-3 rounded-xl font-medium text-sm shadow-sm hover:border-blue-600 hover:text-blue-600 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section
        id="portfolio"
        className="py-24 px-6 sm:px-12 lg:px-20 w-full bg-white border-t border-slate-100"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-600 text-xs font-bold tracking-widest uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Recent Projects
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 text-slate-900">
              Featured Portfolio
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              Click any card to view detailed screenshots and specifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                onClick={() => setSelectedProject(project)} // <-- Triggers opening the project modal
                className="bg-slate-50 border border-slate-200/80 p-8 rounded-2xl hover:shadow-lg hover:border-blue-300 transition duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <span className="text-xs font-semibold text-blue-600 uppercase">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold mt-2 mb-3 text-slate-900 group-hover:text-blue-600 transition">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-xs bg-white text-slate-700 px-3 py-1 rounded-md border border-slate-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs font-bold text-blue-600 group-hover:underline flex items-center gap-1">
                    View Screenshots &rarr;
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Footer Section */}
      <footer
        id="contact"
        className="py-24 px-6 sm:px-12 lg:px-20 w-full border-t border-slate-100 bg-slate-900 text-white"
      >
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-3">
            <span className="text-blue-400 text-xs font-bold tracking-widest uppercase bg-blue-950 px-3 py-1 rounded-full border border-blue-500/30">
              Get in Touch
            </span>
            <h3 className="text-3xl font-bold">
              Let's Build Something Great Together
            </h3>
            <p className="text-slate-400 text-sm max-w-lg mx-auto">
              Have a project in mind, want to check full CV details, or looking
              to hire a full-stack engineer? Reach out directly below.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 text-left">
            <div className="bg-slate-800/80 border border-slate-700 p-6 rounded-2xl">
              <span className="text-xs text-blue-400 uppercase font-semibold">
                Email Address
              </span>
              <p className="text-slate-200 font-medium mt-1 text-sm truncate">
                johnpaulvistal@gmail.com
              </p>
            </div>
            <div className="bg-slate-800/80 border border-slate-700 p-6 rounded-2xl">
              <span className="text-xs text-blue-400 uppercase font-semibold">
                Phone Number
              </span>
              <p className="text-slate-200 font-medium mt-1 text-sm">
                +639 95754 6102
              </p>
            </div>
            <div className="bg-slate-800/80 border border-slate-700 p-6 rounded-2xl">
              <span className="text-xs text-blue-400 uppercase font-semibold">
                Professional Profile
              </span>
              <a
                href="https://www.linkedin.com/in/john-paul-vistal-2b73701a4/"
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 hover:underline font-medium mt-1 text-sm block"
              >
                linkedin.com/in/john-paul-vistal
              </a>
            </div>
          </div>

          <div className="pt-6">
            <a
              href="mailto: johnpaulvistal@gmail.com"
              className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-medium px-8 py-4 rounded-md transition shadow-sm text-sm tracking-wider"
            >
              SEND DIRECT MESSAGE
            </a>
          </div>
        </div>
      </footer>

      {/* --- RENDER THE SEPARATED CV MODAL COMPONENT --- */}
      <ResumeModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />

      {/* --- RENDER THE SEPARATED PROJECT MODAL COMPONENT --- */}
      <ProjectModal
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </div>
  );
}
