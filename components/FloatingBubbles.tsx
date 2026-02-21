"use client";

import React, { useEffect, useState } from "react";

export default function FloatingBubbles({ count = 20 }: { count?: number }) {
  const [bubbles, setBubbles] = useState<
    {
      id: number;
      left: string;
      size: string;
      delay: string;
      duration: string;
      opacity: number;
      type: string;
    }[]
  >([]);

  useEffect(() => {
    const types = ["star", "glow", "accent"];
    const newBubbles = Array.from({ length: count }).map((_, i) => {
      const durationNum = Math.random() * 20 + 20;
      return {
        id: i,
        left: `${Math.random() * 100}%`,
        size: `${Math.random() * 4 + 2}px`,
        delay: `-${Math.random() * durationNum}s`, // Start mid-way for immediate visibility
        duration: `${durationNum}s`,
        opacity: Math.random() * 0.5 + 0.3,
        type: types[Math.floor(Math.random() * types.length)],
      };
    });
    setBubbles(newBubbles);
  }, [count]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className={`bubble animate-bubble particle-${bubble.type}`}
          style={
            {
              left: bubble.left,
              top: "0",
              width: bubble.size,
              height: bubble.size,
              animationDelay: bubble.delay,
              "--duration": bubble.duration,
              opacity: bubble.opacity,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
