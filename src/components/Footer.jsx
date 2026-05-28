import React from 'react';
import { COMPANY } from '../data/data';
import '../styles/components/Footer.css';
import Logo from './Logo';

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="nav-logo">
              <Logo />
            </div>
            <p>{COMPANY.name}</p> {/* Nombre Legal */}
            <p>{COMPANY.slogan}</p>
          </div>

          <div className="footer-col">
            <h4>Servicios</h4>
            <ul>
              <li><a href="#servicios">Movimiento de tierra</a></li>
              <li><a href="#servicios">Demoliciones varias</a></li>
              <li><a href="#servicios">Retiro de escombros</a></li>
              <li><a href="#servicios">Compra y despacho de áridos</a></li>
              <li><a href="#servicios">Arriendo de maquinaria</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Maquinaria</h4>
            <ul>
              <li><a href="#maquinaria">Excavadoras</a></li>
              <li><a href="#maquinaria">Camiones Tolva</a></li>
              <li><a href="#maquinaria">Minicargadores</a></li>
              <li><a href="#maquinaria">Remolques</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contacto</h4>
            <ul>
              {/* Nelson Primero */}
              <li><a href={`https://wa.me/56971952395`} target="_blank" rel="noreferrer">
                {COMPANY.contacts.nelson.name}: {COMPANY.contacts.nelson.phone}
              </a></li>
              {/* Maritza Segundo */}
              <li><a href={`https://wa.me/56995791452`} target="_blank" rel="noreferrer">
                {COMPANY.contacts.maritza.name}: {COMPANY.contacts.maritza.phone}
              </a></li>
              <li>{COMPANY.address}</li>
              <li><a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 {COMPANY.fantasyName} · Todos los derechos reservados</p>
          <p>Diseño y desarrollo: <a href="https://joaquincode.vercel.app/" target="_blank" rel="noreferrer">JoaquinCode</a></p>
        </div>
      </footer>
    </>
  );
}