import type { NextApiRequest, NextApiResponse } from 'next';

// Cambia estos valores por los que quieras
const ADMIN_USER = process.env.ADMIN_USER || 'admin';
const ADMIN_PASS = process.env.ADMIN_PASS || 'iprotess2025';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { user, pass } = req.body;
    if (user === ADMIN_USER && pass === ADMIN_PASS) {
      // Sencillo: cookie de sesión (no seguro para producción real)
      res.setHeader('Set-Cookie', `admin=1; Path=/; HttpOnly; SameSite=Lax`);
      res.status(200).json({ ok: true });
    } else {
      res.status(401).json({ error: 'Credenciales incorrectas' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
