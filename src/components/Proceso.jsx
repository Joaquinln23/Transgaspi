import React from 'react';
import { MessageSquare, FileText, CheckCircle, Truck } from 'lucide-react';
import '../styles/components/Proceso.css';

export default function Proceso() {
  const steps = [
    { num: '01', icon: <MessageSquare size={28} />, title: 'Contáctanos', desc: 'Escríbenos por WhatsApp o llámanos. Cuéntanos qué maquinaria necesitas y cuándo.' },
    { num: '02', icon: <FileText size={28} />, title: 'Cotización', desc: 'Te enviamos una cotización personalizada en menos de 30 minutos con todos los detalles.' },
    { num: '03', icon: <CheckCircle size={28} />, title: 'Confirmación', desc: 'Aceptas la cotización y firmamos el contrato de arriendo. Proceso 100% digital disponible.' },
    { num: '04', icon: <Truck size={28} />, title: 'Despacho a Obra', desc: 'Coordinamos el traslado y la máquina llega a tu faena lista para operar.' }
  ];

  return (
    <>
      <section id="proceso">
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
          <div className="section-tag reveal" style={{ justifyContent: 'center' }}>Cómo Funciona</div>
          <h2 className="section-title reveal reveal-delay-1" style={{ textAlign: 'center' }}>PROCESO<br /><span>SIMPLE</span></h2>
          <p className="section-desc reveal reveal-delay-2" style={{ margin: '0 auto 0' }}>Arrendar maquinaria con nosotros es rápido y sin complicaciones.</p>
        </div>

        <div className="process-steps">
          {steps.map((step, i) => (
            <div className={`process-step reveal ${i > 0 ? `reveal-delay-${i}` : ''}`} key={step.num}>
              <div className="step-num">{step.num}</div>
              <div className="step-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
