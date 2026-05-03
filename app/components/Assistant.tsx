"use client";

import { useState } from "react";

type Reply = {
  question: string;
  answer: string;
};

const REPLIES: Reply[] = [
  {
    question: "Where should I start?",
    answer:
      "Tell me what you're building and where you're stuck. Most teams come to us for a brand sprint, a marketing site, or a product surface that needs to ship next month.",
  },
  {
    question: "What do you do?",
    answer:
      "We design brand identities and ship production websites. Strategy, visual system, copy, and the codebase — handled in one engagement, on a fixed timeline.",
  },
  {
    question: "I have a project.",
    answer:
      "Great. Drop a few sentences on goals, timeline, and budget. I'll route it to the right team and get back within a working day.",
  },
];

export default function Assistant() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="rounded-3xl bg-white border border-neutral-900/5 shadow-[0_1px_0_rgba(0,0,0,0.02),0_30px_60px_-20px_rgba(0,0,0,0.15)] overflow-hidden">
      <div className="flex items-center gap-3 px-5 py-4 border-b border-neutral-900/5">
        <div className="relative">
          <span className="inline-flex size-8 rounded-full bg-gradient-to-br from-amber-400 via-rose-400 to-violet-500" />
          <span className="absolute -bottom-0.5 -right-0.5 size-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
        </div>
        <div>
          <p className="text-sm font-medium leading-none">Remi</p>
          <p className="text-xs text-neutral-500 mt-1">Studio assistant · online</p>
        </div>
      </div>

      <div className="p-5 space-y-3">
        <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-neutral-100 px-4 py-3 text-sm text-neutral-800 animate-fade-up">
          Hi, I'm Remi. I'll point you to the right person on the studio. What can I help with?
        </div>

        {active !== null && (
          <>
            <div className="flex justify-end animate-fade-up">
              <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-neutral-900 text-white px-4 py-3 text-sm">
                {REPLIES[active].question}
              </div>
            </div>
            <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-neutral-100 px-4 py-3 text-sm text-neutral-800 animate-fade-up">
              {REPLIES[active].answer}
            </div>
          </>
        )}
      </div>

      <div className="px-5 pb-5 flex flex-wrap gap-2">
        {REPLIES.map((r, i) => (
          <button
            key={r.question}
            onClick={() => setActive(i)}
            className={`text-sm px-3.5 py-2 rounded-full border transition-colors ${
              active === i
                ? "bg-neutral-900 text-white border-neutral-900"
                : "bg-white text-neutral-800 border-neutral-200 hover:border-neutral-400"
            }`}
          >
            {r.question}
          </button>
        ))}
      </div>
    </div>
  );
}
