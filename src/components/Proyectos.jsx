import React from 'react';
import { PROJECTS } from '../data/data';
import '../styles/components/Proyectos.css';

export default function Proyectos() {
  return (
    <section id="proyectos">
      <div className="section-tag reveal">Proyectos Destacados</div>
      <h2 className="section-title reveal reveal-delay-1">NUESTROS<br /><span>TRABAJOS</span></h2>
      <div className="carousel-container">
        <div className="carousel-track">
          {/* Duplicamos el array para que el scroll sea infinito y fluido */}
          {[...PROJECTS, ...PROJECTS].map((p, index) => (
            <div className="project-card" key={index}>
              <div className="project-img">
                <img src={p.image} alt={p.client} />
              </div>
              <h3 className="project-client">{p.client}</h3>
              <p className="project-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}