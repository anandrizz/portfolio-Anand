"use client";

import React, { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, CornerDownLeft } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

interface CommandRecord {
  command: string;
  output: React.ReactNode;
}

export function InteractiveTerminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<CommandRecord[]>([
    {
      command: "welcome",
      output: (
        <div className="space-y-1 text-xs text-zinc-300">
          <p className="text-zinc-200">
            Anand Jolly portfolio shell (x86_64). Type <code className="text-[#4f75ff] font-semibold">help</code> to list commands.
          </p>
        </div>
      ),
    },
  ]);
  const [historyIdx, setHistoryIdx] = useState<number>(-1);
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (raw: string) => {
    const trimmed = raw.trim();
    if (!trimmed) return;
    const cmd = trimmed.toLowerCase();

    setCmdHistory((prev) => [...prev, trimmed]);
    setHistoryIdx(-1);

    if (cmd === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    let out: React.ReactNode;

    switch (cmd) {
      case "help":
        out = (
          <div className="space-y-1 text-xs text-zinc-300">
            <p className="text-zinc-400">Commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-0.5 text-zinc-300">
              {PORTFOLIO_DATA.terminalCommands.map((c) => (
                <div key={c.command} className="flex gap-2">
                  <span className="text-[#4f75ff] font-medium w-20">{c.command}</span>
                  <span className="text-zinc-400">{c.description}</span>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case "about":
        out = (
          <div className="space-y-1 text-xs text-zinc-300 leading-relaxed">
            <p className="text-zinc-100 font-medium">Anand Jolly</p>
            <p className="text-zinc-400">{PORTFOLIO_DATA.personal.summary}</p>
            <p className="text-zinc-400 pt-1">
              Location: Bareilly, India | Education: BCA, Invertis University (2026)
            </p>
          </div>
        );
        break;

      case "projects":
        out = (
          <div className="space-y-2 text-xs text-zinc-300">
            {PORTFOLIO_DATA.projects.map((p) => (
              <div key={p.id} className="border-l-2 border-white/10 pl-2 space-y-0.5">
                <div className="flex items-center justify-between">
                  <span className="text-zinc-100 font-medium">{p.title}</span>
                  <span className="text-[11px] text-zinc-400">{p.category}</span>
                </div>
                <p className="text-zinc-400">{p.description}</p>
                <a
                  href={p.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#4f75ff] hover:underline inline-block pt-0.5"
                >
                  github.com/{p.id}
                </a>
              </div>
            ))}
          </div>
        );
        break;

      case "skills":
        out = (
          <div className="space-y-1 text-xs text-zinc-300">
            {PORTFOLIO_DATA.skills.slice(0, 5).map((cat) => (
              <div key={cat.category} className="flex gap-2">
                <span className="text-zinc-400 w-24 shrink-0">{cat.category}:</span>
                <span className="text-zinc-200">{cat.skills.map((s) => s.name).join(", ")}</span>
              </div>
            ))}
          </div>
        );
        break;

      case "experience":
        out = (
          <div className="space-y-1.5 text-xs text-zinc-300">
            {PORTFOLIO_DATA.experience.map((e) => (
              <div key={e.company}>
                <p className="text-zinc-100 font-medium">
                  {e.role} — {e.company} ({e.period})
                </p>
                <p className="text-zinc-400">{e.responsibilities[0]}</p>
                <p className="text-emerald-400">{e.achievements[0]}</p>
              </div>
            ))}
          </div>
        );
        break;

      case "education":
        out = (
          <div className="space-y-1 text-xs text-zinc-300">
            <p className="text-zinc-100 font-medium">Bachelor of Computer Applications (BCA)</p>
            <p className="text-zinc-400">Invertis University (August 2023 – June 2026)</p>
            <p className="text-zinc-400">Certifications: 100xDevs Full Stack Web Development, IBM Python 101</p>
          </div>
        );
        break;

      case "contact":
        out = (
          <div className="space-y-0.5 text-xs text-zinc-300">
            <p>
              Email:{" "}
              <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="text-[#4f75ff] hover:underline">
                {PORTFOLIO_DATA.personal.email}
              </a>
            </p>
            <p>
              GitHub:{" "}
              <a href={PORTFOLIO_DATA.personal.github} target="_blank" rel="noreferrer" className="text-[#4f75ff] hover:underline">
                github.com/anandrizz
              </a>
            </p>
            <p>
              LinkedIn:{" "}
              <a href={PORTFOLIO_DATA.personal.linkedin} target="_blank" rel="noreferrer" className="text-[#4f75ff] hover:underline">
                https://www.linkedin.com/in/anand-jolly-231339263/
              </a>
            </p>
          </div>
        );
        break;

      case "resume":
        out = (
          <div className="text-xs text-zinc-300">
            <p>Anand Jolly — Full Stack Developer CV</p>
            <p className="text-zinc-400">Click the "Resume" button in the navigation or contact section to view or print the full document.</p>
          </div>
        );
        break;

      default:
        out = (
          <div className="text-xs text-red-400">
            unknown command: {raw}. Type <button type="button" onClick={() => handleCommand("help")} className="underline text-zinc-300">help</button> for a list of commands.
          </div>
        );
    }

    setHistory((prev) => [
      ...prev,
      {
        command: raw,
        output: out,
      },
    ]);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (cmdHistory.length > 0) {
        const nextIdx = historyIdx + 1 < cmdHistory.length ? historyIdx + 1 : historyIdx;
        setHistoryIdx(nextIdx);
        setInput(cmdHistory[cmdHistory.length - 1 - nextIdx] || "");
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIdx > 0) {
        const nextIdx = historyIdx - 1;
        setHistoryIdx(nextIdx);
        setInput(cmdHistory[cmdHistory.length - 1 - nextIdx] || "");
      } else if (historyIdx === 0) {
        setHistoryIdx(-1);
        setInput("");
      }
    }
  };

  return (
    <div className="w-full rounded-xl border border-white/[0.08] bg-[#0c0d12] overflow-hidden text-left font-mono">
      {/* Chrome header */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/[0.06] bg-[#111218]">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-600/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-600/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-600/70" />
          </div>
          <span className="text-[11px] text-zinc-400 ml-2">anand@portfolio:~</span>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] text-zinc-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span>live</span>
        </div>
      </div>

      {/* Quick chips */}
      <div className="px-4 py-1.5 border-b border-white/[0.04] bg-white/[0.01] flex items-center gap-1.5 overflow-x-auto text-[11px] text-zinc-400">
        <span className="text-zinc-400">try:</span>
        {["help", "about", "projects", "skills", "experience", "contact", "clear"].map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => handleCommand(c)}
            className="px-2 py-0.5 rounded bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300 hover:text-white transition-colors"
          >
            {c}
          </button>
        ))}
      </div>

      {/* Output area */}
      <div
        ref={scrollRef}
        onClick={() => inputRef.current?.focus()}
        className="p-4 h-60 overflow-y-auto space-y-2.5 cursor-text text-xs"
      >
        {history.map((item, idx) => (
          <div key={idx} className="space-y-1">
            {item.command !== "welcome" && (
              <div className="flex items-center gap-2 text-zinc-400">
                <span className="text-zinc-400">anand:~$</span>
                <span className="text-zinc-200">{item.command}</span>
              </div>
            )}
            <div>{item.output}</div>
          </div>
        ))}

        <div className="flex items-center gap-2 text-zinc-400 pt-0.5">
          <span className="text-zinc-400">anand:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="type 'help' or command..."
            className="flex-1 bg-transparent text-zinc-100 outline-none text-xs placeholder:text-zinc-400 font-mono"
            autoComplete="off"
            spellCheck="false"
          />
          <CornerDownLeft className="w-3 h-3 text-zinc-400" />
        </div>
      </div>
    </div>
  );
}
