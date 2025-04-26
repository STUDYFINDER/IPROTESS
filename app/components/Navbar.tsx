"use client";
import Link from "next/link";
import CartButton from "./CartButton";
import React, { useState } from "react";

export default function Navbar({ onCartClick }: { onCartClick?: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <nav style={{width:'100%',position:'relative',display:'flex',justifyContent:'space-between',alignItems:'center',padding:'1.5rem 2rem',background:'rgba(0,0,0,0.92)',borderBottom:'1px solid #222',zIndex:10}}>
      <div style={{display:'flex',alignItems:'center',gap:32}}>
        <Link href="/" style={{fontSize:28,fontWeight:900,letterSpacing:2,color:'#fff',textDecoration:'none'}}>Iprotess</Link>
        {/* Desktop menu */}
        <div className="nav-links" style={{display:'flex',gap:24,fontWeight:600,fontSize:18}}
          >
          <div className="nav-desktop" style={{display:'flex',gap:24}}
            >
            <Link href="/" style={{color:'#ccc',textDecoration:'none',transition:'color 0.2s'}}>Home</Link>
            <Link href="/about" style={{color:'#ccc',textDecoration:'none',transition:'color 0.2s'}}>About</Link>
            <Link href="/collection" style={{color:'#ccc',textDecoration:'none',transition:'color 0.2s'}}>Products</Link>
            <Link href="/contact" style={{color:'#ccc',textDecoration:'none',transition:'color 0.2s'}}>Contact</Link>
          </div>
        </div>
      </div>
      {/* Burger icon for mobile */}
      <button
        className="burger"
        aria-label="Open menu"
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          outline: 'none',
          cursor: 'pointer',
          flexDirection: 'column',
          gap: 5,
          padding: 0,
        }}
        onClick={() => setOpen(!open)}
      >
        <span style={{width:28,height:4,background:'#fff',borderRadius:2,display:'block',transition:'0.2s'}}></span>
        <span style={{width:28,height:4,background:'#fff',borderRadius:2,display:'block',transition:'0.2s'}}></span>
        <span style={{width:28,height:4,background:'#fff',borderRadius:2,display:'block',transition:'0.2s'}}></span>
      </button>
      <CartButton onClick={onCartClick} />
      {/* Mobile menu overlay */}
      {open && (
        <div
          className="mobile-menu"
          style={{
            position:'fixed',top:0,left:0,width:'100vw',height:'100vh',background:'rgba(0,0,0,0.92)',zIndex:1000,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:32
          }}
          onClick={() => setOpen(false)}
        >
          <button aria-label="Close menu" style={{position:'absolute',top:24,right:24,fontSize:36,color:'#fff',background:'none',border:'none',cursor:'pointer'}}>&times;</button>
          <Link href="/" style={{color:'#fff',fontSize:28,fontWeight:800,textDecoration:'none'}} onClick={()=>setOpen(false)}>Home</Link>
          <Link href="/about" style={{color:'#fff',fontSize:28,fontWeight:800,textDecoration:'none'}} onClick={()=>setOpen(false)}>About</Link>
          <Link href="/collection" style={{color:'#fff',fontSize:28,fontWeight:800,textDecoration:'none'}} onClick={()=>setOpen(false)}>Products</Link>
          <Link href="/contact" style={{color:'#fff',fontSize:28,fontWeight:800,textDecoration:'none'}} onClick={()=>setOpen(false)}>Contact</Link>
        </div>
      )}
      <style>{`
        @media (max-width: 900px) {
          .nav-desktop { display: none !important; }
          .burger { display: flex !important; }
        }
        @media (min-width: 901px) {
          .mobile-menu { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
