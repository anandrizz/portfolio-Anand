"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { cn } from "@/lib/utils";

export function SkillsSection() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...PORTFOLIO_DATA.skills.map((c) => c.category)];

  const displayedCategories =
    filter === "All"
      ? PORTFOLIO_DATA.skills
      : PORTFOLIO_DATA.skills.filter((c) => c.category === filter);

  return (
    <section id="skills" className="py-16 px-5 sm:px-8 max-w-4xl mx-auto border-t border-white/[0.06]">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-white tracking-tight">
            Technical skills
          </h2>
          <p className="text-sm text-zinc-400 mt-1">
            Languages, runtimes, database engines, and software engineering tools.
          </p>
        </div>

        {/* Filter bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "px-2.5 py-1 rounded transition-colors whitespace-nowrap",
                filter === cat
                  ? "bg-white text-zinc-950 font-medium"
                  : "bg-white/[0.04] text-zinc-400 hover:text-white"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Structured matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {displayedCategories.map((group) => (
            <div
              key={group.category}
              className="rounded-xl border border-white/[0.08] bg-[#0c0d12] p-4 space-y-2.5"
            >
              <h3 className="text-xs font-mono font-medium text-zinc-300 border-b border-white/[0.06] pb-1.5">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((s) => (
                  <span
                    key={s.name}
                    className="text-xs text-zinc-300 bg-white/[0.03] border border-white/[0.06] px-2 py-0.5 rounded"
                  >
                    {s.name}
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
