import React from 'react';
import WhatsAppIcon from './WhatsAppIcon';
import { waLink, COMPANY } from '../data/data';
import '../styles/components/Contacto.css';

export default function Contacto() {
  return (
    <>
      <section id="contacto">
        <div className="cta-inner">
          <div>
            <div className="section-tag reveal">Contáctanos Ahora</div>
            <h2 className="cta-title reveal reveal-delay-1">{COMPANY.name}<br /><span>{COMPANY.slogan}</span></h2>
            <p className="cta-desc reveal reveal-delay-2">
                Contáctanos directamente con nuestro equipo de gestión y terreno para cotizaciones rápidas.
            </p>
          </div>
          <div className="reveal reveal-delay-3" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            <a href={waLink(COMPANY.contacts.maritza.phone)} target="_blank" rel="noreferrer" className="btn-whatsapp">
              <span className="wa-icon"><WhatsAppIcon size={28} color="white" /></span>
              {COMPANY.contacts.maritza.name} - {COMPANY.contacts.maritza.role}
            </a>
            <a href={waLink(COMPANY.contacts.nelson.phone)} target="_blank" rel="noreferrer" className="btn-whatsapp">
              <span className="wa-icon"><WhatsAppIcon size={28} color="white" /></span>
              {COMPANY.contacts.nelson.name} - {COMPANY.contacts.nelson.role}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
