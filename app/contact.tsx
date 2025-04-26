import React, { useState } from 'react';

export default function Contact() {
  const [rating, setRating] = useState(0);

  return (
    <main className="min-h-screen bg-black text-silver flex flex-col items-center justify-center px-4 py-16">
      <section className="max-w-xl w-full text-center">
        <h1 className="text-4xl md:text-5xl font-semibold mb-8 text-silver">Contact Iprotess</h1>
        <div className="mb-8 text-lg text-silver/90">
          <p className="mb-2">
            <span className="text-gold font-semibold">Email:</span> <a href="mailto:support@iprotess.com" className="underline hover:text-gold">support@iprotess.com</a>
          </p>
          <p>
            <span className="text-gold font-semibold">Customer Service:</span> <a href="tel:+18001234567" className="underline hover:text-gold">+1 800 123 4567</a>
          </p>
        </div>
        <form className="bg-gradient-to-r from-black via-silver/5 to-black rounded-xl p-10 shadow-lg border border-silver/20 flex flex-col gap-6 items-center">
          <h2 className="text-2xl font-medium mb-4 text-gold">Satisfaction Survey</h2>
          <input type="text" name="name" placeholder="Your Name" className="bg-black border border-silver/30 rounded-md px-4 py-2 text-silver placeholder-silver/60 focus:outline-none focus:ring-2 focus:ring-gold w-full" required />
          <input type="email" name="email" placeholder="Your Email" className="bg-black border border-silver/30 rounded-md px-4 py-2 text-silver placeholder-silver/60 focus:outline-none focus:ring-2 focus:ring-gold w-full" required />
          <div className="flex flex-col items-center w-full">
            <label className="mb-2 text-silver/80">How would you rate your experience?</label>
            <div className="flex gap-2 mb-2">
              {[1,2,3,4,5].map((star) => (
                <button
                  type="button"
                  key={star}
                  onClick={() => setRating(star)}
                  className={`text-2xl ${rating >= star ? 'text-gold' : 'text-silver/30'} focus:outline-none`}
                  aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
                >
                  ★
                </button>
              ))}
            </div>
            <input type="hidden" name="rating" value={rating} />
          </div>
          <textarea name="comment" placeholder="Your Comments" rows={4} className="bg-black border border-silver/30 rounded-md px-4 py-2 text-silver placeholder-silver/60 focus:outline-none focus:ring-2 focus:ring-gold w-full" required />
          <button type="submit" className="bg-gold text-black font-semibold rounded-full px-8 py-3 shadow-md hover:bg-navy hover:text-silver transition-colors">Submit Feedback</button>
        </form>
      </section>
    </main>
  );
}
