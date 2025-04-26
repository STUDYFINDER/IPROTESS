"use client";
import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import CartDrawer from "./CartDrawer";

// Permite pasar onClick desde Navbar para controlar el Drawer globalmente
export default function CartButton({ onClick }: { onClick?: () => void }) {
  const { items } = useCart();
  const [open, setOpen] = useState(false);
  const totalQty = items.reduce((sum, i) => sum + i.quantity, 0);
  return (
    <>
      <button
        onClick={onClick ? onClick : () => setOpen(true)}
        style={{
          position: "relative",
          background: "none",
          border: "none",
          cursor: "pointer",
          marginLeft: 16,
          fontSize: 26,
          color: "#fff"
        }}
        aria-label="Cart"
      >
        <span style={{ fontSize: 26 }}>🛒</span>
        {totalQty > 0 && (
          <span style={{
            position: "absolute", top: -6, right: -6, background: "#f0c040", color: "#111", borderRadius: "50%", padding: "2px 7px", fontSize: 14, fontWeight: 700
          }}>{totalQty}</span>
        )}
      </button>
      {/* Solo renderiza el Drawer local si no hay onClick global */}
      {!onClick && <CartDrawer open={open} onClose={() => setOpen(false)} />}
    </>
  );
}
