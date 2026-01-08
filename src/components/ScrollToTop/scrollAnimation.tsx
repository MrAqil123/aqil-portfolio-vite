"use client";

import { useEffect, useRef, useState } from "react";

type SkillProps = {
  title: string;
  value: number;
  icon: React.ReactNode;
};

export default function SkillCard({ title, value, icon }: SkillProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`
        bg-zinc-900 border border-zinc-800 rounded-2xl p-6
        transition-transform duration-500
        hover:scale-105 hover:shadow-xl hover:shadow-blue-500/50
      `}
    >
      <div className="text-5xl mb-4 text-blue-500">{icon}</div>
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      <div className="w-full bg-zinc-800 rounded-full h-3 overflow-hidden">
        <div
          className="bg-blue-500 h-3 rounded-full transition-all duration-1000"
          style={{ width: visible ? `${value}%` : "0%" }}
        />
      </div>
      <span className="text-sm text-zinc-400 mt-2 inline-block">{value}%</span>
    </div>
  );
}
