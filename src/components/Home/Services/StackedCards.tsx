"use client";
import React, { useEffect, useState } from "react";
import styles from "./StackedCards.module.css";

// Strongly typed card data
type Card = {
  id: number;
  title: string;
  color: string; // tailwind-like or plain CSS gradient string
};

const CARDS: Card[] = [
  { id: 1, title: "Interaction Design", color: "linear-gradient(135deg,#fca5a5,#ef4444)" },
  { id: 2, title: "Frontend Development", color: "linear-gradient(135deg,#a7f3d0,#10b981)" },
  { id: 3, title: "Performance", color: "linear-gradient(135deg,#fef08a,#f59e0b)" },
  { id: 4, title: "Accessibility", color: "linear-gradient(135deg,#bfdbfe,#3b82f6)" },
  { id: 5, title: "UX Research", color: "linear-gradient(135deg,#ddd6fe,#8b5cf6)" },
];


export default function StackedCards() {
  // `order` describes visual stacking: index 0 = front, larger index = further back
  const [order, setOrder] = useState<number[]>(() => CARDS.map((c) => c.id));
  const [pressedId, setPressedId] = useState<number | null>(null);
  const [animating, setAnimating] = useState(false);

  const ANIM_DUR = 480; // ms

  // Click handler: trigger the "press" animation, then move clicked to front
  function onCardClick(id: number) {
    if (animating || order[0] === id) return; // ignore if already front or animating

    setPressedId(id);
    setAnimating(true);

    // After animation: move clicked card to front (index 0)
    setTimeout(() => {
      setOrder((prev) => [id, ...prev.filter((x) => x !== id)]);
      setPressedId(null);
      setAnimating(false);
    }, ANIM_DUR);
  }

  return (
    <section
      aria-labelledby="stacked-title"
      className={styles.section}
    >
      <h2 id="stacked-title" className={styles.heading}>
        Stacked Cards
      </h2>

      <div className={styles.viewport}>
        <div className={styles.stack}>
          {CARDS.map((card) => {
            // depth: 0 = front, larger = further back
            const depth = order.indexOf(card.id);
            // base spacing / scale per depth
            const baseY = depth * 18; // pixels downward for each depth
            const baseScale = 1 - depth * 0.03;
            const baseX = depth * 8; // small horizontal offset for depth look

            // animation adjustments during the press phase
            let extraY = 0;
            if (animating && pressedId !== null) {
              const pressedDepth = order.indexOf(pressedId);
              if (card.id === pressedId) {
                extraY = -22; // clicked card pops up
              } else if (depth < pressedDepth) {
                // cards that are "in front" of the clicked card move down
                extraY = 10;
              }
            }

            const translateY = baseY + extraY;
            const scale = baseScale;

            const zIndex = 2000 - depth; // frontmost has highest z

            return (
              <article
                key={card.id}
                role="button"
                aria-pressed={order[0] === card.id}
                tabIndex={0}
                className={styles.card}
                onClick={() => onCardClick(card.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onCardClick(card.id);
                  }
                }}
                style={{
                  transform: `translateY(${translateY}px) translateX(${baseX}px) scale(${scale})`,
                  zIndex,
                  background: card.color,
                }}
              >
                <h3 className={styles.cardTitle}>{card.title}</h3>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
