import React from 'react';
import { ShieldCheck, Zap, Shield, Briefcase } from 'lucide-react';
import { IMAGES } from '../data/data';
import '../styles/components/PorQue.css';

export default function PorQue() {
  const items = [
    { icon: <ShieldCheck size={24} />, title: 'Flota 100% Asegurada', desc: 'Toda nuestra maquinaria cuenta con seguros vigentes. Operamos con total respaldo ante cualquier eventualidad en faena.' },
    { icon: <Zap size={24} />, title: 'Respuesta Inmediata', desc: 'Cotización en menos de 30 minutos por WhatsApp. Despacho a partir del día siguiente para urgencias confirmadas.' },
    { icon: <Shield size={24} />, title: 'Maquinaria Certificada', desc: 'Toda la flota cumple con las normativas vigentes de la SUSESO y posee revisiones técnicas al día.' },
    { icon: <Briefcase size={24} />, title: 'Experiencia Comprobada', desc: 'Proyectos ejecutados con éxito en construcción, minería, agricultura y obras de infraestructura.' }
  ];

  return (
    <>
      <section id="por-que">
        <div className="section-tag reveal">Por qué elegirnos</div>
        <h2 className="section-title reveal reveal-delay-1">CONFIANZA<br /><span>Y POTENCIA</span></h2>

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
            {items.map((item, i) => (
              <div className={`why-item reveal ${i > 0 ? `reveal-delay-${i}` : ''}`} key={item.title}>
                <div className="why-icon">{item.icon}</div>
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
