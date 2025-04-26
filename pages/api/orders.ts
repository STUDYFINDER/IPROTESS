import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Crear nuevo pedido
    try {
      const { email, name, address, items, total } = req.body;
      const order = await prisma.order.create({
        data: { email, name, address, items, total, status: 'pending' },
      });
      res.status(201).json(order);
    } catch (err) {
      res.status(500).json({ error: 'Error al crear pedido', details: err });
    }
  } else if (req.method === 'GET') {
    // Listar pedidos
    try {
      const orders = await prisma.order.findMany({ orderBy: { createdAt: 'desc' } });
      res.status(200).json(orders);
    } catch (err) {
      res.status(500).json({ error: 'Error al obtener pedidos', details: err });
    }
  } else {
    res.setHeader('Allow', ['POST', 'GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
