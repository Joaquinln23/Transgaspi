import { useState, useEffect } from 'react';
import WhatsAppIcon from './WhatsAppIcon';
import { NAV_LINKS, waLink, COMPANY } from '../data/data';
import '../styles/components/Navbar.css';
import Logo from './Logo';

function scrollTo(href) {
  if (href === '#') return;
  const target = document.querySelector(href);
  if (target) {
    const top = target.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
      <div className="nav-logo">
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <Logo />  
        </a>
      </div>
      <ul className={`nav-links${menuOpen ? ' open active' : ''}`} id="navLinks">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a href={link.href} onClick={(e) => { e.preventDefault(); scrollTo(link.href); closeMenu(); }}>{link.label}</a>
          </li>
        ))}
        <li>
          <a href={waLink()} target="_blank" rel="noreferrer" className="nav-cta" onClick={closeMenu}>
            <WhatsAppIcon size={16} color="#fff" />
            Cotizar
          </a>
        </li>
      </ul>
      <button className={`hamburger${menuOpen ? ' active' : ''}`} onClick={() => setMenuOpen((v) => !v)} aria-label="Abrir menú">
        <span /><span /><span />
      </button>
    </nav>
  );
}
