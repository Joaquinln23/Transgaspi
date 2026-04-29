import React from 'react';

const Logo = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1', userSelect: 'none' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
        {/* PARTE 1: "TRANS" en amarillo industrial */}
        <span style={{
          fontFamily: "'Bebas Neue', sans-serif", // Fuente industrial cargada en tu repo
          fontWeight: '900',
          fontStyle: 'italic', // Dinamismo
          fontSize: '32px',
          color: '#F5A800', // Tu amarillo corporativo premium
          letterSpacing: '-1px',
          textTransform: 'uppercase',
          borderRadius: '10px',
        }}>
          TRANS
        </span>

        {/* PARTE 2: "GASPI" en blanco con fondo oscuro y bordes redondeados */}
        <span style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontWeight: '900',
          fontStyle: 'italic',
          fontSize: '32px',
          color: 'white',
          letterSpacing: '-1px',
          textTransform: 'uppercase'
        }}>
          GASPI
        </span>
      </div>

      {/* ESLOGAN alineado debajo */}
      <p style={{
        fontFamily: "'Barlow', sans-serif", // Tu otra fuente cargada
        fontSize: '11px',
        color: 'white',
        letterSpacing: '0.35em', // Espaciado industrial para elegancia
        textTransform: 'uppercase',
        marginTop: '6px',
        opacity: '0.9',
        textAlign: 'center'
      }}>
        Transportes y Servicios
      </p>
    </div>
  );
};

export default Logo;