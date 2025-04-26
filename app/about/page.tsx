import React from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

const pillars = [
  {
    title: 'Natural Excellence',
    text: 'Iprotess is devoted to the purest vegan supplementation, harnessing the power of nature to deliver uncompromising quality. Each formula is crafted with select, plant-based ingredients—refined, unadulterated, and potent.'
  },
  {
    title: 'Discreet Luxury',
    text: 'True luxury is quiet and refined. Iprotess is designed for those who appreciate subtlety and sophistication—wellness that whispers exclusivity and feels effortless in its elegance.'
  },
  {
    title: 'Environmental Stewardship',
    text: 'Sustainability is woven into every aspect of our process. From responsible sourcing to eco-conscious packaging, we honor the planet as we nurture the body—leaving only a legacy of care.'
  },
  {
    title: 'Elite Performance',
    text: 'Engineered for the select few who demand the extraordinary. Iprotess empowers peak performance with clean, effective nutrition—crafted for those who lead, inspire, and excel.'
  },
];

export default function About() {
  return (
    <main
      className={`min-h-screen bg-white flex flex-col items-center justify-center px-4 py-28 ${inter.className}`}
      style={{ fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif' }}
    >
      <section className="w-full max-w-7xl mx-auto flex flex-col items-center">
        <h1
          className="text-[2.8rem] md:text-[4rem] font-extrabold uppercase text-center mb-20 pt-6 pb-12 tracking-[0.12em]"
          style={{ letterSpacing: '0.14em', color: '#181818', fontWeight: 800, fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif' }}
        >
          OUR LEGACY
        </h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-20 mb-32">
          {pillars.map(({ title, text }) => (
            <div key={title} className="flex flex-col items-start px-0 md:px-8">
              <h2
                className="text-[2.2rem] md:text-[2.7rem] font-light mb-8"
                style={{ color: '#181818', fontWeight: 300, fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif', letterSpacing: '0.01em', textAlign: 'left', textTransform: 'none', lineHeight: '1.15', marginBottom: '2.2rem' }}
              >
                {title}
              </h2>
              <p
                className="text-lg md:text-xl mb-2"
                style={{ color: '#999', fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif', fontWeight: 400, lineHeight: '1.7', maxWidth: '32rem', textAlign: 'left', letterSpacing: '0.01em' }}
              >
                {text}
              </p>
            </div>
          ))}
        </div>
        <div className="w-full flex justify-center mt-24 mb-12">
          <blockquote
            className="text-center"
            style={{
              fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif',
              fontStyle: 'italic',
              fontWeight: 400,
              textTransform: 'uppercase',
              fontSize: '2.7rem',
              color: '#C7CBD1', // silver/gray
              letterSpacing: '0.18em',
              lineHeight: '1.1',
              marginTop: '3rem',
              marginBottom: '3rem',
            }}
          >
            “EXCELLENCE IN ITS PUREST FORM”
          </blockquote>
        </div>
      </section>
    </main>
  );
}
