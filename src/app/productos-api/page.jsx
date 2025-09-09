'use client';

import { useState,useEffect } from 'react';


// useEffect -> para cnsumir API
// renderizado condicional -- cargando..
// map() -> renderizar info
//Diseño grid o flexbox

export default function Productos() {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);


    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res  => res.json())
        .then(data => {
            setProductos(data);
            setCargando(false);
        });





    },[]);

    return(

        <div style={{textAlign:'center',marginTop:'30px'}}>
            <h1>Listado de productos</h1>
            {cargando ? (
                <p>Cargando...</p>

            ) : (
                <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'20px',marginTop:'20px'}}>
                    {productos.map(producto => (
                        <div key={producto.id}
                        style={{border:'1px solid #ccc',
                            borderRadius:'8px',
                            padding:'10px'
                        }}>
                            <img src={producto.image} alt={producto.title} width="100" height="100" />
                            
                            <h3>{producto.title}</h3>
                            <p>{producto.price}</p>
                            
                              </div>
                    ))}
                </div>
            )}


        </div>


    ); }

