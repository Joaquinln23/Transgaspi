import React from 'react';
import { Truck, ShoppingCart, Shovel, Hammer, Building } from 'lucide-react';
import '../styles/components/Servicios.css';
import { SERVICES } from '../data/data';

export default function Servicios() {
  const icons = [<Truck size={44} />, <ShoppingCart size={44} />, <Shovel size={44} />, <Hammer size={44} />, <Building size={44} />];

  return (
    <>
      <section id="servicios">
        <div className="services-header">
          <div>
            <div className="section-tag reveal">Nuestros Servicios</div>
            <h2 className="section-title reveal reveal-delay-1">LO QUE<br /><span>OFRECEMOS</span></h2>
          </div>
          <p className="section-desc reveal reveal-delay-2">Soluciones integrales de transporte, movimiento de tierra, preparación de suelos y demoliciones para tus proyectos.</p>
        </div>

        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <div className={`service-card reveal ${i > 0 ? `reveal-delay-${(i % 3) + 1}` : ''}`} key={s.num}>
              <span className="service-num">{s.num}</span>
              <div className="service-icon">{icons[i]}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
