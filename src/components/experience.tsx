"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 px-5 sm:px-8 max-w-4xl mx-auto border-t border-white/[0.06]">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-white tracking-tight">
            Work experience
          </h2>
          <p className="text-sm text-zinc-400 mt-1">
            Engineering roles and delivered systems.
          </p>
        </div>

        <div className="space-y-8">
          {PORTFOLIO_DATA.experience.map((exp) => (
            <div key={exp.company} className="space-y-4">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 border-b border-white/[0.06] pb-3">
                <div>
                  <h3 className="text-base font-medium text-white">
                    {exp.role}
                  </h3>
                  <p className="text-xs text-zinc-400 font-mono mt-0.5">
                    {exp.company} — {exp.location}
                  </p>
                </div>
                <span className="text-xs text-zinc-400 font-mono">
                  {exp.period}
                </span>
              </div>

              {/* Measurable achievements callout */}
              <div className="rounded-lg border border-white/[0.08] bg-[#0c0d12] p-4 space-y-2">
                <span className="text-xs font-mono text-zinc-400 font-medium block">
                  Key measurable outcomes
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="space-y-0.5">
                    <span className="text-lg font-semibold text-white font-mono">
                      +35%
                    </span>
                    <p className="text-zinc-400">
                      Average endpoint response time improved through query indexing and response caching.
                    </p>
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-lg font-semibold text-white font-mono">
                      +30%
                    </span>
                    <p className="text-zinc-400">
                      Read throughput increase following MongoDB schema reorganization for high-frequency queries.
                    </p>
                  </div>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="space-y-2 text-xs sm:text-sm text-zinc-300">
                <span className="text-xs font-mono text-zinc-400 block">
                  Responsibilities
                </span>
                <ul className="space-y-1.5 list-disc list-inside text-zinc-300">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="leading-relaxed">
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="pt-2 flex flex-wrap gap-1.5">
                {exp.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-mono text-zinc-400 bg-white/[0.03] border border-white/[0.06] px-2 py-0.5 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
