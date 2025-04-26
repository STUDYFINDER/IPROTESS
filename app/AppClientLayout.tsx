"use client";

import React from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { CartProvider } from "./context/CartContext";
import CartDrawer from "./components/CartDrawer";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function AppClientLayout({ children }: { children: React.ReactNode }) {
  // Controla el estado del carrito (open/onClose) aquí de forma global
  const [cartOpen, setCartOpen] = React.useState(false);

  return (
    <div className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-silver`}>
      <CartProvider>
        <Navbar onCartClick={() => setCartOpen(true)} />
        <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
        {children}
        <Footer />
      </CartProvider>
    </div>
  );
}
