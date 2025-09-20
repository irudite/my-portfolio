"use client";
import { useEffect, useState } from "react";

const CursorHighlight = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-50 w-58 h-58 rounded-full bg-cyan-400/20 blur-3xl"
      style={{
        transform: `translate(${position.x - 96}px, ${position.y - 96}px)`,
      }}
    />
  );
};

export default CursorHighlight;

