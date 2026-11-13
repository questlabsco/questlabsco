import { toolLogos, type ToolLogo } from "@/lib/data/logos";

// The tools we build on, as a strip that slides sideways on its own. The
// list is drawn twice so the loop is seamless; the second copy is hidden
// from screen readers. Hovering pauses it. Logos are Simple Icons paths
// drawn inline in navy; tools without a logo get a name-only chip.

function Chip({ tool }: { tool: ToolLogo }) {
  return (
    <span className="chip gap-2.5 whitespace-nowrap px-4 py-2 text-[15px] shadow-[2px_2px_0_0_#D5DCF7] transition-transform duration-200 hover:-translate-y-0.5">
      {tool.path && (
        <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden="true" focusable="false">
          <path d={tool.path} fill="#1B1D4E" />
        </svg>
      )}
      {tool.name}
    </span>
  );
}

function ToolList({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      className="flex shrink-0 items-center"
      aria-label={hidden ? undefined : "Tools we build on"}
      aria-hidden={hidden || undefined}
    >
      {toolLogos.map((tool) => (
        <li key={tool.name} className="mr-3">
          <Chip tool={tool} />
        </li>
      ))}
    </ul>
  );
}

export default function ToolLogos() {
  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_7%,black_93%,transparent)]">
      <div
        className="flex w-max animate-marquee py-1.5 hover:[animation-play-state:paused]"
        style={{ animationDuration: "80s" }}
      >
        <ToolList />
        <ToolList hidden />
      </div>
    </div>
  );
}
