# MaquiRenta — React App

Versión React del landing page de MaquiRenta, convertida desde HTML vanilla a una arquitectura de componentes modular.

## 📁 Estructura del Proyecto

```
maquirenta/
├── index.html                    # Entry point HTML (con Google Fonts)
├── vite.config.js                # Configuración Vite
├── package.json
└── src/
    ├── main.jsx                  # Punto de entrada React
    ├── App.jsx                   # Componente raíz — ensambla todo
    │
    ├── data/
    │   └── data.js               # 📦 TODOS los datos: textos, links, máquinas, servicios...
    │
    ├── hooks/
    │   └── useScrollReveal.js    # 🎬 Hook: animaciones de scroll (IntersectionObserver)
    │
    ├── styles/
    │   └── global.css            # 🎨 Variables CSS, reset, estilos compartidos, botones
    │
    └── components/
        ├── WhatsAppIcon.jsx      # Ícono SVG WhatsApp reutilizable
        ├── Navbar.jsx            # Barra de navegación fija + hamburger mobile
        ├── Hero.jsx              # Sección hero: título, CTA, stats bar
        ├── Servicios.jsx         # Grid de servicios (6 cards)
        ├── Maquinaria.jsx        # Catálogo con filtros por categoría
        ├── PorQue.jsx            # Por qué elegirnos (visual + lista)
        ├── Proceso.jsx           # Pasos del proceso (4 steps)
        ├── Testimonios.jsx       # Testimonios de clientes (3 cards)
        ├── Contacto.jsx          # CTA WhatsApp con animación pulse
        ├── Footer.jsx            # Footer con columnas de links
        └── FloatingWhatsApp.jsx  # Botón flotante WhatsApp
```

## 🚀 Instalación y Uso

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build
```

## ✏️ Personalización Rápida

### Cambiar número de WhatsApp
En `src/data/data.js`:
```js
export const WHATSAPP_NUMBER = '56912345678'; // ← Cambia aquí
```

### Agregar / editar máquinas
En `src/data/data.js`, array `MACHINES`. Cada máquina tiene:
- `emoji`, `name`, `desc`, `category`, `specs`, `badge`, `waText`

### Agregar imágenes reales
En cada componente hay placeholders con emoji. Para reemplazar:
- **Hero**: en `Hero.jsx`, reemplaza `<div className="hero-bg-img">` con `<img src="hero.jpg" />`
- **Máquinas**: en `Maquinaria.jsx`, dentro de `.machine-img`, reemplaza el div de gradiente con `<img>`
- **Por Qué**: en `PorQue.jsx`, dentro de `.why-visual`, reemplaza `why-visual-emoji` con `<img>`

### Cambiar colores
En `src/styles/global.css`, sección `:root`:
```css
--yellow: #f5a800;    /* Color principal */
--whatsapp: #25D366;  /* Verde WhatsApp */
--dark: #111418;      /* Fondo principal */
```

## 🧩 Arquitectura

- **`data.js`** centraliza todos los contenidos — un solo lugar para editar textos
- **`global.css`** define variables CSS y estilos compartidos (botones, section-tag, reveal)
- **Cada componente** lleva sus propios `<style>` encapsulados inline para independencia
- **`useScrollReveal`** hook activa animaciones `.reveal → .visible` con IntersectionObserver
- **`WhatsAppIcon`** es un componente SVG reutilizable con props de tamaño y color

## 📱 Responsive

- Desktop (>1024px): layouts completos
- Tablet (≤900px): hamburger menu, grids ajustados
- Mobile (≤600px): single column, full-width buttons, stats 2x2
