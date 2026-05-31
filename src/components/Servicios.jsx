import React from 'react';
import {
  MoveVertical,
  Hammer,
  Truck,
  Tractor,
  Layers,
  ShoppingBag,
  Container,
} from 'lucide-react';
import '../styles/components/Servicios.css';
import { OFFERED_SERVICES } from '../data/data';

const ICONS = [
  <MoveVertical size={44} />,   // Movimiento de Tierra
  <Hammer size={44} />,         // Demoliciones
  <Truck size={44} />,          // Transporte de Áridos
  <Tractor size={44} />,        // Arriendo de Maquinaria
  <Layers size={44} />,         // Compactaciones
  <ShoppingBag size={44} />,    // Compra y Venta de Áridos
  <Container size={44} />,      // Traslado de Maquinaria
  <Truck size={44} />,          // Arriendo de Vehículos
];

export default function Servicios() {
  return (
    <>
      <section id="servicios">
        <div className="services-header">
          <div>
            <div className="section-tag reveal">Nuestros Servicios</div>
            <h2 className="section-title reveal reveal-delay-1">LO QUE<br /><span>OFRECEMOS</span></h2>
          </div>
          <p className="section-desc reveal reveal-delay-2">
            Soluciones integrales de transporte, movimiento de tierra, arriendo de maquinaria,
            compactaciones y más para tus proyectos.
          </p>
        </div>
        <div className="services-grid">
          {OFFERED_SERVICES.map((s, i) => (
            <div
              className={`service-card reveal ${i > 0 ? `reveal-delay-${(i % 3) + 1}` : ''}`}
              key={s.title}
            >
              <div className="service-icon">{ICONS[i]}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}