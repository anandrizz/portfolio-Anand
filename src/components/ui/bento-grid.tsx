import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  children,
}: {
  name: string;
  className?: string;
  background?: ReactNode;
  Icon?: any;
  description?: string;
  href?: string;
  cta?: string;
  children?: ReactNode;
}) => (
  <div
    key={name}
    className={cn(
      "group relative flex flex-col justify-between overflow-hidden rounded-2xl",
      "bg-[#0d0f18] [box-shadow:0_0_0_1px_rgba(255,255,255,.07)]",
      "hover:[box-shadow:0_0_0_1px_rgba(255,255,255,.18)] transition-all duration-300 p-6",
      className
    )}
  >
    <div>{background}</div>
    <div className="relative z-10 flex flex-col gap-2">
      {Icon && (
        <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-1">
          <Icon className="w-5 h-5" />
        </div>
      )}
      <h3 className="text-lg font-semibold text-zinc-100 tracking-tight">{name}</h3>
      {description && <p className="text-sm text-zinc-400 leading-relaxed">{description}</p>}
      {children}
    </div>

    {href && cta && (
      <div className="relative z-10 pt-4 mt-2 border-t border-white/5 flex items-center gap-1.5 text-xs font-medium text-blue-400 group-hover:text-blue-300 transition-colors">
        <span>{cta}</span>
        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
      </div>
    )}
  </div>
);
