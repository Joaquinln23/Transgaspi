import React from 'react';
import { MessageSquare, FileText, CheckCircle, Truck } from 'lucide-react';
import '../styles/components/Proceso.css';
import { SERVICES } from '../data/data';

const ICONS = [
  <MessageSquare size={28} />,
  <FileText size={28} />,
  <CheckCircle size={28} />,
  <Truck size={28} />,
];

export default function Proceso() {
  return (
    <>
      <section id="proceso">
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
          <div className="section-tag reveal" style={{ justifyContent: 'center' }}>Cómo Funciona</div>
          <h2 className="section-title reveal reveal-delay-1" style={{ textAlign: 'center' }}>PROCESO<br /><span>SIMPLE</span></h2>
          <p className="section-desc reveal reveal-delay-2" style={{ margin: '0 auto 0' }}>Arrendar maquinaria con nosotros es rápido y sin complicaciones.</p>
        </div>
        <div className="process-steps">
          {SERVICES.map((step, i) => (
            <div className={`process-step reveal ${i > 0 ? `reveal-delay-${i}` : ''}`} key={step.num}>
              <div className="step-num">{step.num}</div>
              <div className="step-icon">{ICONS[i]}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}