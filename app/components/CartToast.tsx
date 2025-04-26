"use client";
import React, { useEffect } from "react";

export default function CartToast({ message, show, onHide }: { message: string; show: boolean; onHide: () => void }) {
  useEffect(() => {
    if (show) {
      const t = setTimeout(onHide, 1300);
      return () => clearTimeout(t);
    }
  }, [show, onHide]);

  return (
    <div
      style={{
        position: "fixed",
        top: 24,
        right: show ? 24 : -400,
        background: "#111",
        color: "#fff",
        borderRadius: 12,
        padding: "1rem 2rem",
        fontWeight: 700,
        fontSize: 18,
        boxShadow: "0 6px 32px rgba(0,0,0,0.18)",
        zIndex: 2000,
        opacity: show ? 1 : 0,
        pointerEvents: "none",
        transition: "right 0.5s cubic-bezier(.77,0,.18,1), opacity 0.3s"
      }}
      aria-live="polite"
    >
      {message}
    </div>
  );
}
