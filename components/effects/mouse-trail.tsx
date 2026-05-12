"use client";

import { useEffect, useRef } from "react";

export const MouseTrail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const trails: Array<{
      x: number;
      y: number;
      life: number;
      size: number;
    }> = [];

    let mouseX = 0;
    let mouseY = 0;
    let animationFrame: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Add trail particle
      trails.push({
        x: mouseX,
        y: mouseY,
        life: 1,
        size: Math.random() * 15 + 5,
      });

      // Limit trail length
      if (trails.length > 20) {
        trails.shift();
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw trails
      for (let i = trails.length - 1; i >= 0; i--) {
        const trail = trails[i];

        // Draw trail with gradient
        const gradient = ctx.createRadialGradient(
          trail.x,
          trail.y,
          0,
          trail.x,
          trail.y,
          trail.size
        );

        const opacity = trail.life * 0.3;
        gradient.addColorStop(0, `rgba(255, 157, 92, ${opacity})`);
        gradient.addColorStop(0.5, `rgba(255, 138, 61, ${opacity * 0.5})`);
        gradient.addColorStop(1, "rgba(255, 138, 61, 0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(trail.x, trail.y, trail.size, 0, Math.PI * 2);
        ctx.fill();

        // Update trail
        trail.life -= 0.05;
        trail.size *= 0.95;

        // Remove dead trails
        if (trail.life <= 0) {
          trails.splice(i, 1);
        }
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[2]"
      style={{ mixBlendMode: "screen" }}
    />
  );
};
