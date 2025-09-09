"use client";
import { useState } from "react";

export default function TareasPage() {
  const [tareas, setTareas] = useState([
    "Estudiar React",
    "Hacer ejercicio",
    "Leer un libro",
  ]);
  const [nuevaTarea, setNuevaTarea] = useState("");

  const agregarTarea = () => {
    if (nuevaTarea.trim() !== "") {
      setTareas([...tareas, nuevaTarea]);
      setNuevaTarea("");
    }
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Lista de Tareas</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          className="border px-2 py-1 rounded"
          placeholder="Nueva tarea..."
        />
        <button
          onClick={agregarTarea}
          className="bg-blue-600 text-white px-4 py-1 rounded"
        >
          Agregar
        </button>
      </div>

      {tareas.length === 0 ? (
        <p className="text-gray-500">No tiene tareas pendientes</p>
      ) : (
        <ul className="list-disc pl-6">
          {tareas.map((tarea, i) => (
            <li key={i}>{tarea}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
