import React from 'react';

const Logo = () => {
  return (
    <img 
      src="/assets/logo-transgaspi.svg" 
      alt="Transgaspi" 
      style={{ 
        width: 'auto', 
        height: '70px', // Ajustá este valor según qué tan grande lo quieras
        display: 'block' 
      }} 
    />
  );
};

export default Logo;