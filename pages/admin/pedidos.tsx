import { useEffect, useState } from "react";
import Router from "next/router";

function isAdmin() {
  if (typeof document === "undefined") return false;
  return document.cookie.includes("admin=1");
}

// Asegura que el tipo Pedido no use 'any'
type Pedido = {
  id: number;
  createdAt: string;
  email: string;
  total: number;
  status: string;
};

export default function AdminPedidos() {
  const [orders, setOrders] = useState<Pedido[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchOrders = async () => {
    setLoading(true);
    const res = await fetch("/api/orders");
    const data: Pedido[] = await res.json();
    setOrders(data);
    setLoading(false);
  };

  useEffect(() => {
    if (!isAdmin()) {
      Router.replace("/admin");
      return;
    }
    fetchOrders();
  }, []);

  if (!isAdmin()) return null;

  return (
    <div style={{ minHeight: "100vh", background: "#18181b", color: "#fff", padding: 32 }}>
      <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 24 }}>Pedidos</h1>
      {loading ? (
        <div>Cargando pedidos...</div>
      ) : orders.length === 0 ? (
        <div>No hay pedidos aún.</div>
      ) : (
        <table style={{ width: "100%", background: "#23232b", borderRadius: 12, overflow: "hidden", boxShadow: "0 4px 24px #0007" }}>
          <thead>
            <tr style={{ background: "#23232b" }}>
              <th style={{ padding: 12, textAlign: "left", fontWeight: 800, fontSize: 15 }}>ID</th>
              <th style={{ padding: 12, textAlign: "left", fontWeight: 800, fontSize: 15 }}>Fecha</th>
              <th style={{ padding: 12, textAlign: "left", fontWeight: 800, fontSize: 15 }}>Email</th>
              <th style={{ padding: 12, textAlign: "left", fontWeight: 800, fontSize: 15 }}>Total</th>
              <th style={{ padding: 12, textAlign: "left", fontWeight: 800, fontSize: 15 }}>Estado</th>
              <th style={{ padding: 12, textAlign: "left", fontWeight: 800, fontSize: 15 }}>Acción</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order: Pedido) => (
              <tr key={order.id} style={{ borderBottom: "1px solid #222" }}>
                <td style={{ padding: 10 }}>{order.id}</td>
                <td style={{ padding: 10 }}>{new Date(order.createdAt).toLocaleString()}</td>
                <td style={{ padding: 10 }}>{order.email}</td>
                <td style={{ padding: 10 }}><b>${order.total}</b></td>
                <td style={{ padding: 10 }}>{order.status}</td>
                <td style={{ padding: 10 }}>
                  <button onClick={() => alert(JSON.stringify(order, null, 2))} style={{ background: "#fff", color: "#111", border: "none", borderRadius: 6, padding: "6px 12px", cursor: "pointer", fontWeight: 700 }}>Ver</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
