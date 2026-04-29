import React from 'react';
import WhatsAppIcon from './WhatsAppIcon';
import { STATS, waLink, IMAGES } from '../data/data';
import '../styles/components/Hero.css';

function scrollTo(href) {
  const target = document.querySelector(href);
  if (target) {
    const top = target.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

export default function Hero() {
  return (
    <>
      <section className="hero" id="inicio">
        {/* Fondo */}
        <div className="hero-bg">
          <div className="hero-bg-img">
            <img 
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a268e?auto=format&fit=crop&q=80&w=2000" 
              alt="Maquinaria pesada" 
            />
          </div>
        </div>

        {/* Imagen lateral destacada (editable via data.js) */}
        <div className="hero-img-placeholder">
          <div className="hero-img-container">
            <img 
              src={IMAGES.headerGrua}
              alt="Grúa horquilla"
            />
          </div>
        </div>

        {/* Decorativos */}
        <div className="hero-stripes" />
        <div className="hero-overlay" />

        {/* Contenido principal */}
        <div className="hero-content">
          <div className="hero-tag">Líderes en Arriendo de Maquinaria</div>
          <h1>
            POTENCIA TU
            <em>PROYECTO</em>
          </h1>
          <p className="hero-desc">
            Maquinaria pesada de construcción disponible cuando la necesitas. Flota moderna,
            mantenimiento garantizado y soporte técnico 24/7.
          </p>
          <div className="hero-actions">            
            <a
              href="#maquinaria"
              className="btn-ghost"
              onClick={(e) => { e.preventDefault(); scrollTo('#maquinaria'); }}
            >
              Ver Maquinaria →
            </a>
            <a
              href={waLink('Hola, quiero cotizar maquinaria')}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              <WhatsAppIcon size={18} color="currentColor" />
              Cotizar por WhatsApp
            </a>
          </div>
        </div>

        {/* Stats bar */}
        <div className="hero-stats">
          {STATS.map((s) => (
            <div className="stat-item" key={s.label}>
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
