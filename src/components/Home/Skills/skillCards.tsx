// components/SkillCard.tsx
"use client";
import { useEffect, useRef, useState } from "react";

type SkillProps = {
  title: string;
  icon?: React.ReactNode;
};

export default function SkillCard({ title, icon }: SkillProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`
        bg-light-mode-a/80 flex flex-col items-center shadow-md rounded-2xl p-6
        transition-transform duration-300 transform
        ${visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-95"}
        hover:scale-105 hover:shadow-xl hover:-translate-y-1
      `}
    >
      <div className="mb-4 flex justify-center">{icon}</div>
      <h3 className="text-lg text-white font-semibold text-center">{title}</h3>
    </div>
  );
}
