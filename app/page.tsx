import Thumb from "./components/Thumb";
import Constellation from "./components/Constellation";

export default function Home() {
  return (
    <div className="relative w-screen h-screen bg-white overflow-hidden">
      <header className="absolute top-6 left-6 lg:top-9 lg:left-10 z-20">
        <a href="/" className="font-serif text-3xl tracking-tight leading-none text-neutral-900">
          O<span className="text-neutral-400">/</span>M
        </a>
      </header>

      <div className="absolute top-6 right-6 lg:top-9 lg:right-10 z-20 flex items-center gap-4">
        <span className="inline-block size-2.5 rounded-full bg-neutral-900" />
        <button
          type="button"
          aria-label="Open menu"
          className="grid grid-cols-3 gap-[3px] p-1 rounded hover:bg-neutral-100 transition-colors"
        >
          {Array.from({ length: 9 }).map((_, i) => (
            <span key={i} className="size-1 rounded-full bg-neutral-900" />
          ))}
        </button>
      </div>

      <main className="absolute inset-0 flex items-center justify-center px-6 z-10 pointer-events-none">
        <p className="text-center text-[15px] lg:text-base leading-relaxed max-w-[28rem] text-neutral-900">
          AI-native studio crafting brand systems and web experiences for
          ambitious startups.
        </p>
      </main>

      <Constellation>
        <Thumb variant="poster-green" className="top-[12%] left-[34%] size-[140px] lg:size-[170px] float-a" />
        <Thumb variant="tablet" className="top-[8%] left-[50%] size-[120px] lg:size-[150px] float-b" />
        <Thumb variant="laptop-photo" className="top-[28%] left-[18%] size-[200px] lg:size-[260px] float-c" />
        <Thumb variant="phone-dark" className="top-[30%] left-[63%] size-[150px] lg:size-[190px] float-d" />
        <Thumb variant="monitor-code" className="top-[63%] left-[28%] size-[150px] lg:size-[180px] float-b" />
        <Thumb variant="laptop-grass" className="top-[58%] left-[60%] size-[170px] lg:size-[210px] float-a" />
        <Thumb variant="print" className="bottom-[8%] left-[42%] size-[150px] lg:size-[180px] float-d" />
        <Thumb variant="imac" className="bottom-[6%] left-[58%] size-[160px] lg:size-[200px] float-c" />

        <span className="absolute top-[28%] left-[57%] size-1.5 rounded-full bg-neutral-900" />
        <span className="absolute top-[44%] left-[28%] size-1 rounded-full bg-neutral-900" />
      </Constellation>

      <a
        href="#contact"
        className="absolute bottom-6 left-6 lg:bottom-8 lg:left-10 z-20 inline-flex items-center gap-3 rounded-full bg-neutral-900 text-white pl-2 pr-5 py-2 hover:bg-neutral-700 transition-colors"
      >
        <DotPattern dark />
        <span className="text-sm">Let&apos;s work together</span>
      </a>

      <div className="absolute bottom-6 right-6 lg:bottom-8 lg:right-10 z-20 flex items-center gap-3">
        <span className="inline-block size-2 rounded-full bg-neutral-900" />
        <DotPattern />
      </div>
    </div>
  );
}

function DotPattern({ dark = false }: { dark?: boolean }) {
  const color = dark ? "bg-white/90" : "bg-neutral-900";
  return (
    <span
      className={`relative inline-block size-7 rounded-full ${
        dark ? "bg-white/10" : "bg-neutral-100"
      } spin-slow`}
      aria-hidden
    >
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * 360) / 8;
        return (
          <span
            key={i}
            className={`absolute top-1/2 left-1/2 size-1 rounded-full ${color}`}
            style={{
              transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-9px)`,
            }}
          />
        );
      })}
    </span>
  );
}
