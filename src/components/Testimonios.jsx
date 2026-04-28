import React from 'react';
import '../styles/components/Testimonios.css';

export default function Testimonios() {
  const testimonials = [
    { name: 'Carlos Mendoza', role: 'Jefe de Obras — Constructora Andina', avatar: 'https://i.pravatar.cc/100?u=1', text: 'Excelente servicio. La retroexcavadora llegó a tiempo y en perfectas condiciones. El equipo de soporte respondió rápido cuando tuvimos una duda técnica. Los recomiendo ampliamente.' },
    { name: 'Rodrigo Valenzuela', role: 'Gerente General — Ingeniería del Sur', avatar: 'https://i.pravatar.cc/100?u=2', text: 'Llevamos más de 2 años trabajando con ellos en diferentes proyectos. La flota siempre está mantenida y la atención es profesional. Sin duda el mejor proveedor de la región.' },
    { name: 'Marcela Fuentes', role: 'Coordinadora — Inmobiliaria Norteños', avatar: 'https://i.pravatar.cc/100?u=3', text: 'Me sorprendió la rapidez. Mandé un WhatsApp por la mañana y a las 2 horas ya tenía la cotización. Al día siguiente teníamos el bulldozer en obra. Proceso muy profesional.' }
  ];

  return (
    <>
      <section id="testimonios">
        <div className="section-tag reveal">Testimonios</div>
        <h2 className="section-title reveal reveal-delay-1">LO QUE DICEN<br /><span>NUESTROS CLIENTES</span></h2>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div className={`testimonial-card reveal ${i > 0 ? `reveal-delay-${i}` : ''}`} key={t.name}>
              <div className="stars">★★★★★</div>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-author">
                <div className="author-avatar"><img src={t.avatar} alt={t.name} /></div>
                <div>
                  <div className="author-name">{t.name}</div>
                  <div className="author-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
