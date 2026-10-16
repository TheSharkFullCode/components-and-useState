import React from 'react'

function Ejercicio9({nombre,votos,contarVotos}) {
  return (
    <div>
        ¿Cuesl es tu lenguaje Favorito:? {nombre}  <button onClick={()=>contarVotos(nombre)}>Votar</button>: {votos}

    </div>
  )
}

export default Ejercicio9