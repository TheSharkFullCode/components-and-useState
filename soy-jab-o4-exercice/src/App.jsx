import { useState } from 'react'

import './App.css'
import MyComponents from './components/MyComponents';

  const reyes=[
    {
      nombre:"Atanagildo",
      color:"darkolivegreen",
      precio:178
    },{
      nombre:"Ervigio",
      color:"crimson",
      precio:169
    },{
      nombre:"Ataúlfo",
      color:"peru",
      precio:81
    },{
      nombre:"Leogivildo",
      color:"darkmagenta",
      precio:126
    },{
      nombre:"Recesvinto",
      color:"royalblue",
      precio:141
    },{
      nombre:"Sisebuto",
      color:"teal",
      precio:69,
      
    }
  ]

function App() {
//RUTA
  const crearNameImagen=(nombre)=>{
    const SinTilde = nombre.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return `rey_${SinTilde}.png`

    
  };
   

  //Tdodo a minuscula como antes
  //Separa cada letra de su tilde .normalize()

  //replace.. borra toda esas tilde sueltas.
  //(/[\u0300-\u036f]/g, ""); es uan expresion regular, ,, todas las tildes q existe.


  console.log(crearNameImagen("Atanagildo"));

  console.log(reyes.map((rey)=>crearNameImagen(rey.nombre)) );

  //=====================================================================
  //IMAGENES AÑADIDAS EN UN NUEVO ARRAY CON LA RUTA ANTERIOR


  const  reyesConImagen = reyes.map((rey)=> {
    
    const Ruta = new URL(`./assets/reyes/${crearNameImagen(rey.nombre)}`, import.meta.url).href
    
    return {...rey, 
      imagen:Ruta }
    });
  
  console.log(reyesConImagen);
  
//================================================================================

  return (
    <>
    <h1 className="titulo">Reyes visigodos</h1>

      <div className="contenedor-reyes">

      {reyesConImagen.map((rey)=>(
        
        <MyComponents
        key={rey.nombre}
        nombre={rey.nombre}
        color={rey.color}
        precio={rey.precio}
        imgs={rey.imagen}
        />
      ))}

      </div>
      
    </>
  )
}

export default App
