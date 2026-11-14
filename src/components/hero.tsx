"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { InteractiveTerminal } from "@/components/ui/terminal";

interface HeroProps {
  onOpenResume: () => void;
}

export function Hero({ onOpenResume }: HeroProps) {
  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) {
      const navOffset = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section className="pt-32 pb-16 px-5 sm:px-8 max-w-4xl mx-auto">
      <div className="space-y-6">
        {/* Availability indicator */}
        <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span>Available for opportunities</span>
          <span className="text-zinc-600">/</span>
          <span>Bareilly, India</span>
        </div>

        {/* Headline */}
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
            Building digital experiences and scalable systems.
          </h1>
          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed">
            Full Stack Developer passionate about building reliable applications, efficient backend
            systems, and interactive user experiences.
          </p>
        </div>

        {/* Roles/Capabilities line */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-400 pt-1">
          <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] text-zinc-300">
            Full Stack Development
          </span>
          <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] text-zinc-300">
            Backend Engineering
          </span>
          <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] text-zinc-300">
            AI-powered Applications
          </span>
        </div>

        {/* Actions & Links */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            onClick={scrollToProjects}
            className="px-4 py-2 rounded-lg bg-white text-zinc-950 text-xs font-medium hover:bg-zinc-200 transition-colors"
          >
            Explore my work
          </button>
          <button
            onClick={onOpenResume}
            className="px-4 py-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-zinc-200 border border-white/10 text-xs font-medium transition-colors"
          >
            Download resume
          </button>

          <div className="flex items-center gap-2 ml-2">
            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.05] transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PORTFOLIO_DATA.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.05] transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Interactive Terminal Centerpiece */}
        <div className="pt-6">
          <InteractiveTerminal />
        </div>
      </div>
    </section>
  );
}
