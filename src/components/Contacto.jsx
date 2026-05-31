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
              Contáctanos directamente con nuestro equipo para cotizaciones rápidas.
            </p>
          </div>
          <div className="reveal reveal-delay-3" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            <a
              href={waLink('Hola Nelson, quiero cotizar maquinaria')}
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp"
            >
              <span className="wa-icon"><WhatsAppIcon size={28} color="white" /></span>
              {COMPANY.contacts.nelson.name} — {COMPANY.contacts.nelson.role}
            </a>
            <a
              href={`https://wa.me/${COMPANY.contacts.maritza.phone.replace(/[\s+]/g, '')}?text=${encodeURIComponent('Hola Maritza, necesito información sobre TRANSGASPI')}`}
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp btn-whatsapp--small"
            >
              <span className="wa-icon"><WhatsAppIcon size={20} color="white" /></span>
              {COMPANY.contacts.maritza.name} — {COMPANY.contacts.maritza.role}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}