import React from 'react';
import { TESTIMONIALS } from '../data/data';
import '../styles/components/Testimonios.css';

export default function Testimonios() {
  return (
    <>
      <section id="testimonios">
        <div className="section-tag reveal">Testimonios</div>
        <h2 className="section-title reveal reveal-delay-1">LO QUE DICEN<br /><span>NUESTROS CLIENTES</span></h2>

        <div className="testimonials-grid">
        {TESTIMONIALS.map((t) => (
          <div className="testimonial-card" key={t.id}>
            <p className="testimonial-text">"{t.quote}"</p>
          <div className="testimonial-author">
                <div className="author-avatar">
                  <img src={`https://i.pravatar.cc/100?u=${t.id}`} alt={t.name} />
                </div>                
              <h4 className="author-name">{t.name}</h4>
              <span className="author-role">{t.company}</span>
            </div>
          </div>
        ))}
      </div>
      </section>
    </>
  );
}
