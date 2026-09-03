import { useState } from "react";

export default function ProjectModal({ isOpen, onClose, project }) {
  const [zoomedImage, setZoomedImage] = useState(null);

  if (!isOpen || !project) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
        <div className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl relative flex flex-col overflow-hidden max-h-[90vh]">
          {/* Modal Header */}
          <div className="flex-shrink-0 bg-slate-900 text-white px-6 py-4 flex justify-between items-center z-10">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-blue-400 font-bold block">
                {project.category}
              </span>
              <h3 className="font-bold tracking-wide text-lg text-white">
                {project.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white p-1 text-2xl leading-none font-bold cursor-pointer"
            >
              &times;
            </button>
          </div>

          {/* Modal Body */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 bg-slate-50 text-left [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar-thumb]:rounded-full">
            {/* 1. Project Description (Overview on top) */}
            <div>
              <h4 className="font-bold text-xs uppercase text-blue-600 tracking-wider mb-2">
                Overview
              </h4>
              <p className="text-slate-700 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* 2. Tech Stack (Technologies on next line) */}
            <div className="border-t border-slate-200/60 pt-4">
              <h4 className="font-bold text-xs uppercase text-blue-600 tracking-wider mb-3">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs bg-white text-slate-700 px-3 py-1.5 rounded-lg border border-slate-200 font-medium shadow-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* 3. Four Screenshots Grid using [1, 2, 3, 4] */}
            <div className="border-t border-slate-200/60 pt-4">
              <h4 className="font-bold text-xs uppercase text-blue-600 tracking-wider mb-3">
                Project Screenshots (Click to enlarge)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((num) => {
                  const imgSrc = `/documentation/${project.id}/${project.id}-screenshot-${num}.png`;
                  return (
                    <div
                      key={num}
                      onClick={() => setZoomedImage(imgSrc)}
                      className="w-full h-40 bg-slate-200 rounded-xl border border-slate-300 flex flex-col items-center justify-center relative overflow-hidden shadow-inner group cursor-pointer hover:border-blue-500 transition"
                    >
                      <img
                        src={imgSrc}
                        alt={`Screenshot ${num}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                        onError={(e) => {
                          // Fallback display if the image file doesn't exist yet
                          e.target.style.display = "none";
                          e.target.nextSibling.style.display = "flex";
                        }}
                      />
                      <div className="hidden absolute inset-0 bg-slate-100 flex-col items-center justify-center p-2 text-center">
                        <p className="text-slate-500 font-medium text-xs group-hover:text-blue-600 transition">
                          Preview {num}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="flex-shrink-0 bg-slate-100 px-6 py-4 border-t border-slate-200 flex justify-end gap-3 z-10">
            <button
              onClick={onClose}
              className="bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-semibold px-5 py-2.5 rounded transition cursor-pointer"
            >
              Close
            </button>
            <a
              href="#contact"
              onClick={onClose}
              className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-6 py-2.5 rounded transition shadow-sm text-center cursor-pointer"
            >
              Inquire About Project
            </a>
          </div>
        </div>
      </div>

      {/* --- LIGHTBOX ZOOM MODAL FOR INDIVIDUAL IMAGES --- */}
      {zoomedImage && (
        <div
          onClick={() => setZoomedImage(null)}
          className="fixed inset-0 z-60 flex items-center justify-center p-2 sm:p-6  backdrop-blur-md cursor-pointer animate-fadeIn"
        >
          <div
            className="relative max-w-[79vw] w-full bg-slate-900 border border-slate-700 rounded-2xl p-3 sm:p-6 flex flex-col items-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setZoomedImage(null)}
              className="absolute top-0 right-5 text-slate-400 hover:text-white text-3xl font-bold cursor-pointer z-10"
            >
              &times;
            </button>

            <div className="w-full h-[78vh] bg-slate-950 rounded-xl overflow-hidden flex items-center justify-center border border-slate-800 my-4">
              <img
                src={zoomedImage}
                alt="Enlarged Project Preview"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
