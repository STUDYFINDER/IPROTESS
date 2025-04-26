"use client";
import React from "react";
import CartToast from "./CartToast";

export default function GlobalCartToast() {
  const [show, setShow] = React.useState(false);
  const [msg, setMsg] = React.useState("");
  React.useEffect(() => {
    const handler = (e: CustomEvent) => {
      setMsg(`Añadido al carrito: ${e.detail?.name ?? ''}`);
      setShow(true);
    };
    window.addEventListener("cart-toast", handler as EventListener);
    return () => window.removeEventListener("cart-toast", handler as EventListener);
  }, []);
  return <CartToast message={msg} show={show} onHide={() => setShow(false)} />;
}
