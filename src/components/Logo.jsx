import React from 'react';

const Logo = () => {
  return (
    <div className="flex flex-col leading-none font-sans select-none">
      <div className="flex items-center gap-2">
        {/* SVG de Excavadora/Camión Minimalista */}
        <svg 
          width="35" 
          height="35" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M2 18h20v2H2v-2zm18-8h-6v2h6v-2zM11 6H4v8h7V6zm9 2h-6v2h6V8zM2 4h20v16H2V4z" 
            fill="#FFB800"
          />
          <path d="M15 2H9v2h6V2z" fill="#FFFFFF"/>
        </svg>

        <div className="text-2xl md:text-3xl font-extrabold tracking-tighter uppercase">
          <span className="text-white">TRANS</span>
          <span className="text-[#FFB800]">GASPI</span>
        </div>
      </div>
      
      <div className="text-[9px] md:text-[10px] text-white font-semibold tracking-[0.3em] uppercase mt-1 pl-[43px]">
        Transportes y Servicios
      </div>
    </div>
  );
};

export default Logo;