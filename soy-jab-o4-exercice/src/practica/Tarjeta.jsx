import React from 'react'

function Tarjeta({nombre,ciudad,color}) {
  return (
  
    <div style={{border: `3px solid ${color} `, borderRadius:"10px", 
        display:"1", flexDirection:"column",  padding:"10px", justifyContent:"center", alignItems:"center" }}>
        <span style={{fontFamily:"monospace", fontSize:"19px"}} > Hola mi nombre es:</span><h3>{nombre}</h3>
        <span style={{fontFamily:"monospace", fontSize:"19px"}}> Y vivo en la ciudad de: {ciudad}</span>

    </div>
  )
}

export default Tarjeta