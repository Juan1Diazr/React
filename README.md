# 🚀 My First React App

¡Bienvenido a **My First React App**!  
Este proyecto es una aplicación construida con **Next.js** y **React**, que incluye ejemplos de componentes reutilizables y páginas interactivas. Aquí encontrarás una documentación completa para instalar, ejecutar y entender la estructura del proyecto.

---

## 📦 ¿Cómo crear un proyecto con Next.js y React?

### 1. Requisitos previos

- Tener instalado [Node.js](https://nodejs.org/) (recomendado v18 o superior)
- Tener instalado [npm](https://www.npmjs.com/) (se instala junto con Node.js)

### 2. Crear el proyecto

Abre una terminal y ejecuta:

```bash
npx create-next-app@latest my-first-react
```

Sigue las instrucciones en pantalla para configurar tu proyecto (puedes dejar las opciones por defecto).

### 3. Acceder al proyecto

```bash
cd my-first-react
```

### 4. Ejecutar el servidor de desarrollo

```bash
npm run dev
```

Abre tu navegador en [http://localhost:3000](http://localhost:3000) para ver la app en acción.

---

## 📁 Estructura del Proyecto

```
my-first-react/
│
├── public/                # Archivos estáticos (imágenes, SVGs, etc.)
├── src/
│   ├── app/
│   │   └── page.tsx       # Página principal
│   ├── components/
│   │   ├── boton.jsx      # Componente de botón reutilizable
│   │   └── first.jsx      # Componente de saludo
│   └── pages/
│       ├── vistanueva.jsx # Página con contador
│       └── vistaeffect.jsx# Página con useEffect
├── README.md              # Documentación del proyecto
└── package.json           # Dependencias y scripts
```

---

## 🏠 Vista Principal (`src/app/page.tsx`)

Esta es la página principal de la aplicación. Permite al usuario interactuar con dos botones ("Aceptar" y "Cancelar") y muestra un mensaje según la acción realizada.

```tsx
// src/app/page.tsx
'use client';
import { useState } from "react";
import Boton from "../components/boton";
export default function Home() {
  const [mensaje, setMensaje] = useState('');
  // Función para manejar el clic en los botones
  const manejarClick = (textoBoton: string) => {
    setMensaje(`Has pulsado el botón ${textoBoton}`);

    if (textoBoton === 'Aceptar') {
      console.log('Has pulsado Aceptar');
      alert('Has pulsado Aceptar');
    } else if (textoBoton === 'Cancelar') {
      console.log('Has pulsado Cancelar');
      alert('Has pulsado Cancelar');
    }
  };
  return (
    <main style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Página Principal</h1>
      {mensaje && <p style={{ color: 'blue', fontSize: '18px' }}>{mensaje}</p>}
      <div>
        <Boton texto="Aceptar" onClick={manejarClick} />
        <Boton texto="Cancelar" onClick={manejarClick} />
      </div>
    </main>
  );
}
```


---

## 🧩 Componentes

### 🔘 Botón (`src/components/boton.jsx`)

Componente reutilizable de botón, estilizado con Tailwind CSS. Recibe el texto y la función a ejecutar al hacer clic.

```jsx
// src/components/boton.jsx
export default function Boton({ texto, onClick }) {
  const handleClick = () => {
    console.log('Texto del Botón', texto);
    if (onClick) onClick(texto);
  };
  return (
    <div className="p-8">
      <button
        onClick={handleClick}
        className="px-6 py-3 bg-green-500 hover:bg-blue-700 active:bg-yellow-800 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        {texto}
      </button>
    </div>
  );
}
```


---

### 👋 Saludo (`src/components/first.jsx`)

Componente simple que muestra un saludo y un número.

```jsx
// src/components/first.jsx
export default function Saludo() {
  const numero = 5;
  return <h1 className="">Hola, mundo! ({numero})</h1>;
}
```

---

## 📄 Páginas

### ➕ Vista Nueva (`src/pages/vistanueva.jsx`)

Página con un contador interactivo que permite aumentar o disminuir el valor.

```jsx
// src/pages/vistanueva.jsx
'use client';
import React, { useState } from 'react';

export default function VistaNueva() {
  const [valor, setValor] = useState(0);
  return (
    <div style={{ textAlign: "center", backgroundColor: '#de1414ff' }}>
      <h2>{valor}</h2>
      <button onClick={() => setValor(valor + 1)}>Aumentar</button>
      <button onClick={() => setValor(valor - 1)}>Disminuir</button>
    </div>
  );
}
```

---

### ✍️ Vista Effect (`src/pages/vistaeffect.jsx`)

Página que utiliza el hook `useEffect` para mostrar y registrar el nombre ingresado por el usuario.

```jsx
// src/pages/vistaeffect.jsx
'use client';
import React, { useState, useEffect } from 'react';

export default function Mensaje() {
  const [nombre, setNombre] = useState('');
  useEffect(() => {
    console.log('El nombre es:', nombre);
  }, [nombre]);
  return (
    <div style={{ textAlign: "center", backgroundColor: '#de1414ff' }}>
      <h2>{nombre}</h2>
      <input
        type="text"
        placeholder="Escribe tu nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <p>Hola {nombre || "invitado"}</p>
    </div>
  );
}
```

---

## 🖼️ Recursos Visuales

Puedes agregar imágenes de las vistas usando capturas de pantalla o los SVGs de la carpeta [`public/`](public/).

---

## 🛠️ Scripts útiles

- `npm run dev` — Inicia el servidor de desarrollo.
- `npm run build` — Compila la aplicación para producción.
- `npm start` — Inicia la aplicación en modo producción.
- `npm run lint` — Ejecuta el linter para revisar el código.

---

## 📚 Recursos recomendados

- [Documentación oficial de Next.js](https://nextjs.org/docs)
- [Documentación oficial de React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/) (si usas los estilos del ejemplo)

---

> ℹ️ **Recuerda:** Actualiza las rutas de las imágenes si agregas capturas de pantalla reales.  
> ¡Explora, aprende y diviértete programando con React y Next.js!
