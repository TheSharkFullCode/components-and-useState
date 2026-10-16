import React, { useEffect, useState } from 'react'
import Tarjeta from './Tarjeta';
import Ejercicio2 from './Ejercicio2';
import Ejercicio5 from './Ejercicio5';
import Ejercicio9 from './Ejercicio9';

function Ejercicio1() {
  const [color,setColor]=useState("");
  const [oscuro,setOscuro]=useState(false);
  const [compra,setCompra]=useState(["Carne","Leche","huevos","pan","cereales"])
  const [carrito,setCarrito]=useState(["Tomate","Huevos","Cereales","Banano","uvas"])
  const [textoInput,setTextoInput]=useState("")
  
  const [contador,setContador]=useState({React:0,Angular:0,Vue:0})
   
  
  const contarVotos=(lenguaje)=>{
    const nuevoObjeto = {...contador, [lenguaje]:contador[lenguaje]+1}
    setContador(nuevoObjeto)
  }

  const cambiarFondo=()=>{
    setColor("black")
  }

  const fondoBlanco=()=>{
    setColor("white")
  }


  const cambiarTema=()=>{
    setOscuro(!oscuro)
  }
  const productoNuevo=()=>{

    const listaNueva = [...compra, `Producto Nuevo${compra.length-4}`];
    setCompra(listaNueva)
  }

  const agregarAlCarrito=()=>{
    const carritoActualizado = [...carrito, textoInput]
    setCarrito(carritoActualizado)
  }

  const guardarTexto=(e)=>{
    setTextoInput(e.target.value)

  }

  const eliminarProductDelCarrito=(indeABorrar)=>{
    console.log(indeABorrar);
    
    const carritoSinElProduct = carrito.filter((_,posicion)=>{ return posicion !== indeABorrar})
    setCarrito(carritoSinElProduct)
  }

  //“quédate con él si su posición NO es la que quiero borrar”
 


  return (
    <>
    <div>Ejercicio1</div>
    <span>Tarjeta de presentación. Crea un componente Tarjeta que reciba por props nombre, ciudad y color. Úsalo 3 veces con personas distintas, y que cada tarjeta tenga el borde de su color.</span> 
    <span>

        Contador con límites. Botones +1, −1 y Reiniciar. Giro: el contador nunca puede bajar de 0.
  Modo día/noche. Un botón que cambia el fondo de la página entre claro y oscuro. Giro: el texto del botón también cambia (“🌙 Modo noche” / “☀️ Modo día”). Pista: el estado puede ser true o false. <br />

🟡 Nivel medio

{/* Lista de la compra. Un array con 5 productos pintado con .map(). Debajo: “Tienes 5 productos en la lista”. Ese número no puede estar escrito a mano. */}
Añadir productos. Partiendo del 4, un botón “Añadir” que mete “Producto nuevo 1”, “Producto nuevo 2”... en la lista. El número del texto debe actualizarse solo.
Eliminar productos. Cada producto lleva un botón ❌ que lo quita. Cuando no quede ninguno, aparece “🛒 Lista vacía”. <br />
Favoritos. Una lista de 5 canciones, cada una con un botón 🤍. Al pulsarlo pasa a ❤️, y al pulsarlo otra vez vuelve a 🤍. Arriba: “Tienes X favoritas”. Giro: piensa en cómo hiciste los reservados de los reyes, pero ahora hay que poder quitar también. <br />
    </span>

        <div style={{display:"flex",margin:"20px", gap:"10px",}}>
        <Tarjeta nombre="Oscar" ciudad="Madrid" color="blue" />
        <Tarjeta nombre="Eliza" ciudad="Managua" color="red" />
        <Tarjeta nombre="Tesla" ciudad="Paris" color="green" />
        </div>

    <div className="cambiar-fondo" style={{background:color, border:"2px solid blue", borderRadius:"4px"}} >
      <Ejercicio2 cambiarNoche={cambiarFondo} cambiarDia={fondoBlanco}  cambiarTema={cambiarTema} oscuro={oscuro} />

    </div>

    <div style={{margin:"20px", borderRadius:"4px", border:"solid green",padding:"20px"}}>
      <Ejercicio5 lista={compra} productoNuevo={productoNuevo}
       carrito={carrito} agregarAlCarrito={agregarAlCarrito} guardarTexto={guardarTexto} eliminarProductDelCarrito={eliminarProductDelCarrito}
       />
    </div>
      
   🔴 Nivel avanzado

  {/* Votaciones. Tres opciones (por ejemplo, tres lenguajes de programación), cada una con su botón “Votar”. El botón tiene que ser un componente hijo que reciba el texto y la función por props, y los votos se guardan en el padre. Giro: guarda los tres contadores en un solo estado que sea un objeto: { react: 0, vue: 0, angular: 0 }. */}
  Mini carrito. 4 productos con precio. Cada uno con “Añadir al carrito” (se puede añadir el mismo varias veces). Muestra la lista del carrito, el total en euros y un botón “Vaciar carrito”. Si está vacío, mensaje con ternario.
  👑 El regreso de los reyes. Este sí, en tu proyecto de los reyes. Haz que cada chip de rey reservado tenga una ❌ para cancelar la reserva: el rey vuelve a la galería y su precio se resta del total. Y añade un botón “Cancelar todas las reservas”. Es el jefe final: lo usa todo.
  Cómo trabajaremos
  {/* Inténtalo tú primero, aunque no te salga. Ahí es donde se aprende.
  Cuando termines uno (o te atasques), mándame captura del código y del navegador.
  Yo te digo qué has hecho bien, qué se puede mejorar y por qué. Si te atascas, te doy una pista, no la solución.
  No pases al siguiente hasta que el anterior funcione. */} <br /> <br />

    <div className="Votaciones">

      <Ejercicio9 nombre='React' votos={contador.React} contarVotos={contarVotos} />
      <Ejercicio9 nombre="Vue" votos={contador.Vue} contarVotos={contarVotos} />
      <Ejercicio9 nombre="Angular" votos={contador.Angular} contarVotos={contarVotos} />
    </div>

    </>
  )
}

export default Ejercicio1