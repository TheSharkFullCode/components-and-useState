import React from 'react'

function MyComponents({nombre, color, precio, imgs}) {
    
  return (

    <article className="tarjeta" style={{"--color-rey":color}}>
      
    <div className="tarjeta-cabecera" style={{backgroundColor:color}}>
      <img className="tarjeta-img" src={imgs}  alt={nombre} />
    </div>

    <div className="tarjeta-info">
        <div>
            <p className="tarjeta-etiqueta">Rey Visigodo</p>
            <h2 className="tarjeta-nombre">{nombre} </h2>
        </div>        
        <span className="tarjeta-precio">Precio: {precio}€</span>
    </div>

    </article>

  )
}



export default MyComponents