import { useState } from "react";
import { motion } from "framer-motion";

export interface NavHeaderItem {
  label: string;
  shortLabel?: string;
  href: string;
}

export interface NavHeaderProps {
  items?: NavHeaderItem[];
  activeHref?: string;
  className?: string;
  onItemClick?: (href: string) => void;
}

const DEFAULT_ITEMS: NavHeaderItem[] = [
  { label: "Início", href: "#inicio" },
  { label: "Escritório", href: "#sobre" },
  { label: "Áreas de Atuação", shortLabel: "Áreas", href: "#areas" },
  { label: "Advogado", href: "#advogado" },
  { label: "Metodologia", shortLabel: "Método", href: "#metodologia" },
  { label: "Conteúdos", shortLabel: "Artigos", href: "#conteudos" },
  { label: "Contato", href: "#contato" },
];

export function NavHeader({
  items = DEFAULT_ITEMS,
  activeHref = "#inicio",
  className = "",
  onItemClick,
}: NavHeaderProps) {
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);

  return (
    <nav aria-label="Navegação Principal" className={className}>
      <ul
        role="menubar"
        className="relative mx-auto flex w-fit items-center rounded-full border border-paper-border/90 bg-white/95 p-1 shadow-subtle backdrop-blur-md"
        onMouseLeave={() => setHoveredHref(null)}
      >
        {items.map((item) => {
          const isActive = activeHref === item.href;
          const isHovered = hoveredHref === item.href;

          return (
            <li
              key={item.href}
              role="none"
              className="relative z-10 block list-none"
              onMouseEnter={() => setHoveredHref(item.href)}
            >
              <a
                href={item.href}
                role="menuitem"
                onClick={() => {
                  setHoveredHref(null);
                  onItemClick?.(item.href);
                }}
                className={`relative block cursor-pointer select-none whitespace-nowrap rounded-full px-2.5 lg:px-2.5 xl:px-3 py-1 lg:py-1.5 text-[10px] xl:text-[11px] font-semibold uppercase tracking-wider transition-colors duration-200 ${
                  isActive
                    ? "text-white"
                    : isHovered
                    ? "text-navy-950"
                    : "text-graphite-muted hover:text-navy-950"
                }`}
              >
                {/* Active Magnetic Solid Pill */}
                {isActive && (
                  <motion.span
                    layoutId="magneticActivePill"
                    transition={{
                      type: "spring",
                      stiffness: 420,
                      damping: 30,
                    }}
                    className="absolute inset-0 rounded-full bg-navy-950 shadow-sm border border-navy-800/50 -z-10"
                  />
                )}

                {/* Subtle Hover Pill for non-active tabs */}
                {isHovered && !isActive && (
                  <motion.span
                    layoutId="magneticHoverPill"
                    transition={{
                      type: "spring",
                      stiffness: 450,
                      damping: 32,
                    }}
                    className="absolute inset-0 rounded-full bg-slate-100/90 -z-10"
                  />
                )}

                <span className="relative z-10">
                  {item.shortLabel ? (
                    <>
                      <span className="inline xl:hidden">{item.shortLabel}</span>
                      <span className="hidden xl:inline">{item.label}</span>
                    </>
                  ) : (
                    item.label
                  )}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default NavHeader;