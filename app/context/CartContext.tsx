"use client"
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react"

interface Product {
  id: number
  name: string
  price: number
  image: string
}

export type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

interface CartContextValue {
  items: CartItem[]
  addItem: (product: Product | CartItem) => void
  removeItem: (id: number) => void
  total: number
  clear: () => void
  isCartOpen: boolean
  openCart: () => void
  closeCart: () => void
}

const CartContext = createContext<CartContextValue | undefined>(undefined)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  // Cargar carrito de localStorage al iniciar
  useEffect(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem('cart') : null;
    if (stored) setItems(JSON.parse(stored));
  }, [])

  // Guardar carrito en localStorage cuando cambie
  useEffect(() => {
    if (typeof window !== 'undefined') localStorage.setItem('cart', JSON.stringify(items));
  }, [items])

  const addItem = (product: Product | CartItem) => {
    setItems(prev => {
      const found = prev.find(i => i.id === product.id);
      const quantityToAdd = (product as CartItem).quantity ?? 1;
      if (found) {
        const newQty = found.quantity + quantityToAdd;
        if (newQty <= 0) return prev.filter(i => i.id !== product.id);
        return prev.map(i =>
          i.id === product.id ? { ...i, quantity: newQty } : i
        );
      }
      return [...prev, { ...product, quantity: quantityToAdd }];
    })
  }

  const removeItem = (id: number) => {
    setItems(prev => prev.filter(i => i.id !== id))
  }

  const clear = () => setItems([])

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0)

  const openCart = () => setIsCartOpen(true)
  const closeCart = () => setIsCartOpen(false)

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, total, clear, isCartOpen, openCart, closeCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be inside CartProvider")
  return ctx
}
