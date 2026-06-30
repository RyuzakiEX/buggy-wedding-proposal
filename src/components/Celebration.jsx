import { useEffect } from "react";
import confetti from "canvas-confetti";
import { CELEBRATION_TITLE, CELEBRATION_MESSAGE } from "../config.js";

const HEART_COUNT = 16;
const HEART_DELAYS = Array.from({ length: HEART_COUNT }, (_, i) => i * 0.35);
const HEART_POSITIONS = Array.from({ length: HEART_COUNT }, (_, i) => ({
  left: `${(i / HEART_COUNT) * 100}%`,
  animationDelay: `${HEART_DELAYS[i]}s`,
  fontSize: `${1.2 + (i % 4) * 0.4}rem`,
}));

export default function Celebration() {
  useEffect(() => {
    const burst = () => {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.55 },
        colors: ["#ff69b4", "#ff1493", "#ff85c2", "#fff", "#ffd700"],
      });
    };

    burst();
    const t1 = setTimeout(burst, 800);
    const t2 = setTimeout(burst, 1600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <div className="celebration-screen">
      {HEART_POSITIONS.map((style, i) => (
        <span key={i} className="floating-heart" style={style}>
          💕
        </span>
      ))}
      <div className="celebration-content">
        <div className="celebration-ring">💍</div>
        <h1 className="celebration-title">{CELEBRATION_TITLE}</h1>
        <p className="celebration-message">{CELEBRATION_MESSAGE}</p>
      </div>
    </div>
  );
}
