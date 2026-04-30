import React from 'react';
import WhatsAppIcon from './WhatsAppIcon';
import { waLink } from '../data/data';
import '../styles/components/FloatingWhatsApp.css';

export default function FloatingWhatsApp() {
  return (
    <>
      <a className="float-wa" href={waLink('+56995791452', 'Hola, necesito información sobre arriendo de maquinaria')} target="_blank" rel="noreferrer" aria-label="Contactar por WhatsApp">
        <span className="float-wa-tooltip">¡Escríbenos ahora!</span>
        <WhatsAppIcon size={30} />
      </a>
    </>
  );
}
