"use client";

import React, { useState } from "react";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { ExperienceSection } from "@/components/experience";
import { ProjectsSection } from "@/components/projects";
import { SkillsSection } from "@/components/skills";
import { EducationSection } from "@/components/education";
import { ContactSection } from "@/components/contact";
import { Footer } from "@/components/footer";
import { ResumeModal } from "@/components/resume-modal";

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#090a0f] text-[#f3f4f6] selection:bg-blue-600/30 selection:text-white antialiased">
      {/* Top Fixed Reading Progress Indicator */}
      <ScrollProgress />

      {/* Sticky Blur Navbar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Page Flow */}
      <main className="relative z-10">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
