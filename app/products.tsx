import React from 'react';
import Image from 'next/image';

const products = [
  {
    name: 'Vegan Protein Supreme',
    description: 'A refined blend of the world’s purest plant proteins. Crafted for discerning palates seeking optimal nutrition and subtle luxury.',
    price: '$89',
    image: '/protein-luxury.jpg',
  },
  {
    name: 'Signature Gold Shaker',
    description: 'An artisanal shaker, engineered from sustainable materials and finished with a touch of gold. Designed for those who appreciate understated excellence.',
    price: '$129',
    image: '/shaker-gold.jpg',
  },
];

export default function Products() {
  return (
    <main className="min-h-screen bg-black text-silver flex flex-col items-center px-4 py-16">
      <section className="max-w-6xl w-full">
        <h1 className="text-4xl md:text-5xl font-semibold mb-14 text-center text-silver">Our Exclusive Collection</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-gradient-to-br from-black via-silver/10 to-black border border-silver/20 rounded-2xl p-10 flex flex-col items-center shadow-xl hover:scale-[1.015] transition-transform duration-200"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={224}
                height={224}
                className="w-56 h-56 object-cover mb-8 rounded-xl border border-silver/30 bg-black shadow-lg"
                style={{ boxShadow: '0 2px 24px 0 rgba(232,196,108,0.06)' }}
              />
              <h2 className="text-2xl font-semibold mb-2 text-gold tracking-tight">{product.name}</h2>
              <p className="text-silver/90 mb-5 text-base text-center font-light">{product.description}</p>
              <span className="text-xl font-semibold text-silver/80 mb-2">{product.price}</span>
              <button className="mt-6 px-8 py-3 rounded-full font-semibold shadow-md border-none bg-gold text-black hover:bg-navy hover:text-silver transition-colors">Add to Cart</button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
