"use client";
import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import Link from "next/link";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Image from "next/image";
import { Roboto } from "next/font/google";

const robotoItalic = Roboto({ weight: "400", style: "italic", subsets: ["latin"] });
const stepLabels = ["Método de pago", "Procesando", "¡Completado!"];

export default function CheckoutPage() {
  const { items, total } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const [step, setStep] = useState<"select"|"paying"|"success">("select");
  const [error, setError] = useState<string>("");

  // Stripe checkout
  const handleStripePay = async () => {
    setStep("paying");
    setError("");
    try {
      const res = await fetch("/api/checkout_sessions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setStep("select");
        setError(data.error || "Error iniciando pago con Stripe");
      }
    } catch {
      setStep("select");
      setError("Error de red con Stripe");
    }
  };

  // Bizum: aquí solo mostramos instrucciones, la integración real requiere Redsys/TPV
  const handleBizumPay = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("paying");
    setTimeout(() => setStep("success"), 2000);
  };

  // Paso visual
  const stepIndex = step === "select" ? 0 : step === "paying" ? 1 : 2;

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2>Resumen de tu pedido</h2>
      {/* Aquí puedes mostrar el resumen del carrito si quieres */}
      <button
        style={{
          padding: "1rem 2rem",
          background: "#ccc",
          color: "#222",
          border: "none",
          borderRadius: "8px",
          fontSize: "1.2rem",
          marginTop: "2rem"
        }}
        disabled
      >
        Pago no disponible todavía
      </button>
    </div>
  );
}
