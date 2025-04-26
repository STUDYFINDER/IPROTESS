"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{
      width: '100%',
      background: '#18181b',
      borderTop: '1px solid #23232b',
      padding: '2.5rem 0 1.2rem 0',
      marginTop: 48,
      textAlign: 'center',
      color: '#bbb',
      fontWeight: 600,
      fontSize: 16,
      letterSpacing: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      alignItems: 'center'
    }}>
      <div style={{fontWeight:800, fontSize:18, color:'#fff', letterSpacing:2}}>Alejandro Gonzalez Company</div>
      <div style={{display:'flex',gap:24,flexWrap:'wrap',justifyContent:'center'}}>
        <Link href="/" style={{color:'#bbb',textDecoration:'none',fontWeight:600}}>Home</Link>
        <Link href="/about" style={{color:'#bbb',textDecoration:'none',fontWeight:600}}>About</Link>
        <Link href="/collection" style={{color:'#bbb',textDecoration:'none',fontWeight:600}}>Products</Link>
        <Link href="/contact" style={{color:'#bbb',textDecoration:'none',fontWeight:600}}>Contact</Link>
      </div>
      <div style={{fontSize:13, color:'#888', marginTop:8}}>
        &copy; {new Date().getFullYear()} Alejandro Gonzalez Company. All rights reserved.
      </div>
      {/* Redes sociales opcional */}
      {/* <div style={{marginTop:8}}>
        <a href="#" style={{margin:'0 8px',color:'#bbb',fontSize:18}}>Instagram</a>
        <a href="#" style={{margin:'0 8px',color:'#bbb',fontSize:18}}>Twitter</a>
      </div> */}
      <style>{`
        @media (max-width: 600px) {
          footer > div:nth-child(2) { flex-direction: column !important; gap: 10px !important; }
          footer { font-size: 15px !important; padding: 2rem 0 1rem 0 !important; }
        }
      `}</style>
    </footer>
  );
}
