import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { type Project } from "../data/All Projects";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) return null;

  const images = project.images && project.images.length > 0 ? project.images : [];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-fadeIn">
      {/* Background overlay click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative z-10 max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-[#07eaff]/30 bg-linear-to-br from-[#79a3ff]/20 
                to-[#0051ff]/15 p-6 text-white shadow-2xl md:p-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg border border-[#07eaff] p-2 text-[#07eaff] hover:border-[#ff0000] hover:text-[#ff0000] transition"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="font-mono text-xs text-[#07eaff]">
          PROJECT #{project.number} · {project.category}
        </div>
        <h2 className="mt-2 font-montserrat text-2xl font-bold md:text-3xl">
          {project.title}
        </h2>
        <p className="mt-1 font-montserrat font-semibold text-sm text-[#ff9797]">
          Role: {project.myRole}
        </p>

        {/* Image Slider / Carousel */}
        {images.length > 0 && (
          <div className="relative mt-6 overflow-hidden rounded-xl border border-white/10 bg-[#001B2E]">
            <div className="h-full w-full md:h-90">
              <img
                src={images[currentImageIndex]}
                alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                className="h-full w-full object-cover object-[0%_15%]"
              />
            </div>

            {/* Navigation Arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/50 p-2 text-white hover:border-[#07eaff] hover:text-[#07eaff] transition"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/50 p-2 text-white hover:border-[#07eaff] hover:text-[#07eaff] transition"
                >
                  <ChevronRight size={20} />
                </button>

                {/* Indicator Dots */}
                <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
                  {images.map((_, idx) => (
                    <div
                      key={idx}
                      className={`h-2 rounded-full transition-all ${
                        idx === currentImageIndex ? "w-6 bg-[#07eaff]" : "w-2 bg-white/40"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {/* Details Section */}
        <div className="mt-6 space-y-4 font-montserrat text-sm leading-relaxed text-[#C2C2C2]">
          <div>
            <h3 className="font-mono text-md font-semibold text-[#07eaff] uppercase">Overview</h3>
            <p className="mt-1">{project.fullDescription || project.description}</p>
          </div>

          {project.detailedRole && (
            <div>
              <h3 className="font-mono text-md font-semibold text-[#07eaff] uppercase">Responsibilities</h3>
              <p className="mt-1">{project.detailedRole}</p>
            </div>
          )}

          {/* Tags */}
          <div>
            <h3 className="font-mono text-md font-semibold text-[#07eaff] uppercase mb-2">Technologies / Skills</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-white/20 bg-white/5 px-2.5 py-1 font-mono text-xs text-[#C2C2C2]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Links (GitHub) */}
        <div className="mt-8 flex flex-wrap gap-4 border-t border-[#FFFFFF]/70 pt-4 font-mono text-xs">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-white/20 bg-white px-4 py-2 text-[#000000] font-semibold transition hover:border-[#07eaff] hover:text-[#07eaff]"
            >
              <img
                src="/github logo.png"
                alt="GitHub"
                className="h-8 w-8 object-contain" /> VIEW SOURCE CODE
            </a>
          )}
        </div>

      </div>
    </div>
  );
}

export default ProjectModal;