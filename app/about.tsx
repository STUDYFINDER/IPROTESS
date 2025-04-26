import React from 'react';

export default function About() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center px-4 py-16">
      <section className="max-w-3xl w-full text-center">
        <h1 className="text-4xl md:text-5xl font-semibold mb-8 tracking-tight text-silver">About Iprotess</h1>
        <div className="mx-auto mb-10 border-t border-silver/20 w-24" />
        <p className="text-lg md:text-xl mb-10 text-silver/90 font-light leading-relaxed">
          <span className="text-gold font-semibold">Iprotess</span> is the embodiment of refined wellness, specializing in <span className="text-navy font-semibold">luxury vegan protein supplements</span> and high-end shakers for the discerning elite.<br /><br />
          Our philosophy is simple yet profound: <span className="text-gold">nature, purity, and exclusivity</span>. We are devoted to natural, plant-based supplementation, harnessing only the purest ingredients to deliver uncompromising quality and efficacy.<br /><br />
          Sustainability is at the core of everything we do. From eco-conscious sourcing to responsible packaging, every detail is meticulously crafted to honor both body and planet.<br /><br />
          True luxury is discreet. Iprotess is designed exclusively for those who appreciate subtle sophistication—where wellness is not just a choice, but a privilege.
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center mt-8">
          <span className="inline-block bg-navy text-silver px-6 py-2 rounded-full font-medium tracking-wide text-base shadow-sm">Natural & Vegan</span>
          <span className="inline-block bg-black border border-gold text-gold px-6 py-2 rounded-full font-medium tracking-wide text-base shadow-sm">Sustainable</span>
          <span className="inline-block bg-black border border-silver text-silver px-6 py-2 rounded-full font-medium tracking-wide text-base shadow-sm">Discreet Luxury</span>
        </div>
      </section>
    </main>
  );
}
