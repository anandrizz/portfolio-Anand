"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export function EducationSection() {
  return (
    <section className="py-16 px-5 sm:px-8 max-w-4xl mx-auto border-t border-white/[0.06]">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-white tracking-tight">
            Education and certifications
          </h2>
          <p className="text-sm text-zinc-400 mt-1">
            Academic degree and verified technical training programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Education */}
          <div className="rounded-xl border border-white/[0.08] bg-[#0c0d12] p-5 space-y-3">
            <span className="text-xs font-mono text-zinc-400 block border-b border-white/[0.06] pb-2 font-medium">
              Degree
            </span>
            {PORTFOLIO_DATA.education.map((edu) => (
              <div key={edu.degree} className="space-y-1.5">
                <h3 className="text-base font-medium text-white">
                  {edu.degree}
                </h3>
                <p className="text-xs text-zinc-300 font-mono">
                  {edu.institution} — {edu.location}
                </p>
                <p className="text-xs text-zinc-400 font-mono">
                  {edu.period}
                </p>
                <p className="text-xs text-zinc-400 leading-relaxed pt-1">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="rounded-xl border border-white/[0.08] bg-[#0c0d12] p-5 space-y-3">
            <span className="text-xs font-mono text-zinc-400 block border-b border-white/[0.06] pb-2 font-medium">
              Certifications
            </span>
            <div className="space-y-4">
              {PORTFOLIO_DATA.certifications.map((cert) => (
                <div key={cert.title} className="space-y-1">
                  <h4 className="text-sm font-medium text-white">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-zinc-400 font-mono">
                    Issuer: {cert.issuer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
