'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: '#de1414ff',
        padding: '15px',
        display: 'flex',
        justifyContent: 'space-around',
      }}
    >
      <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>
        Home
      </Link>
      
      <Link href="/productos" style={{ color: 'white', textDecoration: 'none' }}>
        Productos Estaticos
      </Link>
      <Link href="/tareas" style={{ color: 'white', textDecoration: 'none' }}>
      Lista Tareas
      </Link>

      <Link href="/productos-api" style={{ color: 'white', textDecoration: 'none' }}>
      Productos API
      </Link>
    </nav>
  );
}
