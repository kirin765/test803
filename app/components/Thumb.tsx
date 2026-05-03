type Variant =
  | "poster-green"
  | "tablet"
  | "laptop-photo"
  | "phone-dark"
  | "monitor-code"
  | "laptop-grass"
  | "print"
  | "imac";

type ThumbProps = {
  className?: string;
  variant: Variant;
};

export default function Thumb({ className = "", variant }: ThumbProps) {
  return (
    <div className={`absolute ${className}`}>
      <div
        className="relative size-full overflow-hidden rounded-full shadow-[0_30px_60px_-25px_rgba(0,0,0,0.25)] ring-1 ring-black/[0.04] transition-transform duration-200 ease-out"
        style={{ transform: "rotate(calc(var(--rot, 0deg) * -1))" }}
      >
        {variant === "poster-green" && <PosterGreen />}
        {variant === "tablet" && <Tablet />}
        {variant === "laptop-photo" && <LaptopPhoto />}
        {variant === "phone-dark" && <PhoneDark />}
        {variant === "monitor-code" && <MonitorCode />}
        {variant === "laptop-grass" && <LaptopGrass />}
        {variant === "print" && <Print />}
        {variant === "imac" && <Imac />}
      </div>
    </div>
  );
}

function PosterGreen() {
  return (
    <div className="size-full bg-[#a8c66c] relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.4),transparent_60%)]" />
      <div className="absolute inset-0 flex items-center p-4">
        <span className="text-white/95 text-3xl font-semibold tracking-tight italic">
          Flux
        </span>
      </div>
      <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
        <div className="size-6 rounded-full bg-white/40" />
        <div className="size-4 rounded-full bg-white/60" />
      </div>
    </div>
  );
}

function Tablet() {
  return (
    <div className="size-full bg-[#e9e2d6] relative flex items-center justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(255,255,255,0.6),transparent_70%)]" />
      <div className="relative w-[68%] h-[78%] rounded-md bg-white shadow-md p-2">
        <div className="h-1.5 w-8 bg-neutral-300 rounded mb-1.5" />
        <div className="h-1 w-12 bg-neutral-200 rounded mb-2" />
        <div className="h-1 w-10 bg-neutral-200 rounded mb-1" />
        <div className="h-1 w-9 bg-neutral-200 rounded" />
      </div>
    </div>
  );
}

function LaptopPhoto() {
  return (
    <div className="size-full bg-gradient-to-br from-stone-200 to-stone-400 relative flex items-end justify-center pb-2">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_40%,rgba(0,0,0,0.08))]" />
      <div className="relative w-[82%]">
        <div className="aspect-[16/10] rounded-md bg-gradient-to-br from-amber-200 via-rose-300 to-rose-500 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_60%,rgba(0,0,0,0.35),transparent_60%)]" />
        </div>
        <div className="h-1 mt-0.5 mx-[-6%] rounded-b-lg bg-neutral-700" />
      </div>
    </div>
  );
}

function PhoneDark() {
  return (
    <div className="size-full bg-[#c79a6e] relative flex items-center justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_30%,rgba(255,255,255,0.35),transparent_60%)]" />
      <div className="relative w-[36%] h-[68%] rounded-2xl bg-neutral-900 rotate-[18deg] p-1.5 shadow-xl">
        <div className="size-full rounded-xl bg-gradient-to-br from-emerald-900 to-neutral-900 p-1.5">
          <div className="h-1 w-6 bg-emerald-400/50 rounded mb-1" />
          <div className="h-0.5 w-8 bg-emerald-400/30 rounded" />
        </div>
      </div>
    </div>
  );
}

function MonitorCode() {
  return (
    <div className="size-full bg-[#d8cfc1] relative flex items-center justify-center p-3">
      <div className="relative w-full h-[78%] rounded-md bg-neutral-900 p-2 overflow-hidden">
        <div className="space-y-0.5">
          <div className="h-1 w-1/3 bg-violet-400/70 rounded" />
          <div className="h-1 w-1/2 bg-emerald-400/70 rounded" />
          <div className="h-1 w-2/5 bg-sky-400/70 rounded" />
          <div className="h-1 w-3/5 bg-rose-400/60 rounded" />
          <div className="h-1 w-1/4 bg-amber-400/60 rounded" />
        </div>
      </div>
    </div>
  );
}

function LaptopGrass() {
  return (
    <div className="size-full bg-gradient-to-b from-sky-300 via-sky-200 to-emerald-400 relative flex items-center justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(255,255,255,0.5),transparent_60%)]" />
      <div className="relative w-[70%] -rotate-6">
        <div className="aspect-[16/10] rounded-md bg-white shadow-xl p-1.5">
          <div className="h-1 w-8 bg-neutral-200 rounded mb-1" />
          <div className="h-2 w-full rounded bg-gradient-to-r from-rose-200 to-violet-300" />
        </div>
        <div className="h-1 mt-0.5 mx-[-6%] rounded-b-lg bg-neutral-300" />
      </div>
    </div>
  );
}

function Print() {
  return (
    <div className="size-full bg-[#f0ece4] relative flex items-center justify-center">
      <div className="relative w-[70%] h-[80%] bg-white shadow-md p-3 rounded-sm">
        <div className="h-1.5 w-10 bg-neutral-900 rounded mb-1" />
        <div className="h-1 w-14 bg-neutral-300 rounded mb-2" />
        <div className="space-y-0.5">
          <div className="h-0.5 w-full bg-neutral-200 rounded" />
          <div className="h-0.5 w-5/6 bg-neutral-200 rounded" />
          <div className="h-0.5 w-4/6 bg-neutral-200 rounded" />
        </div>
        <div className="absolute bottom-3 left-3 size-2.5 rounded-full bg-lime-400" />
        <div className="absolute bottom-3 right-3 h-1 w-6 bg-neutral-900 rounded" />
      </div>
    </div>
  );
}

function Imac() {
  return (
    <div className="size-full bg-[#ece6da] relative flex items-center justify-center p-3">
      <div className="relative w-full">
        <div className="aspect-[16/10] rounded-md bg-white shadow-md p-2 overflow-hidden">
          <div className="h-1 w-10 bg-neutral-300 rounded mb-1.5" />
          <div className="flex gap-1">
            <div className="flex-1 space-y-1">
              <div className="h-1 w-full bg-neutral-200 rounded" />
              <div className="h-1 w-4/5 bg-neutral-200 rounded" />
            </div>
            <div className="w-6 h-4 rounded bg-emerald-300" />
          </div>
        </div>
        <div className="h-1.5 w-3 mx-auto bg-neutral-300 rounded-b" />
        <div className="h-0.5 w-10 mx-auto bg-neutral-300 rounded mt-px" />
      </div>
    </div>
  );
}
