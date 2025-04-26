// --- LUXURY AMAZON-STYLE CART DRAWER ---
"use client";
import React from "react";
import { useCart } from "../context/CartContext";
import type { CartItem } from "../context/CartContext";
import Image from "next/image";
import { FaTrashAlt, FaMinus, FaPlus } from "react-icons/fa";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

export default function CartDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { items, removeItem, clear, addItem } = useCart();
  const [showLogin, setShowLogin] = React.useState(false);
  const [showRegister, setShowRegister] = React.useState(false);
  const decreaseQty = (item: CartItem) => {
    if (item.quantity > 1) {
      addItem({ ...item, quantity: -1 });
    } else {
      removeItem(item.id);
    }
  };
  const increaseQty = (item: CartItem) => {
    addItem({ ...item, quantity: 1 });
  };
  // Calcular subtotal e IVA (21% ejemplo)
  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const iva = Math.round(subtotal * 0.21 * 100) / 100;
  const totalConIva = Math.round((subtotal + iva) * 100) / 100;
  return (
    <div style={{
      position: "fixed", top: 0, right: open ? 0 : "-100%", width: 420, height: "100vh", background: "#fff", boxShadow: "-8px 0 32px rgba(0,0,0,0.18)", zIndex: 1000, transition: "right 0.3s cubic-bezier(.77,0,.18,1)", padding: 0, display: "flex", flexDirection: "column", borderLeft: "4px solid gold"
    }}>
      <div style={{padding: 32, borderBottom: '1px solid #eee', background: 'linear-gradient(90deg,#fff,#f8f8f8 60%,#f4e2d8 100%)', boxShadow: '0 2px 8px #eee8', display:'flex', alignItems:'flex-start', gap:24}}>
        <button onClick={onClose} style={{ alignSelf: "flex-end", fontSize: 32, background: "none", border: "none", cursor: "pointer", color: '#222', float: 'right' }}>&times;</button>
        <h2 style={{ fontWeight: 900, fontSize: 27, margin: "0 0 10px", color: '#111', letterSpacing: 0.5, flex:1 }}>Tu carrito</h2>
        <button
          onClick={() => setShowLogin(v => !v)}
          style={{ background: '#fff', color: '#bfa14a', border: '2px solid #bfa14a', borderRadius: 10, padding: '8px 18px', fontWeight: 700, fontSize: 15, cursor: 'pointer', boxShadow: '0 1px 6px #e0cba744', transition: 'background 0.2s', marginRight:8 }}
        >
          Iniciar sesión
        </button>
      </div>
      {showLogin && !showRegister && (
        <div style={{padding:'0 32px 0 32px', background:'#fff', borderBottom:'1px solid #f4e2d8'}}>
          <LoginForm onSuccess={() => setShowLogin(false)} onShowRegister={() => { setShowRegister(true); }} />
        </div>
      )}
      {showRegister && (
        <div style={{padding:'0 32px 0 32px', background:'#fff', borderBottom:'1px solid #f4e2d8'}}>
          <RegisterForm onSuccess={() => { setShowRegister(false); setShowLogin(false); }} />
          <div style={{textAlign:'center', margin:'12px 0 0'}}>
            <span style={{color:'#888', fontSize:14}}>¿Ya tienes cuenta? </span>
            <span onClick={() => { setShowRegister(false); setShowLogin(true); }} style={{ color: '#bfa14a', fontWeight: 700, textDecoration: 'underline', cursor: 'pointer' }}>Iniciar sesión</span>
          </div>
        </div>
      )}
      <div style={{flex: 1, overflowY: 'auto', padding: '24px 32px 0'}}>
        {items.length === 0 ? (
          <p style={{ color: "#aaa", textAlign: "center", marginTop: 40, fontSize: 18 }}>Tu carrito está vacío.</p>
        ) : (
          items.map(item => (
            <div key={item.id} style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 28, background: '#faf9f6', borderRadius: 14, boxShadow: '0 2px 12px #f4e2d844', padding: 14, border: '1px solid #f4e2d8' }}>
              <Image src={item.image} alt={item.name} width={75} height={75} style={{ borderRadius: 10, background: "#eee", boxShadow: '0 2px 8px #e0cba744' }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: 17, color: '#1a1a1a', marginBottom: 2 }}>{item.name}</div>
                <div style={{ fontSize: 13, color: "#bfa14a", marginBottom: 4 }}>ID: {item.id}</div>
                <div style={{ fontSize: 14, color: "#888", display: "flex", alignItems: "center", gap: 10 }}>
                  <button onClick={() => decreaseQty(item)} style={{ border: 'none', background: '#f4e2d8', borderRadius: 6, width: 28, height: 28, fontWeight: 700, fontSize: 18, cursor: 'pointer', color: '#bfa14a', boxShadow: '0 1px 4px #e0cba744' }}><FaMinus/></button>
                  <span style={{ minWidth: 24, textAlign: 'center', display: 'inline-block', fontWeight: 600, fontSize: 16 }}>{item.quantity}</span>
                  <button onClick={() => increaseQty(item)} style={{ border: 'none', background: '#f4e2d8', borderRadius: 6, width: 28, height: 28, fontWeight: 700, fontSize: 18, cursor: 'pointer', color: '#bfa14a', boxShadow: '0 1px 4px #e0cba744' }}><FaPlus/></button>
                </div>
                <div style={{ fontWeight: 600, fontSize: 16, color: '#222', marginTop: 2 }}>Subtotal: <span style={{color:'#bfa14a'}}>{(item.price * item.quantity).toLocaleString('es-ES', {style:'currency',currency:'EUR'})}</span></div>
              </div>
              <button onClick={() => removeItem(item.id)} style={{ background: "none", border: "none", color: "#bfa14a", fontSize: 22, cursor: "pointer" }} title="Eliminar"><FaTrashAlt/></button>
            </div>
          ))
        )}
      </div>
      {/* Sticky summary y acciones */}
      <div style={{position:'sticky', bottom:0, background:'#fff', boxShadow:'0 -2px 16px #f4e2d822', padding:'24px 32px', borderTop:'2px solid #f4e2d8'}}>
        <div style={{display:'flex', justifyContent:'space-between', fontWeight:600, fontSize:16, marginBottom:6}}>
          <span>Subtotal</span>
          <span>{subtotal.toLocaleString('es-ES', {style:'currency',currency:'EUR'})}</span>
        </div>
        <div style={{display:'flex', justifyContent:'space-between', fontSize:15, color:'#bfa14a', marginBottom:6}}>
          <span>IVA (21%)</span>
          <span>{iva.toLocaleString('es-ES', {style:'currency',currency:'EUR'})}</span>
        </div>
        <div style={{display:'flex', justifyContent:'space-between', fontWeight:900, fontSize:20, margin:'8px 0 18px', color:'#111'}}>
          <span>Total</span>
          <span>{totalConIva.toLocaleString('es-ES', {style:'currency',currency:'EUR'})}</span>
        </div>
        <div style={{ display: 'flex', gap: 14 }}>
          <button onClick={clear} style={{ flex: 1, background: '#fff', color: '#bfa14a', border: '2px solid #bfa14a', borderRadius: 10, padding: '12px 0', fontWeight: 700, cursor: 'pointer', fontSize: 15, boxShadow: '0 1px 6px #e0cba744', transition: 'background 0.2s' }}>Vaciar</button>
          <a href="/checkout" style={{ flex: 2, background: 'linear-gradient(90deg,#bfa14a,#f4e2d8 100%)', color: '#fff', border: 'none', borderRadius: 10, padding: '12px 0', fontWeight: 900, textAlign: 'center', textDecoration: 'none', boxShadow: '0 2px 12px #f4e2d844', fontSize: 18, cursor: 'pointer', letterSpacing:0.5 }}>Finalizar compra</a>
        </div>
        <div style={{fontSize:13, color:'#888', marginTop:10, textAlign:'center'}}>¿Tienes un cupón? Aplica el descuento en el siguiente paso.</div>
      </div>
    </div>
  );
}
// --- END LUXURY CART DRAWER ---
