import Header from "./components/Header";
import Assistant from "./components/Assistant";
import ProjectGrid from "./components/ProjectGrid";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex-1">
        <section className="mx-auto max-w-[1400px] px-6 lg:px-10 pt-16 lg:pt-24 pb-12">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-white border border-neutral-900/5 px-3 py-1.5 text-xs text-neutral-700">
                <span className="inline-block size-1.5 rounded-full bg-emerald-500" />
                Now booking projects for Q3
              </div>
              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl tracking-[-0.02em] leading-[1.02] font-medium">
                An AI-native studio
                <br className="hidden sm:block" /> building brands and web
                experiences for high-growth startups.
              </h1>
              <p className="mt-6 max-w-xl text-base lg:text-lg text-neutral-600">
                A small team of designers and engineers paired with AI tooling
                to ship identity systems and production sites in weeks, not
                quarters.
              </p>
              <div className="mt-8 flex items-center gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white px-5 py-2.5 text-sm hover:bg-neutral-700 transition-colors"
                >
                  Book a call
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                    <path d="M3 9L9 3M9 3H4M9 3V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 rounded-full border border-neutral-900/15 px-5 py-2.5 text-sm text-neutral-800 hover:bg-neutral-900/5 transition-colors"
                >
                  See the work
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 lg:pt-2">
              <Assistant />
            </div>
          </div>
        </section>

        <ProjectGrid />

        <section id="services" className="mx-auto max-w-[1400px] px-6 lg:px-10 mt-24 lg:mt-32">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-2xl lg:text-3xl tracking-tight font-medium">
              Services
            </h2>
            <a href="#" className="text-sm text-neutral-700 hover:text-neutral-900 underline underline-offset-4">
              See pricing
            </a>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {[
              {
                title: "Brand sprint",
                copy: "Positioning, identity, and a runnable visual system in four weeks.",
              },
              {
                title: "Marketing site",
                copy: "Strategy, design, copy, and a production codebase you own.",
              },
              {
                title: "Product surface",
                copy: "Onboarding, dashboards, and the first eighty percent of your product UI.",
              },
            ].map((s) => (
              <div
                key={s.title}
                className="rounded-2xl bg-white border border-neutral-900/5 p-6"
              >
                <h3 className="text-lg font-medium tracking-tight">{s.title}</h3>
                <p className="mt-2 text-neutral-600 text-sm leading-relaxed">{s.copy}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
