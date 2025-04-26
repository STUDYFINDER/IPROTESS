"use client";
import React, { useState } from "react";
import { useCart } from "../context/CartContext";

interface Props {
  id: number;
  name: string;
  price: number;
  image: string;
}

export default function AddToCartButton({ id, name, price, image }: Props) {
  const { addItem, openCart } = useCart();
  const [added, setAdded] = useState(false);
  // El toast se mueve al layout global para evitar problemas de stacking/contexto

  const handleAdd = () => {
    addItem({ id, name, price, image });
    setAdded(true);
    setTimeout(() => setAdded(false), 1000);
    if (typeof window !== 'undefined' && window.dispatchEvent) {
      window.dispatchEvent(new CustomEvent("cart-toast", { detail: { name } }));
    }
    openCart();
  };

  return (
    <button
      className="add-to-cart-btn"
      onClick={handleAdd}
      style={{ marginTop: 16 }}
      disabled={added}
    >
      {added ? "Añadido" : "Add to Cart"}
    </button>
  );
}
