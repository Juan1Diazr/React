



/* useEffect(() => {
    }),[dependencias]); // Se ejecuta cuando el componente se monta o cuando cambian las dependencias

    
    */


    //Generar vista que al ejecutar un efecto secundario me muestre el contenido en consola


'use client';
import React, { useState,useEffect } from 'react';

export default function Mensaje() {
      const [nombre, setNombre]= useState('');
      useEffect(() => {
        console.log('El nombree es :',nombre);
      }, [nombre]);
            return (
    <div style={{textAlign:"center" ,backgroundColor: '#de1414ff' }}> 
        <h2>{nombre}</h2>
        <input type="text" placeholder='Escribe tu nombre' value={nombre} onChange={(e)=> setNombre(e.target.value)}
        />


    <p>Hola {nombre || "invitado"}</p>
    
    </div>

            );






}
