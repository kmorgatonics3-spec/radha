import React, { useEffect, useState } from "react";

const target = (() => {
  const d = new Date();
  d.setDate(d.getDate() + 7);
  d.setHours(23, 59, 59, 0);
  return d;
})();

const pad = (n) => String(n).padStart(2, "0");

const CountdownTimer = () => {
  const [tl, setTl] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, target.getTime() - Date.now());
      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diff / (1000 * 60)) % 60);
      const s = Math.floor((diff / 1000) % 60);
      setTl({ d, h, m, s });
    };
    tick();
    const i = setInterval(tick, 1000);
    return () => clearInterval(i);
  }, []);

  const blocks = [
    { v: pad(tl.d), l: "Days" },
    { v: pad(tl.h), l: "Hours" },
    { v: pad(tl.m), l: "Mins" },
    { v: pad(tl.s), l: "Secs" },
  ];

  return (
    <div
      className="flex items-center justify-center gap-2 sm:gap-3"
      data-testid="countdown-timer"
    >
      {blocks.map((b, i) => (
        <div key={i} className="flex flex-col items-center">
          <span className="tick-num">{b.v}</span>
          <span className="text-[10px] tracking-[0.25em] uppercase text-[var(--rm-mute)] mt-2">
            {b.l}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
