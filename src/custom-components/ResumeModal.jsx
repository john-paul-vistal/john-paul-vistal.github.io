import { useRef, useState, useEffect } from "react";
import html2canvas from "html2canvas-pro";
import jsPDF from "jspdf";
import profilePic from "../assets/profesional-picture.png";

export default function ResumeModal({ isOpen, onClose }) {
  const [isDownloadingPDF, setIsDownloadingPDF] = useState(false);
  const [isDownloadingImage, setIsDownloadingImage] = useState(false);
  const resumeRef = useRef(null);

  // Lock background body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Data aligned directly from App.jsx[cite: 1]
  const skillsList = [
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

  const experienceList = [
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

  const certificationsList = [
    {
      title: "React Basics",
      issuer: "COURSERA / Meta",
      year: "2026",
    },
    {
      title: "Angular The Complete Guide (2023 Edition)",
      issuer: "UDEMY / Maximilian Schwarzmüller",
      year: "2022",
    },
    {
      title: "Cypress Web Automation Testing",
      issuer: "UDEMY / Artem bondar",
      year: "2022",
    },
  ];

  // Shared helper function to capture the resume element cleanly
  const captureResumeCanvas = async () => {
    const element = resumeRef.current;
    if (!element) return null;

    // Temporarily expand styles so nothing is clipped by overflow/height limits
    const originalOverflow = element.style.overflow;
    const originalHeight = element.style.height;
    element.style.overflow = "visible";
    element.style.height = "auto";

    try {
      const canvas = await html2canvas(element, {
        scale: 2, // High resolution crispness
        useCORS: true,
        logging: false,
        windowWidth: element.scrollWidth,
        windowHeight: element.scrollHeight,
      });
      return canvas;
    } finally {
      // Restore original styles immediately after capture
      element.style.overflow = originalOverflow;
      element.style.height = originalHeight;
    }
  };

  const handleDownloadPDF = async () => {
    try {
      setIsDownloadingPDF(true);
      const canvas = await captureResumeCanvas();
      if (!canvas) return;

      const imgData = canvas.toDataURL("image/png");

      // Initialize jsPDF (A4 dimensions in mm)
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      const pageHeight = 295; // A4 height in mm
      let heightLeft = pdfHeight;
      let position = 0;

      // Add first page
      pdf.addImage(imgData, "PNG", 0, position, pdfWidth, pdfHeight);
      heightLeft -= pageHeight;

      // Add subsequent pages if content overflows
      while (heightLeft > 0) {
        position -= pageHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, pdfWidth, pdfHeight);
        heightLeft -= pageHeight;
      }

      pdf.save("John_Paul_Vistal_Resume.pdf");
    } catch (error) {
      console.error("Failed to generate PDF:", error);
      alert("Something went wrong while generating the PDF.");
    } finally {
      setIsDownloadingPDF(false);
    }
  };

  const handleDownloadImage = async () => {
    try {
      setIsDownloadingImage(true);
      const canvas = await captureResumeCanvas();
      if (!canvas) return;

      // Convert canvas to an image link and trigger download
      const imageURL = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = imageURL;
      link.download = "John_Paul_Vistal_Resume.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Failed to generate Image:", error);
      alert("Something went wrong while generating the image.");
    } finally {
      setIsDownloadingImage(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white w-full max-w-4xl h-[90vh] rounded-2xl shadow-2xl relative flex flex-col overflow-hidden">
        {/* Fixed Header Bar */}
        <div className="flex-shrink-0 bg-slate-900 text-white px-6 py-4 flex justify-between items-center z-10">
          <h3 className="font-bold tracking-wide text-lg">
            John Paul Vistal - Professional CV
          </h3>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 text-2xl leading-none font-bold cursor-pointer"
          >
            &times;
          </button>
        </div>

        {/* Scrollable Body Content - items-stretch forces equal column heights */}
        <div
          ref={resumeRef}
          className="flex-1 overflow-y-auto px-6 py-6 sm:p-10 grid grid-cols-1 md:grid-cols-12 gap-4 text-left items-stretch [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar-thumb]:rounded-full"
        >
          {/* Sidebar / Left Column */}
          <div className="md:col-span-5 space-y-6 bg-blue-50/50 p-6 rounded-xl border border-blue-100/60 flex flex-col items-center text-center justify-between">
            <div className="w-full flex flex-col items-center space-y-6">
              <div className="w-[210px] h-[210px] min-w-[210px] min-h-[210px] rounded-2xl overflow-hidden border-2 border-blue-600/30 shadow-md bg-white mx-auto">
                <img
                  src={profilePic}
                  alt="John Paul Vistal"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="w-full text-center">
                <h2 className="text-xl lg:text-2xl font-black text-slate-900 tracking-tight whitespace-nowrap">
                  JOHN PAUL VISTAL
                </h2>
                <p className="text-xs font-bold text-blue-600 tracking-widest uppercase mt-1">
                  Software Engineer
                </p>
              </div>

              <div className="space-y-2 text-xs text-slate-600 w-full text-center">
                <p>+639 95754 6102</p>
                <p>johnpaulvistal@gmail.com</p>
                <p>Sagbayan, Bohol, Philippines</p>
              </div>

              <div className="border-t border-blue-200/60 pt-4 w-full">
                <h4 className="font-bold text-xs uppercase text-slate-900 tracking-wider mb-3 text-center">
                  Core Skills
                </h4>
                <div className="flex flex-wrap gap-1.5 justify-center">
                  {skillsList.map((skill, index) => (
                    <span
                      key={index}
                      className="text-[10px] bg-white border border-blue-200 text-slate-700 px-2.5 py-1 rounded-md font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="border-t border-blue-200/60 pt-4 w-full mt-auto">
                <h4 className="font-bold text-xs uppercase text-slate-900 tracking-wider mb-3 text-center">
                  Languages
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-700 list-none text-center">
                  <li>English (Conversational)</li>
                  <li>Filipino (Fluent)</li>
                  <li>Cebuano (Native)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Main Content / Right Column */}
          <div className="md:col-span-7 space-y-6 bg-white p-6 sm:p-8 rounded-xl border border-slate-200 flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-xs uppercase text-blue-600 tracking-wider mb-2">
                  Professional Profile
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Software engineer with over {new Date().getFullYear() - 2021}{" "}
                  years of experience since 2021. Possesses full-stack
                  capabilities with a core expertise and greatest enthusiasm
                  centered on frontend development. Specializes in building
                  websites, web apps, and desktop applications, actively
                  involved in planning, development, fixing issues, migrations,
                  and automation.
                </p>
              </div>

              <div className="border-t border-slate-100 pt-4">
                <h4 className="font-bold text-xs uppercase text-blue-600 tracking-wider mb-3">
                  Education
                </h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="flex justify-between font-bold text-slate-900 text-xs sm:text-sm">
                      <span>Certificate in Computer Technology</span>
                      <span className="text-slate-500 font-normal">
                        2019 - 2021
                      </span>
                    </div>
                    <p className="text-slate-600 text-xs">
                      University of San Carlos - Talamban Campus
                    </p>
                    <p className="text-slate-600 text-xs">
                      Cebu City, Philippines
                    </p>
                  </div>
                </div>
              </div>

              {/* Certifications Section */}
              <div className="border-t border-slate-100 pt-4">
                <h4 className="font-bold text-xs uppercase text-blue-600 tracking-wider mb-3">
                  Certifications
                </h4>
                <div className="space-y-3 text-sm">
                  {certificationsList.map((cert, index) => (
                    <div
                      key={index}
                      className="flex justify-between font-bold text-slate-900 text-xs sm:text-sm"
                    >
                      <div>
                        <span>{cert.title}</span>
                        <p className="text-slate-600 text-xs font-normal">
                          {cert.issuer}
                        </p>
                      </div>
                      <span className="text-slate-500 font-normal">
                        {cert.year}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-slate-100 pt-4">
                <h4 className="font-bold text-xs uppercase text-blue-600 tracking-wider mb-3">
                  Work Experience
                </h4>
                <div className="space-y-5 text-sm">
                  {experienceList.map((exp, index) => (
                    <div
                      key={index}
                      className="border-b border-slate-100 pb-4 last:border-b-0 last:pb-0"
                    >
                      <div className="flex justify-between font-bold text-slate-900 text-xs sm:text-sm">
                        <span>{exp.role}</span>
                        <span className="text-blue-600 font-normal">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-slate-600 text-xs mb-1 font-medium">
                        {exp.company}
                      </p>
                      <p className="text-slate-500 text-xs leading-relaxed">
                        {exp.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fixed Footer Bar with Download Image & PDF options */}
        <div className="flex-shrink-0 bg-slate-100 px-6 py-4 border-t border-slate-200 flex justify-end gap-3 z-10">
          <button
            onClick={onClose}
            className="bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-semibold px-5 py-2.5 rounded transition cursor-pointer"
          >
            Close
          </button>

          <button
            onClick={handleDownloadImage}
            disabled={isDownloadingImage}
            className="bg-slate-700 hover:bg-slate-800 disabled:bg-slate-400 text-white text-xs font-semibold px-5 py-2.5 rounded transition shadow-sm cursor-pointer flex items-center gap-2"
          >
            {isDownloadingImage ? "Generating Image..." : "Download Image"}
          </button>

          <button
            onClick={handleDownloadPDF}
            disabled={isDownloadingPDF}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white text-xs font-semibold px-6 py-2.5 rounded transition shadow-sm cursor-pointer flex items-center gap-2"
          >
            {isDownloadingPDF ? "Generating PDF..." : "Download PDF"}
          </button>
        </div>
      </div>
    </div>
  );
}
