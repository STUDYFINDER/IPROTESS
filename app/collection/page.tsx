"use client";
import Image from 'next/image';
import React from 'react';
import { useCart } from '../context/CartContext';
import '../collection-section.css';

export default function CollectionPage() {
  const { addItem } = useCart();
  const products = [
    {
      id: 'capsules',
      name: 'Premium Whey Isolate',
      desc: 'Ultra-refined protein for superior muscle recovery and growth.',
      price: '$89',
      image: '/assets/products/capsules.jpg',
      alt: 'Stack of protein capsules',
    },
    {
      id: 'shaker',
      name: 'Luxury Shaker',
      desc: 'Sleek, double-walled, and crafted for those with discerning taste.',
      price: '$59',
      image: '/assets/products/shaker.jpg',
      alt: 'Black luxury protein shaker',
    },
    {
      id: 'ip-pack',
      name: 'Pre-Workout Elite',
      desc: 'Scientifically formulated for elite energy and focus.',
      price: '$69',
      image: '/assets/products/ip-pack.jpg',
      alt: 'Iprotess pre-workout pack',
    },
  ];

  return (
    <section className="collection-section">
      <h1 className="collection-title">OUR COLLECTION</h1>
      <div className="collection-controls">
        <select className="filter-select">
          <option>All Products</option>
          <option>Cápsulas</option>
          <option>Musculación</option>
          <option>Definición</option>
          <option>Aumento de peso</option>
        </select>
        <select className="filter-select">
          <option>Sort By</option>
          <option>Name</option>
          <option>Price (Low to High)</option>
          <option>Price (High to Low)</option>
        </select>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <Image
              src={product.image}
              alt={product.alt}
              width={400}
              height={400}
              style={{ maxWidth: '100%', height: 'auto', marginBottom: '1.5rem', borderRadius: '1rem' }}
            />
            <h3>{product.name}</h3>
            <p>{product.desc}</p>
            <div className="price">{product.price}</div>
            <button
              className="add-to-cart-btn"
              onClick={() => addItem({
                id: Number(product.id.replace(/\D/g, '')),
                name: product.name,
                price: Number(product.price.replace(/[^\d.]/g, '')),
                image: product.image
              })}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
