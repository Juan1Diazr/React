'use client';
import { useState } from "react";
import Boton from "../components/boton";
export default function Home() {
  const[mensaje,setMensaje]=useState('');
  //FUNCION PARA MANEJAR EL BOTON}
    const manejarClick= (textoBoton:string)=>{
      setMensaje(`Has pulsado el boton ${textoBoton}`);

      if(textoBoton === 'Aceptar'){
        console.log('Has pulsado Aceptar');
        alert('Has pulsado Aceptar');
      } 
      else if(textoBoton === 'Cancelar'){
        console.log('Has pulsado Cancelar');
        alert('Has pulsado Cancelar');
      }
    };
   return(
    <main style={{textAlign: 'center' , padding:'20px'}} >
      <h1>Pagina Principal</h1>
      {mensaje &&  <p style={{color:'blue',fontSize:'18px'}}>{mensaje}</p>}
      <div>
       <Boton texto="Aceptar" onClick={manejarClick}/>  
       <Boton texto="Cancelar"onClick={manejarClick}/>
      </div>
      

    </main>


   );


}

// import {useState} from "react";
// import Saludo from "../components/first";
// import Boton from "../components/boton";
// export  default function Home() {  

//   const [contador, setContador]= useState(0);
//  // variables para el contador
//   const incrementar = () => setContador(contador + 1);
//   const decrementar =() =>setContador(contador - 1);
//   const resetear = () => setContador(0);
 
//   return(
//     <main style={{textAling: 'center', padding: '50px'}} >
//       <h1>contador Dinamico</h1>
//       <h2>{contador}</h2>


//       {/* Botones para incrementar, decrementar y resetear el contador */}
//       <button onClick={incrementar}>Aumentar +</button>{''}
//       <button onClick={decrementar}>decrementar </button>{''}
//       <button onClick={resetear}>Reinciar</button>
//     </main>


//  );
// }