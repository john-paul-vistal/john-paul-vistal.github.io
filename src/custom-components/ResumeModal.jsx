import profilePic from "../assets/profesional-picture.png";

export default function ResumeModal({ isOpen, onClose }) {
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
      company: "Trust Arc Web Services",
      period: "2025 - Present",
      desc: "Promoted to Software Engineer. Took on ownership of core product features, streamlined system workflows, and collaborated more closely with cross-functional teams.",
    },
    {
      role: "Associate Software Engineer",
      company: "Trust Arc Web Services",
      period: "2021 - 2024",
      desc: "Transitioned from internship to a full-time associate role. Focused on building responsive components, debugging complex issues, and delivering robust web solutions.",
    },
    {
      role: "Software Engineering Intern",
      company: "Trust Arc Web Services",
      period: "2021",
      desc: "Gained hands-on experience in modern development workflows, assisted in writing clean code, and supported the team with day-to-day feature implementations.",
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl overflow-y-auto relative flex flex-col">
        {/* Modal Header Bar */}
        <div className="sticky top-0 bg-slate-900 text-white px-6 py-4 flex justify-between items-center z-10">
          <h3 className="font-bold tracking-wide text-lg">
            John Paul Vistal - Professional CV
          </h3>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white p-1 text-2xl leading-none font-bold cursor-pointer"
            >
              &times;
            </button>
          </div>
        </div>

        {/* Modal CV Body Content */}
        <div className="px-6 pb-6 sm:p-10 grid grid-cols-1 md:grid-cols-12 gap-8 bg-slate-50 text-left items-start">
          {/* Sidebar / Left Column */}
          <div className="md:col-span-4 space-y-6 bg-teal-50/50 p-6 rounded-xl border border-teal-100/60 flex flex-col items-center md:items-start text-center md:text-left">
            {/* Profile Picture (210px x 210px) */}
            <div className="w-[210px] h-[210px] min-w-[210px] min-h-[210px] rounded-2xl overflow-hidden border-2 border-teal-600/30 shadow-md bg-white mx-auto md:mx-0">
              <img
                src={profilePic}
                alt="John Paul Vistal"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="w-full">
              {/* Name forced onto a single line */}
              <h2 className="text-xl lg:text-2xl font-black text-slate-900 tracking-tight whitespace-nowrap">
                JOHN PAUL VISTAL
              </h2>
              <p className="text-xs font-bold text-teal-700 tracking-widest uppercase mt-1">
                Software Engineer
              </p>
            </div>

            <div className="space-y-2 text-xs text-slate-600 w-full">
              <p>+1 (555) 234-5678</p>
              <p>steve.milner@example.com</p>
              <p>San Francisco, CA</p>
            </div>

            <div className="border-t border-teal-200/60 pt-4 w-full">
              <h4 className="font-bold text-xs uppercase text-slate-900 tracking-wider mb-3 text-left">
                Core Skills
              </h4>
              <div className="flex flex-wrap gap-1.5 justify-start">
                {skillsList.map((skill, index) => (
                  <span
                    key={index}
                    className="text-[10px] bg-white border border-teal-200 text-slate-700 px-2.5 py-1 rounded-md font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t border-teal-200/60 pt-4 w-full">
              <h4 className="font-bold text-xs uppercase text-slate-900 tracking-wider mb-3 text-left">
                Languages
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-700 list-disc list-inside text-left">
                <li>English (Native)</li>
                <li>Spanish (Fluent)</li>
              </ul>
            </div>
          </div>

          {/* Main Content / Right Column */}
          <div className="md:col-span-8 space-y-6 bg-white p-6 sm:p-8 rounded-xl border border-slate-200">
            <div>
              <h4 className="font-bold text-xs uppercase text-teal-700 tracking-wider mb-2">
                Professional Profile
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Software engineer with over {new Date().getFullYear() - 2021} years of 
                experience since 2021. Possesses full-stack capabilities with a core 
                expertise and greatest enthusiasm centered on frontend development. 
                Specializes in building websites, web apps, and desktop applications, 
                actively involved in planning, development, fixing issues, migrations, 
                and automation.
              </p>
            </div>

            <div className="border-t border-slate-100 pt-4">
              <h4 className="font-bold text-xs uppercase text-teal-700 tracking-wider mb-3">
                Education
              </h4>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="flex justify-between font-bold text-slate-900 text-xs sm:text-sm">
                    <span>B.S. in Computer Science</span>
                    <span className="text-slate-500 font-normal">
                      2017 - 2021
                    </span>
                  </div>
                  <p className="text-slate-600 text-xs">
                    University of California, Berkeley | GPA: 3.8 / 4.0
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-100 pt-4">
              <h4 className="font-bold text-xs uppercase text-teal-700 tracking-wider mb-3">
                Work Experience
              </h4>
              <div className="space-y-5 text-sm">
                {experienceList.map((exp, index) => (
                  <div key={index} className="border-b border-slate-100 pb-4 last:border-b-0 last:pb-0">
                    <div className="flex justify-between font-bold text-slate-900 text-xs sm:text-sm">
                      <span>{exp.role}</span>
                      <span className="text-teal-700 font-normal">
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

        {/* Modal Footer */}
        <div className="bg-slate-100 px-6 py-4 border-t border-slate-200 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-semibold px-5 py-2.5 rounded transition cursor-pointer"
          >
            Close
          </button>
          <button
            onClick={() => {
              alert("CV downloaded successfully!");
              onClose();
            }}
            className="bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold px-6 py-2.5 rounded transition shadow-sm cursor-pointer"
          >
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
}