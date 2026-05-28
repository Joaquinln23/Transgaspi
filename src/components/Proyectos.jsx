import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'; // Importamos la extensión
import '@splidejs/react-splide/css'; 
import { PROJECTS } from '../data/data';
import '../styles/components/Proyectos.css';

export default function Proyectos() {
  return (
    <section id="proyectos">
      <div className="section-tag reveal">Proyectos Destacados</div>
      <h2 className="section-title reveal reveal-delay-1">NUESTROS<br /><span>TRABAJOS</span></h2>
      
      <Splide
        options={{
          type: 'loop',
          gap: '24px',
          drag: 'free',
          focus: 'center', 
          perPage: 3,
          arrows: false,
          pagination: false,
          autoScroll: {       // Configuración del movimiento constante
            speed: 1,         // Velocidad (ajustalo si quieres más rápido)
            pauseOnHover: true,
            pauseOnFocus: false,
          },
          breakpoints: {
            1024: { perPage: 2 },
            768: { perPage: 1 },
          },
        }}
        extensions={{ AutoScroll }} // Activamos la extensión
      >
        {PROJECTS.map(p => (
          <SplideSlide key={p.id}>
            <div className="project-card">
              <div className="project-img">
                <img src={p.image} alt={p.client} />
              </div>
              <h3 className="project-client">{p.client}</h3>
              <div className="project-details">
                <p><strong>Obras:</strong> {p.projects.join(', ')}</p>
                <p style={{marginTop: '5px'}}><strong>Servicios:</strong> {p.services.join(', ')}</p>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
}