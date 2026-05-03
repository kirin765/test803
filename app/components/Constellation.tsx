"use client";

import { useEffect, useRef, type ReactNode } from "react";

export default function Constellation({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rotation = 0;

    const apply = () => {
      if (!ref.current) return;
      ref.current.style.transform = `rotate(${rotation}deg)`;
      ref.current.style.setProperty("--rot", `${rotation}deg`);
    };

    const onWheel = (e: WheelEvent) => {
      try {
        if (e.cancelable) e.preventDefault();
      } catch {}
      rotation += e.deltaY * 0.25;
      apply();
    };

    apply();
    document.addEventListener("wheel", onWheel, { passive: false });
    return () => document.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <div
      ref={ref}
      data-constellation
      className="absolute inset-0 will-change-transform transition-transform duration-200 ease-out"
      style={{ transformOrigin: "50% 50%" }}
    >
      {children}
    </div>
  );
}
