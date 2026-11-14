"use client";

import React from "react";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 px-5 sm:px-8 max-w-4xl mx-auto border-t border-white/[0.06]">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-white tracking-tight">
            Featured projects
          </h2>
          <p className="text-sm text-zinc-400 mt-1">
            Production codebases, APIs, and data processing systems.
          </p>
        </div>

        <div className="space-y-8">
          {PORTFOLIO_DATA.projects.map((project) => (
            <article
              key={project.id}
              className="rounded-xl border border-white/[0.08] bg-[#0c0d12] p-5 sm:p-6 space-y-4"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 border-b border-white/[0.06] pb-3">
                <div>
                  <h3 className="text-lg font-medium text-white">
                    {project.title}
                  </h3>
                  <p className="text-xs text-zinc-400 font-mono mt-0.5">
                    {project.category}
                  </p>
                </div>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-300 hover:text-white transition-colors self-start sm:self-auto"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>View repository</span>
                  <ExternalLink className="w-3 h-3 text-zinc-400" />
                </a>
              </div>

              {/* Description */}
              <p className="text-sm text-zinc-300 leading-relaxed">
                {project.description}
              </p>

              {/* Architectural features list */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-zinc-400 block">
                  System highlights
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-xs text-zinc-300 list-disc list-inside">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="leading-normal">
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech stack */}
              <div className="pt-2 border-t border-white/[0.04] flex flex-wrap gap-1.5">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono text-zinc-400 bg-white/[0.03] border border-white/[0.06] px-2 py-0.5 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
