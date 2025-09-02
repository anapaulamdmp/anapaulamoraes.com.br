// src/components/EyeCursor.tsx
"use client";
import { useEffect } from "react";

export default function EyeCursor() {
  useEffect(() => {
    const eyes = document.createElement("div");
    eyes.textContent = "✨";
    eyes.style.position = "fixed";
    eyes.style.pointerEvents = "none";
    eyes.style.fontSize = "24px";
    eyes.style.transform = "translate(-50%, -50%)";
    eyes.style.zIndex = "9999";
    document.body.appendChild(eyes);

    const move = (e: MouseEvent) => {
      eyes.style.left = `${e.clientX + 32}px`; // offset 16px to the right
      eyes.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
      document.body.removeChild(eyes);
    };
  }, []);

  return null;
}
