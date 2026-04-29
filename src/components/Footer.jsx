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
          <p>{COMPANY.slogan}</p>
          </div>

          <div className="footer-col">
            <h4>Servicios</h4>
            <ul>
              <li><a href="#servicios">Movimiento de tierra</a></li>
              <li><a href="#servicios">Preparación de suelos</a></li>
              <li><a href="#servicios">Transporte de materiales</a></li>
              <li><a href="#servicios">Servicios integrales</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Maquinaria</h4>
            <ul>
              <li><a href="#maquinaria">Excavadoras</a></li>
              <li><a href="#maquinaria">Camiones Tolva</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contacto</h4>
            <ul>
              <li><a href="https://wa.me/56957914521" target="_blank" rel="noreferrer">Maritza Ortega: +569 5791 4521</a></li>
              <li><a href="https://wa.me/56971952395" target="_blank" rel="noreferrer">Nelson Ortega: +569 7195 2395</a></li>
              <li>{COMPANY.address}</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 {COMPANY.name} · Todos los derechos reservados</p>
          <p>Diseño y desarrollo: <a href="https://joaquincode.vercel.app/"></a>JoaquinCode</p>
        </div>
      </footer>
    </>
  );
}
