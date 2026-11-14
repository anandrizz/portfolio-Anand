"use client";

import React, { useEffect } from "react";
import { X, Download, Printer, ExternalLink, Mail, MapPin, Briefcase, GraduationCap, Award, CheckCircle2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md">
      <div
        className="relative w-full max-w-3xl max-h-[92vh] flex flex-col rounded-2xl border border-white/10 bg-[#0d0f17] text-zinc-200 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Action Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 bg-[#121420]">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-white">Anand Jolly — Curriculum Vitae</span>
            <span className="text-[11px] bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded-full font-mono">
              v2026.1
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/10 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>
            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}?subject=Resume Request - Anand Jolly`}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Request Direct PDF</span>
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors ml-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6 text-sm">
          {/* Header */}
          <div className="border-b border-white/10 pb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {PORTFOLIO_DATA.personal.name}
            </h1>
            <p className="text-base text-blue-400 font-medium mt-1">
              {PORTFOLIO_DATA.personal.title} — {PORTFOLIO_DATA.personal.secondaryTitle}
            </p>
            <div className="flex flex-wrap items-center gap-y-1.5 gap-x-4 text-xs text-zinc-400 mt-3">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                {PORTFOLIO_DATA.personal.location}
              </span>
              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="flex items-center gap-1 hover:text-blue-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-zinc-500" />
                {PORTFOLIO_DATA.personal.email}
              </a>
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 hover:text-blue-400 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5 text-zinc-500" />
                GitHub
              </a>
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 hover:text-blue-400 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5 text-zinc-500" />
                LinkedIn
              </a>
            </div>
            <p className="text-zinc-300 text-xs sm:text-sm mt-3.5 leading-relaxed bg-white/[0.02] p-3 rounded-lg border border-white/5">
              {PORTFOLIO_DATA.personal.summary}
            </p>
          </div>

          {/* Experience */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white font-semibold text-base border-b border-white/5 pb-1">
              <Briefcase className="w-4 h-4 text-blue-400" />
              <h2>Work Experience</h2>
            </div>
            {PORTFOLIO_DATA.experience.map((exp) => (
              <div key={exp.company} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="font-semibold text-white">{exp.role}</h3>
                    <p className="text-xs text-blue-400">{exp.company} • {exp.location}</p>
                  </div>
                  <span className="text-xs text-zinc-400 font-mono mt-0.5 sm:mt-0">{exp.period}</span>
                </div>
                <div className="space-y-1.5 text-xs text-zinc-300">
                  <p className="font-medium text-zinc-400">Responsibilities:</p>
                  <ul className="list-disc list-inside space-y-1 pl-1 text-zinc-300">
                    {exp.responsibilities.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                  <p className="font-medium text-emerald-400 pt-1">Measurable Achievements:</p>
                  <ul className="list-disc list-inside space-y-1 pl-1 text-zinc-300">
                    {exp.achievements.map((a, i) => (
                      <li key={i} className="text-zinc-200">
                        <strong className="text-emerald-400">⚡</strong> {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white font-semibold text-base border-b border-white/5 pb-1">
              <CheckCircle2 className="w-4 h-4 text-indigo-400" />
              <h2>Featured Projects</h2>
            </div>
            {PORTFOLIO_DATA.projects.map((proj) => (
              <div key={proj.id} className="space-y-1.5 p-3 rounded-lg bg-white/[0.02] border border-white/5">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-white text-sm">{proj.title}</h3>
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-blue-400 hover:underline flex items-center gap-1"
                  >
                    GitHub <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <p className="text-xs text-zinc-400 font-mono">
                  Stack: {proj.technologies.join(" • ")}
                </p>
                <p className="text-xs text-zinc-300">{proj.description}</p>
                <ul className="list-disc list-inside text-xs text-zinc-400 space-y-0.5 pl-1 pt-1">
                  {proj.highlights.slice(0, 3).map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <div className="flex items-center gap-2 text-white font-semibold text-sm border-b border-white/5 pb-1 mb-2">
                <GraduationCap className="w-4 h-4 text-emerald-400" />
                <h2>Education</h2>
              </div>
              {PORTFOLIO_DATA.education.map((edu) => (
                <div key={edu.degree} className="text-xs space-y-1">
                  <p className="font-medium text-white">{edu.degree}</p>
                  <p className="text-zinc-400">{edu.institution}</p>
                  <p className="text-zinc-500 font-mono">{edu.period}</p>
                </div>
              ))}
            </div>

            <div>
              <div className="flex items-center gap-2 text-white font-semibold text-sm border-b border-white/5 pb-1 mb-2">
                <Award className="w-4 h-4 text-amber-400" />
                <h2>Certifications</h2>
              </div>
              <div className="space-y-2 text-xs">
                {PORTFOLIO_DATA.certifications.map((cert) => (
                  <div key={cert.title}>
                    <p className="font-medium text-white">{cert.title}</p>
                    <p className="text-zinc-400">{cert.issuer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
