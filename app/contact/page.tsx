import React from 'react';
import '../../app/contact-section.css';

export default function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Email Us</h2>
        <p className="contact-email">
          <a href="mailto:support@iprotess.com">support@iprotess.com</a>
        </p>
        <p className="contact-hours">
          Our dedicated support team is available <strong>Monday through Friday</strong>,<br />
          <strong>9:00 AM - 6:00 PM EST</strong>
        </p>
        <form className="contact-form">
          <div className="form-group">
            <input type="text" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <textarea name="message" rows={5} placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="contact-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
}
