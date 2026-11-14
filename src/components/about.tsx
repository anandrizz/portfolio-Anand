"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export function About() {
  return (
    <section id="about" className="py-16 px-5 sm:px-8 max-w-4xl mx-auto border-t border-white/[0.06]">
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-white tracking-tight">
          A little about me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Narrative introduction */}
          <div className="md:col-span-2 space-y-4 text-sm text-zinc-300 leading-relaxed">
            <p>
              I am a Full Stack Developer who enjoys building scalable web applications, designing efficient backend systems, and creating seamless user experiences. I work across modern frontend and backend technologies, with an active interest in AI-powered applications and intelligent automation.
            </p>
            <p className="text-zinc-400">
              I completed my Bachelor of Computer Applications (BCA) at Invertis University. Through hands-on project work and an industry internship at TalentxMinds, I developed and maintained production REST APIs, designed relational and document database schemas, and integrated end-to-end authentication flows with Spring Security and JWT.
            </p>
            <p className="text-zinc-400">
              On the frontend, I focus on responsive, accessible interfaces built with Next.js, React, and Tailwind CSS. On the backend, I write clean, modular services in Java, Spring Boot, Node.js, and Python. I am constantly exploring language model APIs, embeddings, and practical tools to build software that is both resilient and genuinely useful.
            </p>
          </div>

          {/* Developer information panel */}
          <div className="rounded-xl border border-white/[0.08] bg-[#0c0d12] p-4 text-xs font-mono space-y-3">
            <div className="text-zinc-400 border-b border-white/[0.06] pb-2 font-medium">
              Profile Summary
            </div>

            <div className="space-y-2">
              <div>
                <span className="text-zinc-400 block text-[11px]">Location</span>
                <span className="text-zinc-200">Bareilly, India</span>
              </div>
              <div>
                <span className="text-zinc-400 block text-[11px]">Education</span>
                <span className="text-zinc-200">BCA, Invertis University</span>
              </div>
              <div>
                <span className="text-zinc-400 block text-[11px]">Role</span>
                <span className="text-zinc-200">Full Stack Developer</span>
              </div>
              <div>
                <span className="text-zinc-400 block text-[11px]">Experience</span>
                <span className="text-zinc-200">Full Stack Developer Intern</span>
              </div>
              <div>
                <span className="text-zinc-400 block text-[11px]">Focus Areas</span>
                <span className="text-zinc-200">APIs, Databases, AI Apps</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
