import React, { useState, useEffect, useRef } from 'react';
import WhatsAppIcon from './WhatsAppIcon';
import { MACHINES, FILTER_TABS, waLink, IMAGES } from '../data/data';
import '../styles/components/Maquinaria.css';

export default function Maquinaria() {
  const [activeFilter, setActiveFilter] = useState('all');
  const gridRef = useRef(null);

  const filtered = MACHINES.filter(
    (m) => activeFilter === 'all' || m.category === activeFilter
  );

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    if (gridRef.current) {
      gridRef.current.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }

    return () => observer.disconnect();
  }, [filtered]);

  return (
    <>
      <section id="maquinaria">
        <div className="machines-header">
          <div>
            <div className="section-tag reveal">Nuestra Flota</div>
            <h2 className="section-title reveal reveal-delay-1">
              MAQUINARIA<br /><span>DISPONIBLE</span>
            </h2>
          </div>
          <div className="filter-tabs reveal reveal-delay-2">
            {FILTER_TABS.map((tab) => (
              <button
                key={tab.key}
                className={`filter-tab${activeFilter === tab.key ? ' active' : ''}`}
                onClick={() => setActiveFilter(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="machines-grid" ref={gridRef}>
          {filtered.map((m) => (
            <div
              key={m.id}
              className="machine-card reveal"
              data-category={m.category}
            >
              {/* Imagen */}
              <div className="machine-img">
                <img 
                  src={IMAGES.maquinaria[m.name] || '/assets/placeholder.jpg'} 
                  alt={m.name}
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <span className={`machine-badge badge-${m.badge}`}>{m.badgeLabel}</span>
              </div>

              {/* Información */}
              <div className="machine-info">
                <div className="machine-category">{m.categoryLabel}</div>
                <div className="machine-name">{m.name}</div>
                <div className="machine-desc">{m.desc}</div>

                <div className="machine-specs">
                  {m.specs.map((spec) => (
                    <div className="spec-item" key={spec.key}>
                      <span className="spec-val">{spec.val}</span>
                      <span className="spec-key">{spec.key}</span>
                    </div>
                  ))}
                </div>

                <div className="machine-footer">
                  <div className="machine-price">
                    <span className="price-val">{m.price}</span>
                    <span className="price-label">Precio por día</span>
                  </div>
                  <a
                    href={waLink('+56995791452', m.waText)}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-quote"
                  >
                    <WhatsAppIcon size={14} color="#fff" />
                    Cotizar
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

