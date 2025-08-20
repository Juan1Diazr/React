'use client';
import React,{useState} from 'react';



//   const [contador, setContador]= useState(valorInicial);

export default function VistaNueva() {
      const [valor, setValor]= useState(0);
      
         return (
    <div style={{textAlign:"center" ,backgroundColor: '#de1414ff' }}> 
      <h2>{valor}</h2>
      <button onClick={()=> setValor(valor + 1)}>Aumentar</button>
      <button onClick={()=> setValor(valor - 1)}>Disminuir</button>
      
    
    
    </div>
         );


}

