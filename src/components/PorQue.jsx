import React from 'react';
import { ShieldCheck, Zap, Shield, Briefcase, HardHat, Star } from 'lucide-react';
import { IMAGES, WHY_CHOOSE_US } from '../data/data';
import '../styles/components/PorQue.css';

const ICONS = [
  <ShieldCheck size={24} />,  // Flota 100% Segura — Maquinaria y Vehículos
  <HardHat size={24} />,      // Operadores y Conductores Calificados
  <Shield size={24} />,       // Maquinaria Certificada
  <Star size={24} />,         // Responsabilidad
  <Zap size={24} />,          // Soporte 24/7
];

export default function PorQue() {
  return (
    <>
      <section id="por-que">
        <div className="section-tag reveal">Por qué elegirnos</div>
        <h2 className="section-title reveal reveal-delay-1">CONFIANZA, POTENCIA<br /><span>Y RESPONSABILIDAD</span></h2>
        <div className="why-grid">
          <div className="why-visual reveal">
            <img
              src={IMAGES.porque}
              alt="Equipo de trabajo en construcción"
            />
            <div className="why-accent">
              <div className="why-accent-num">10+</div>
              <div className="why-accent-text">Años en el<br />mercado</div>
            </div>
          </div>
          <div className="why-list">
            {WHY_CHOOSE_US.map((item, i) => (
              <div className={`why-item reveal ${i > 0 ? `reveal-delay-${i}` : ''}`} key={item.title}>
                <div className="why-icon">{ICONS[i]}</div>
                <div className="why-text">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}