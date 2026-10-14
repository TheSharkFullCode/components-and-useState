import React, { useState } from 'react'

function Ejercicio2({cambiarNoche,cambiarDia}) {

    const [contador,setContador]=useState(0)

    const Restar=()=>{
        if(contador > 0){

            setContador(contador-1)
        }
    }

  return (
    <>
    <div className="caja-conten" style={{display:"flex"}}>

        <div style={{display:"flex", borderRadius:"8px", padding:"190px",gap:"60px" }}>
        <h1>Contador con Limites:</h1>
        <button onClick={()=>setContador((prev)=>prev + 1)} style={{borderRadius:"3px",width:"80px",height:"60px"}}>Sumar</button>
        <button onClick={Restar}style={{borderRadius:"3px",width:"80px",height:"60px"}}>Restar</button>
        <h3>{contador}</h3>
        <button onClick={()=>setContador(0)} style={{borderRadius:"3px",width:"80px",height:"60px"}}>Reiniciar</button>  

        </div>

        <div className="fondo" style={{ width:"100vh", display:"flex",gap:"80px"}}>             
        
        <div onClick={cambiarDia}><h1 style={{fontSize:"82px"}}>☀️</h1> </div>
        <div onClick={cambiarNoche} ><h1 style={{fontSize:"82px"}}>🌛</h1></div> 
        </div>

    </div>

    </>

  )
}

export default Ejercicio2