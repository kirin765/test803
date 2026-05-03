type Project = {
  name: string;
  category: string;
  gradient: string;
  glyph: string;
};

const PROJECTS: Project[] = [
  {
    name: "Resonant",
    category: "Brand & Web",
    gradient: "from-amber-200 via-rose-300 to-rose-500",
    glyph: "R",
  },
  {
    name: "Control Tower",
    category: "Product Site",
    gradient: "from-sky-200 via-indigo-300 to-indigo-700",
    glyph: "CT",
  },
  {
    name: "Ditto",
    category: "Identity",
    gradient: "from-emerald-200 via-teal-300 to-teal-700",
    glyph: "D",
  },
  {
    name: "Hanover Park",
    category: "Marketing Site",
    gradient: "from-stone-200 via-stone-300 to-stone-600",
    glyph: "HP",
  },
  {
    name: "Superintelligent",
    category: "AI Studio",
    gradient: "from-fuchsia-200 via-violet-400 to-purple-700",
    glyph: "Si",
  },
  {
    name: "Tenacity",
    category: "Brand Sprint",
    gradient: "from-orange-200 via-red-400 to-red-700",
    glyph: "T",
  },
  {
    name: "Utility",
    category: "Web App",
    gradient: "from-lime-200 via-yellow-300 to-yellow-600",
    glyph: "U",
  },
  {
    name: "Flex",
    category: "Landing Page",
    gradient: "from-slate-200 via-zinc-400 to-zinc-800",
    glyph: "F",
  },
];

export default function ProjectGrid() {
  return (
    <section id="work" className="mx-auto max-w-[1400px] px-6 lg:px-10 mt-24 lg:mt-32">
      <div className="flex items-end justify-between mb-8">
        <h2 className="text-2xl lg:text-3xl tracking-tight font-medium">
          Selected work
        </h2>
        <a href="#" className="text-sm text-neutral-700 hover:text-neutral-900 underline underline-offset-4">
          View all
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {PROJECTS.map((p) => (
          <a
            key={p.name}
            href="#"
            className="group block"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-200">
              <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient}`} />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_50%)]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white/90 text-6xl lg:text-7xl font-medium tracking-tight drop-shadow-sm">
                  {p.glyph}
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-4 flex items-center justify-between text-white/95">
                <span className="text-sm font-medium">{p.name}</span>
                <span className="text-xs opacity-80">{p.category}</span>
              </div>
              <div className="absolute inset-0 ring-0 group-hover:ring-2 ring-neutral-900/20 transition-all rounded-2xl" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
