"use client";

import React, { useState } from "react";
import { Copy, Check, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleCopy = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Inquiry from ${formData.name || "Portfolio Visitor"}`);
    const body = encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-16 px-5 sm:px-8 max-w-4xl mx-auto border-t border-white/[0.06]">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-white tracking-tight">
            Have an interesting project in mind?
          </h2>
          <p className="text-sm text-zinc-400 mt-1 max-w-xl">
            I'm always interested in connecting with developers, exploring opportunities, and working
            on meaningful projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Direct channels */}
          <div className="rounded-xl border border-white/[0.08] bg-[#0c0d12] p-5 space-y-4 text-xs font-mono">
            <span className="text-zinc-400 block border-b border-white/[0.06] pb-2 font-medium">
              Direct Contact
            </span>

            {/* Email with copy */}
            <div className="space-y-1.5">
              <span className="text-zinc-400 block text-[11px]">Email address</span>
              <div className="flex items-center justify-between gap-2 bg-white/[0.02] border border-white/[0.06] p-2.5 rounded-lg">
                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                  className="text-zinc-200 hover:text-white transition-colors truncate"
                >
                  {PORTFOLIO_DATA.personal.email}
                </a>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="px-2 py-1 rounded bg-white/[0.05] hover:bg-white/[0.1] text-zinc-300 transition-colors flex items-center gap-1 shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social channels */}
            <div className="space-y-2 pt-2">
              <span className="text-zinc-400 block text-[11px]">Profiles</span>
              <div className="flex flex-col gap-1.5">
                <a
                  href={PORTFOLIO_DATA.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 rounded bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.05] text-zinc-300 hover:text-white transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>github.com/anandrizz</span>
                  </span>
                  <ExternalLink className="w-3 h-3 text-zinc-400" />
                </a>
                <a
                  href={PORTFOLIO_DATA.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 rounded bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.05] text-zinc-300 hover:text-white transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <LinkedinIcon className="w-3.5 h-3.5" />
                    <span>linkedin.com/in/anand-jolly</span>
                  </span>
                  <ExternalLink className="w-3 h-3 text-zinc-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick email composer */}
          <form
            onSubmit={handleSubmit}
            className="rounded-xl border border-white/[0.08] bg-[#0c0d12] p-5 space-y-3 text-xs"
          >
            <span className="text-zinc-400 block border-b border-white/[0.06] pb-2 font-mono font-medium">
              Send a Message
            </span>

            <div className="space-y-1">
              <label className="text-zinc-400 block font-mono text-[11px]">Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your name"
                className="w-full px-3 py-2 rounded bg-white/[0.02] border border-white/[0.08] text-white outline-none focus:border-white/30 transition-colors"
              />
            </div>

            <div className="space-y-1">
              <label className="text-zinc-400 block font-mono text-[11px]">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your.email@domain.com"
                className="w-full px-3 py-2 rounded bg-white/[0.02] border border-white/[0.08] text-white outline-none focus:border-white/30 transition-colors"
              />
            </div>

            <div className="space-y-1">
              <label className="text-zinc-400 block font-mono text-[11px]">Message</label>
              <textarea
                rows={3}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="What are you building or looking for?"
                className="w-full px-3 py-2 rounded bg-white/[0.02] border border-white/[0.08] text-white outline-none focus:border-white/30 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 rounded bg-white text-zinc-950 font-medium hover:bg-zinc-200 transition-colors mt-2"
            >
              Compose email draft
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
