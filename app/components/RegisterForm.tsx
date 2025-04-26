"use client";
import React, { useState } from "react";

export default function RegisterForm({ onSuccess }: { onSuccess?: () => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!email.match(/^\S+@\S+\.\S+$/)) {
      setError("Correo no válido");
      return;
    }
    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres");
      return;
    }
    if (password !== confirm) {
      setError("Las contraseñas no coinciden");
      return;
    }
    setLoading(true);
    // Simulación de registro (sustituir por llamada real)
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        onSuccess?.();
      }, 1200);
    }, 1200);
  };

  return (
    <form onSubmit={handleRegister} style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 8 }}>
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
      <input
        type="password"
        placeholder="Repetir contraseña"
        value={confirm}
        onChange={e => setConfirm(e.target.value)}
        required
        style={{ padding: 10, borderRadius: 8, border: '1px solid #e0cba7', fontSize: 16 }}
      />
      {error && <div style={{ color: '#e00', fontSize: 14, textAlign: 'center' }}>{error}</div>}
      {success && <div style={{ color: '#2ecc40', fontWeight:700, fontSize: 15, textAlign:'center' }}>¡Cuenta creada con éxito!</div>}
      <button
        type="submit"
        disabled={loading}
        style={{ background: 'linear-gradient(90deg,#bfa14a,#f4e2d8 100%)', color: '#fff', border: 'none', borderRadius: 10, padding: '12px 0', fontWeight: 900, fontSize: 17, cursor: 'pointer', letterSpacing:0.5 }}
      >
        {loading ? "Creando cuenta..." : "Crear cuenta"}
      </button>
    </form>
  );
}
