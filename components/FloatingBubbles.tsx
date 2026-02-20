"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function FloatingBubbles({ count = 20 }: { count?: number }) {
  const [bubbles, setBubbles] = useState<
    {
      id: number;
      left: string;
      size: string;
      delay: string;
      duration: string;
      opacity: number;
    }[]
  >([]);

  useEffect(() => {
    const newBubbles = Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 12 + 2}px`, // Range from 2px to 14px
      delay: `${Math.random() * 15}s`,
      duration: `${Math.random() * 10 + 10}s`,
      opacity: Math.random() * 0.4 + 0.4, // Higher opacity range (0.4 to 0.8)
    }));
    setBubbles(newBubbles);
  }, [count]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="bubble animate-bubble"
          style={{
            left: bubble.left,
            width: bubble.size,
            height: bubble.size,
            animationDelay: bubble.delay,
            animationDuration: bubble.duration,
            opacity: bubble.opacity,
            bottom: "-20px",
          }}
        />
      ))}
    </div>
  );
}
