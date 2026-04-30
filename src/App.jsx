import './styles/global.css';
import useScrollReveal from './hooks/useScrollReveal';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Servicios from './components/Servicios';
import Maquinaria from './components/Maquinaria';
import PorQue from './components/PorQue';
import Proceso from './components/Proceso';
/*import Testimonios from './components/Testimonios';*/
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Proyectos from './components/Proyectos';

export default function App() {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Servicios />
        <Maquinaria />
        <PorQue />
        <Proceso />
        <Proyectos />
        {/* <Testimonios /> */}
        <Contacto />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
