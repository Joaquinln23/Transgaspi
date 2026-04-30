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
        {/* 1. Fondo: Video */}
        <div className="hero-video-container">
          <video autoPlay loop muted playsInline className="hero-video">
            <source src={IMAGES.heroVideo} type="video/mp4" />
          </video>
        </div>

        {/* 2. Decoración: Rayas amarillas (Restauradas) */}
        <div className="hero-stripes" />

        {/* 3. Degradado */}
        <div className="hero-overlay" />

        {/* 4. Contenido */}
        <div className="hero-content">
          <div className="hero-tag">Líderes en Arriendo de Maquinaria</div>
          <h1>
            DONDE TODO GRAN
            <em>PROYECTO COMIENZA</em>
          </h1>
          <p className="hero-desc">
            Maquinaria pesada de construcción disponible cuando la necesites. Flota moderna,
            mantenimiento garantizado y soporte técnico 24/7.
          </p>
          <div className="hero-actions">
            <a href="#maquinaria" className="btn-ghost" onClick={(e) => { e.preventDefault(); scrollTo('#maquinaria'); }}>
              Ver Maquinaria →
            </a>
            <a href={waLink('+56995791452', 'Hola, quiero cotizar maquinaria')} target="_blank" rel="noreferrer" className="btn-primary">
              <WhatsAppIcon size={18} color="currentColor" />
              Cotizar por WhatsApp
            </a>
          </div>
          <div className="hero-stats">
            {STATS.map((s) => (
              <div className="stat-item" key={s.label}>
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}