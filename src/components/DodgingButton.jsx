import { useState, useRef, useCallback } from "react";

export default function DodgingButton() {
  const [pos, setPos] = useState(null); // null = not yet activated (natural flow position)
  const btnRef = useRef(null);

  const move = useCallback((e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    const btn = btnRef.current;
    if (!btn) return;

    const btnW = btn.offsetWidth || 120;
    const btnH = btn.offsetHeight || 48;
    const margin = 16;

    const maxX = window.innerWidth - btnW - margin;
    const maxY = window.innerHeight - btnH - margin;

    const newLeft = Math.floor(Math.random() * (maxX - margin) + margin);
    const newTop = Math.floor(Math.random() * (maxY - margin) + margin);

    setPos({ top: newTop, left: newLeft });
  }, []);

  const style = pos
    ? {
        position: "fixed",
        top: pos.top,
        left: pos.left,
        transition: "top 0.18s ease, left 0.18s ease",
        zIndex: 1000,
      }
    : {};

  return (
    <button
      ref={btnRef}
      className="btn btn-no"
      style={style}
      onMouseEnter={move}
      onMouseOver={move}
      onClick={move}
      onTouchStart={move}
    >
      No 🙅
    </button>
  );
}
