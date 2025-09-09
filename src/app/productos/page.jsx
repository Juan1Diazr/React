"use client";
import { useState } from "react";

const productos = [
  {
    id: 1,
    nombre: "Manzana",
    precio: 2000,
    desc: "Fruta fresca y saludable",
    img: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=400",
  },
  {
    id: 2,
    nombre: "Banano",
    precio: 1500,
    desc: "Excelente fuente de energía",
    img: "https://images.unsplash.com/photo-1574226516831-e1dff420e12c?w=400",
  },
  {
    id: 3,
    nombre: "Leche",
    precio: 3500,
    desc: "Producto lácteo natural",
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400",
  },
  {
    id: 4,
    nombre: "Pan",
    precio: 1800,
    desc: "Recién horneado",
    img: "https://images.unsplash.com/photo-1608198093002-ad4e0054849c?w=400",
  },
];

export default function ProductosPage() {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  const eliminarDelCarrito = (index) => {
    const nuevoCarrito = [...carrito];
    nuevoCarrito.splice(index, 1);
    setCarrito(nuevoCarrito);
  };

  const total = carrito.reduce((acc, item) => acc + item.precio, 0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Sección Productos */}
      <div className="md:col-span-2">
        <h1 className="text-xl font-bold mb-4">Productos Estáticos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {productos.map((prod) => (
            <div key={prod.id} className="border p-4 rounded shadow">
              <img
                src={prod.img}
                alt={prod.nombre}
                className="w-full h-40 object-cover mb-2 rounded"
              />
              <h2 className="font-bold">{prod.nombre}</h2>
              <p className="text-sm text-gray-600">{prod.desc}</p>
              <p className="text-green-700 font-semibold">${prod.precio}</p>
              <button
                onClick={() => agregarAlCarrito(prod)}
                className="bg-blue-600 text-white px-3 py-1 rounded mt-2"
              >
                Agregar al carrito
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Sección Carrito */}
      <div className="border p-4 rounded shadow bg-gray-50">
        <h2 className="text-lg font-bold mb-2">🛒 Carrito de Compras</h2>
        {carrito.length === 0 ? (
          <p className="text-gray-500">El carrito está vacío</p>
        ) : (
          <ul className="space-y-2">
            {carrito.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center border-b pb-1"
              >
                <span>
                  {item.nombre} - ${item.precio}
                </span>
                <button
                  onClick={() => eliminarDelCarrito(index)}
                  className="text-red-600 text-sm"
                >
                  ❌
                </button>
              </li>
            ))}
          </ul>
        )}

        {/* Total */}
        <div className="mt-4 font-bold">
          Total: <span className="text-green-700">${total}</span>
        </div>
      </div>
    </div>
  );
}
