'use client';

import React from 'react';
import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import AddToCartButton from './components/AddToCartButton'; 
import Link from 'next/link';
import './products-section.css';

const montserrat = Montserrat({
  weight: ['700', '800'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export default function Home() {
  return (
    <main className={montserrat.className}>
      {/* HERO SECTION with drop shadow and updated gradient */}
      <section className="min-h-screen flex items-center px-4 md:px-16 bg-gradient-to-t from-black to-gray-300">
        <div className="max-w-3xl text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-400 drop-shadow-lg" style={{fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif'}}>
            ELEVATE YOUR<br />PERFORMANCE
          </h1>
          <p className="mt-6 text-lg text-gray-300">
            Premium protein products for those who demand excellence
          </p>
          <Link href="/collection">
            <button className="mt-8 px-8 py-3 border-2 border-white text-white text-sm tracking-widest uppercase rounded-full hover:bg-white hover:text-black transition-all font-semibold explore-btn" style={{fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif'}}>
              Explore Collection
            </button>
          </Link>
        </div>
      </section>

      {/* FEATURED PRODUCTS SECTION with inline luxury styles */}
      <section className="products-section" style={{ backgroundColor: '#000', padding: '4rem 2rem', textAlign: 'center' }}>
        <h2 style={{ color: '#fff', fontSize: '2.5rem', marginBottom: '0.5rem' }}>FEATURED PRODUCTS</h2>
        <p style={{ color: '#aaa', fontSize: '1rem', marginBottom: '3rem' }}>
          Discover our selection of premium products designed for peak performance.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          {/* Product 1 */}
          <div style={{ backgroundColor: '#111', color: '#fff', borderRadius: '1rem', padding: '1.5rem', width: 300, boxShadow: '0 4px 24px 0 rgba(0,0,0,0.18)' }}>
            <div style={{ background: '#181818', borderRadius: '0.5rem', width: '100%', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', boxShadow: '0 2px 8px 0 rgba(0,0,0,0.13)' }}>
              <Image src="/assets/products/capsules.jpg" alt="Stack of protein capsules" width={180} height={180} style={{ maxWidth: '100%', maxHeight: '180px', objectFit: 'contain' }} />
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Premium Whey Isolate</h3>
            <p style={{ color: '#ccc', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Ultra-refined protein for superior muscle recovery and growth.</p>
            <p style={{ fontWeight: 'bold', fontSize: '1rem' }}>$89</p>
            <AddToCartButton id={1} name="Premium Whey Isolate" price={89} image="/assets/products/capsules.jpg" />
          </div>
          {/* Product 2 */}
          <div style={{ backgroundColor: '#111', color: '#fff', borderRadius: '1rem', padding: '1.5rem', width: 300, boxShadow: '0 4px 24px 0 rgba(0,0,0,0.18)' }}>
            <div style={{ background: '#181818', borderRadius: '0.5rem', width: '100%', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', boxShadow: '0 2px 8px 0 rgba(0,0,0,0.13)' }}>
              <Image src="/assets/products/shaker.jpg" alt="Black luxury protein shaker" width={180} height={180} style={{ maxWidth: '100%', maxHeight: '180px', objectFit: 'contain' }} />
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Luxury Shaker</h3>
            <p style={{ color: '#ccc', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Sleek, double-walled, and crafted for those with discerning taste.</p>
            <p style={{ fontWeight: 'bold', fontSize: '1rem' }}>$59</p>
            <AddToCartButton id={2} name="Luxury Shaker" price={59} image="/assets/products/shaker.jpg" />
          </div>
          {/* Product 3 */}
          <div style={{ backgroundColor: '#111', color: '#fff', borderRadius: '1rem', padding: '1.5rem', width: 300, boxShadow: '0 4px 24px 0 rgba(0,0,0,0.18)' }}>
            <div style={{ background: '#181818', borderRadius: '0.5rem', width: '100%', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', boxShadow: '0 2px 8px 0 rgba(0,0,0,0.13)' }}>
              <Image src="/assets/products/ip-pack.jpg" alt="Iprotess pre-workout pack" width={180} height={180} style={{ maxWidth: '100%', maxHeight: '180px', objectFit: 'contain' }} />
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Pre-Workout Elite</h3>
            <p style={{ color: '#ccc', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Scientifically formulated for elite energy and focus.</p>
            <p style={{ fontWeight: 'bold', fontSize: '1rem' }}>$69</p>
            <AddToCartButton id={3} name="Pre-Workout Elite" price={69} image="/assets/products/ip-pack.jpg" />
          </div>
        </div>
      </section>
      {/* FOOTER personalizado */}
      <footer style={{marginTop:48, padding:'2rem 0', textAlign:'center', color:'#bbb', fontWeight:600, fontSize:16, letterSpacing:1}}>
        Alejandro Gonzalez Company
      </footer>
    </main>
  );
}
