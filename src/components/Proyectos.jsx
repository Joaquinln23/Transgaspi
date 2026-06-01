import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
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
          autoScroll: {
            speed: 1,
            pauseOnHover: true,
            pauseOnFocus: false,
          },
          breakpoints: {
            1024: { perPage: 2 },
            768: { perPage: 1 },
          },
        }}
        extensions={{ AutoScroll }}
      >
        {PROJECTS.map(p => (
          <SplideSlide key={p.id}>
            <div className="project-card">
              <div className="project-img">
                <img src={p.image} alt={p.client} />
              </div>
              <h3 className="project-client">{p.client}</h3>
              <div className="project-details">
                {p.projects.length > 0 && (
                  <p><strong>Obras:</strong> {p.projects.join(', ')}</p>
                )}
                {p.services.length > 0 && (
                  <p style={{ marginTop: '5px' }}><strong>Servicios:</strong> {p.services.join(', ')}</p>
                )}
                {p.contactNote && (
                  <p style={{ marginTop: '5px', fontStyle: 'italic' }}>{p.contactNote}</p>
                )}
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>

      {/* Bloque "y muchos más clientes" */}
      <div className="projects-more">
        <p className="projects-more-text">
          Y muchos más clientes en construcción, obras civiles e infraestructura que han confiado en nosotros a lo largo de estos años.
        </p>
      </div>
    </section>
  );
}