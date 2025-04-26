"use client";
import React, { useState } from "react";

export default function LoginForm({ onSuccess, onShowRegister }: { onSuccess?: () => void, onShowRegister?: () => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    // Simulación de login (sustituir por llamada real)
    setTimeout(() => {
      setLoading(false);
      if (email === "demo@email.com" && password === "demo123") {
        onSuccess?.();
      } else {
        setError("Correo o contraseña incorrectos");
      }
    }, 800);
  };

  return (
    <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 8 }}>
      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
        style={{ padding: 10, borderRadius: 8, border: '1px solid #e0cba7', fontSize: 16 }}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
        style={{ padding: 10, borderRadius: 8, border: '1px solid #e0cba7', fontSize: 16 }}
      />
      {error && <div style={{ color: '#e00', fontSize: 14, textAlign: 'center' }}>{error}</div>}
      <button
        type="submit"
        disabled={loading}
        style={{ background: 'linear-gradient(90deg,#bfa14a,#f4e2d8 100%)', color: '#fff', border: 'none', borderRadius: 10, padding: '12px 0', fontWeight: 900, fontSize: 17, cursor: 'pointer', letterSpacing:0.5 }}
      >
        {loading ? "Entrando..." : "Iniciar sesión"}
      </button>
      <div style={{ fontSize: 14, color: '#888', textAlign: 'center' }}>
        ¿No tienes cuenta? <span onClick={onShowRegister} style={{ color: '#bfa14a', fontWeight: 700, textDecoration: 'underline', cursor: 'pointer' }}>Crear cuenta</span>
      </div>
    </form>
  );
}
