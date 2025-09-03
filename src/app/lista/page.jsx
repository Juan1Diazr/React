'use client'
import { useState } from 'react';



export default function Page() {
    const[tareas, setTareas] = useState(["Tarea 1", "Tarea 2   ", "Tarea 3"]);

    return (
        <div>
            <h1 className='text-2xl font-bold mb-4'>Lista de Tareas</h1>
            <ul style={{listStyle:'center',padding:0}}>
                {tareas.map((tarea, index) => (
                    <li key={index}
                    style={{
                        backgroundColor: index % 2 === 0 ? '#f0f0f0' : '#ffffff',
                        padding: '10px'}}>
                            {tarea}

                    </li>



                )
                )}
                
                </ul> 

            </div>
    ); }