import { useState } from "react";

export default function AdminLogin() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const res = await fetch("/api/admin-login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user, pass })
    });
    if (res.ok) {
      window.location.href = "/admin/pedidos";
    } else {
      setError("Credenciales incorrectas");
    }
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#18181b" }}>
      <form onSubmit={handleLogin} style={{ background: "#23232b", borderRadius: 14, padding: 36, boxShadow: "0 4px 24px #0007", minWidth: 320 }}>
        <h1 style={{ color: "#fff", fontWeight: 900, fontSize: 28, marginBottom: 18 }}>Admin Login</h1>
        <input type="text" placeholder="Usuario" value={user} onChange={e=>setUser(e.target.value)} style={{ width: "100%", padding: 12, marginBottom: 12, borderRadius: 8, border: "none", fontSize: 16 }} required />
        <input type="password" placeholder="Contraseña" value={pass} onChange={e=>setPass(e.target.value)} style={{ width: "100%", padding: 12, marginBottom: 16, borderRadius: 8, border: "none", fontSize: 16 }} required />
        {error && <div style={{ color: "#f55", marginBottom: 12, fontWeight: 700 }}>{error}</div>}
        <button type="submit" style={{ width: "100%", padding: 14, background: "#fff", color: "#111", fontWeight: 900, border: "none", borderRadius: 8, fontSize: 18, cursor: "pointer" }}>Entrar</button>
      </form>
    </div>
  );
}
