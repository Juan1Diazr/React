import Navbar from '@/components/Navbar';
import './globals.css';
import { ReactNode } from 'react';






export const metadata = {
      title:'Clase lista y renderizado',
      description:'Aprendiendo React cib next.js'
}
interface RootLayoutProps{
      children:ReactNode;
}

/*
-> funcion sin tipar
    fuction suma(a,b){
          return a + b
    }
          
-> funcion tipada
    function suma(a:number,b:number):number{
          return a + b
    }
*/

/*
 const numeros=[1,2,3,4,5];

 const dobles=numeros.map((n=> n*2);
 
 --> [2,4,6,8,10]
*/


export default function RootLayout({children}:RootLayoutProps) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        {children}
        </body>
    </html>
    )
}