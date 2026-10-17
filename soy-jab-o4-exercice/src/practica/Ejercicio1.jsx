import React, { useEffect, useState } from 'react'
import Tarjeta from './Tarjeta';
import Ejercicio2 from './Ejercicio2';
import Ejercicio5 from './Ejercicio5';
import Ejercicio9 from './Ejercicio9';

/* =========================================================
   ESTILOS (CSS en línea guardado en objetos para reutilizarlo)
   ========================================================= */

const colores = {
  fondo: "#EEF1F5",
  superficie: "#FFFFFF",
  tinta: "#1E2430",
  tintaSuave: "#5B6474",
  borde: "#DCE1E8",
  basico: "#2E9E6B",
  medio: "#D08A12",
  avanzado: "#D3423A",
}

const pagina = {
  minHeight: "100vh",
  backgroundColor: colores.fondo,
  color: colores.tinta,
  fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif",
  padding: "40px 20px",
}

const contenedor = {
  maxWidth: "1000px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  gap: "40px",
}

const tituloNivel = (color) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  fontSize: "20px",
  fontWeight: "700",
  color: colores.tinta,
  margin: "0 0 16px 0",
  paddingBottom: "8px",
  borderBottom: `3px solid ${color}`,
})

const bloqueEjercicio = (color) => ({
  backgroundColor: colores.superficie,
  borderLeft: `5px solid ${color}`,
  borderRadius: "10px",
  padding: "20px 24px",
  marginBottom: "16px",
  boxShadow: "0 1px 2px rgba(30, 36, 48, 0.06)",
})

const tituloEjercicio = {
  fontSize: "17px",
  fontWeight: "600",
  margin: "0 0 6px 0",
  display: "flex",
  alignItems: "center",
  gap: "10px",
}

const descripcion = {
  fontSize: "14px",
  lineHeight: "1.6",
  color: colores.tintaSuave,
  margin: "0 0 16px 0",
  maxWidth: "70ch",
}

const zonaDemo = {
  backgroundColor: "#F7F9FB",
  border: `1px dashed ${colores.borde}`,
  borderRadius: "8px",
  padding: "20px",
}

const etiquetaPendiente = {
  fontSize: "12px",
  fontWeight: "500",
  color: colores.tintaSuave,
  backgroundColor: "#E6EAF0",
  padding: "2px 10px",
  borderRadius: "999px",
}

const etiquetaHecho = {
  fontSize: "12px",
  fontWeight: "500",
  color: "#1F7A52",
  backgroundColor: "#DDF3E8",
  padding: "2px 10px",
  borderRadius: "999px",
}

/* ========================================================= */

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
    <div style={pagina}>
      <div style={contenedor}>

        {/* ===== CABECERA ===== */}
        <header>
          <h1 style={{ fontSize: "32px", fontWeight: "800", margin: "0 0 8px 0", letterSpacing: "-0.5px" }}>
            Mis ejercicios de React
          </h1>
          <p style={{ fontSize: "16px", color: colores.tintaSuave, margin: "0 0 20px 0" }}>
            Práctica de props, estado, listas y eventos, de lo básico a lo avanzado.
          </p>

          {/* Cómo trabajaremos */}
          {/* Inténtalo tú primero, aunque no te salga. Ahí es donde se aprende.
          Cuando termines uno (o te atasques), mándame captura del código y del navegador.
          Yo te digo qué has hecho bien, qué se puede mejorar y por qué. Si te atascas, te doy una pista, no la solución.
          No pases al siguiente hasta que el anterior funcione. */}
          <div style={{
            backgroundColor: colores.superficie,
            border: `1px solid ${colores.borde}`,
            borderRadius: "10px",
            padding: "14px 18px",
            fontSize: "14px",
            lineHeight: "1.6",
            color: colores.tintaSuave,
          }}>
            <strong style={{ color: colores.tinta }}>Cómo trabajo:</strong> lo intento primero yo solo, pido pistas
            si me atasco, y no paso al siguiente hasta que el anterior funcione.
          </div>
        </header>


        {/* ================= NIVEL BÁSICO ================= */}
        <section>
          <h2 style={tituloNivel(colores.basico)}>🟢 Nivel básico</h2>

          {/* Tarjeta de presentación */}
          <div style={bloqueEjercicio(colores.basico)}>
            <h3 style={tituloEjercicio}>
              Tarjeta de presentación <span style={etiquetaHecho}>Hecho</span>
            </h3>
            <p style={descripcion}>
              Crea un componente Tarjeta que reciba por props nombre, ciudad y color. Úsalo 3 veces con
              personas distintas, y que cada tarjeta tenga el borde de su color.
            </p>
            <div style={zonaDemo}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
                <Tarjeta nombre="Oscar" ciudad="Madrid" color="#4f6BED" />
                <Tarjeta nombre="Eliza" ciudad="Managua" color="#E5484D" />
                <Tarjeta nombre="Tesla" ciudad="Paris" color="#30A46C" />
              </div>
            </div>
          </div>


          {/* Modo día/noche */}
          <div style={bloqueEjercicio(colores.basico)}>
            <h3 style={tituloEjercicio}>
               Contador con límites y modo día/noche <span style={etiquetaHecho}>Hecho</span>
            </h3>
            <p style={descripcion}>
              Un botón que cambia el fondo de la página entre claro y oscuro. Giro: el texto del botón
              también cambia (“🌙 Modo noche” / “☀️ Modo día”). Pista: el estado puede ser true o false.
            </p>
            <div
              className="cambiar-fondo"
              style={{
                background: color,
                border: `1px solid ${colores.borde}`,
                borderRadius: "8px",
                padding: "20px",
                transition: "background 0.3s ease",
              }}
            >
              <Ejercicio2 cambiarNoche={cambiarFondo} cambiarDia={fondoBlanco}  cambiarTema={cambiarTema} oscuro={oscuro} />
            </div>
          </div>
        </section>


        {/* ================= NIVEL MEDIO ================= */}
        <section>
          <h2 style={tituloNivel(colores.medio)}>🟡 Nivel medio</h2>

          {/* Lista de la compra. Un array con 5 productos pintado con .map(). Debajo: “Tienes 5 productos en la lista”. Ese número no puede estar escrito a mano. */}

          {/* Añadir + Eliminar productos */}
          <div style={bloqueEjercicio(colores.medio)}>
            <h3 style={tituloEjercicio}>
              Añadir y eliminar productos <span style={etiquetaHecho}>Hecho</span>
            </h3>
            <p style={descripcion}>
              <strong>Añadir:</strong> partiendo del 4, un botón “Añadir” que mete “Producto nuevo 1”,
              “Producto nuevo 2”... en la lista. El número del texto debe actualizarse solo.
              <br />
              <strong>Eliminar:</strong> cada producto lleva un botón ❌ que lo quita. Cuando no quede
              ninguno, aparece “🛒 Lista vacía”.
            </p>
            <div style={zonaDemo}>
              <Ejercicio5 lista={compra} productoNuevo={productoNuevo}
               carrito={carrito} agregarAlCarrito={agregarAlCarrito} guardarTexto={guardarTexto} eliminarProductDelCarrito={eliminarProductDelCarrito}
               />
            </div>
          </div>

          {/* Favoritos */}
          <div style={bloqueEjercicio(colores.medio)}>
            <h3 style={tituloEjercicio}>
              Favoritos <span style={etiquetaPendiente}>Pendiente</span>
            </h3>
            <p style={{ ...descripcion, margin: 0 }}>
              Una lista de 5 canciones, cada una con un botón 🤍. Al pulsarlo pasa a ❤️, y al pulsarlo otra
              vez vuelve a 🤍. Arriba: “Tienes X favoritas”. Giro: piensa en cómo hiciste los reservados de
              los reyes, pero ahora hay que poder quitar también.
            </p>
          </div>
        </section>


        {/* ================= NIVEL AVANZADO ================= */}
        <section>
          <h2 style={tituloNivel(colores.avanzado)}>🔴 Nivel avanzado</h2>

          {/* Votaciones. Tres opciones (por ejemplo, tres lenguajes de programación), cada una con su botón “Votar”. El botón tiene que ser un componente hijo que reciba el texto y la función por props, y los votos se guardan en el padre. Giro: guarda los tres contadores en un solo estado que sea un objeto: { react: 0, vue: 0, angular: 0 }. */}
          <div style={bloqueEjercicio(colores.avanzado)}>
            <h3 style={tituloEjercicio}>
              Votaciones <span style={etiquetaHecho}>Hecho</span>
            </h3>
            <p style={descripcion}>
              Tres lenguajes, cada uno con su botón “Votar” como componente hijo. Los votos se guardan en
              el padre, en un solo estado que es un objeto.
            </p>
            <div className="Votaciones" style={{ ...zonaDemo, display: "flex", flexDirection: "column", gap: "12px" }}>
              <Ejercicio9 nombre='React' votos={contador.React} contarVotos={contarVotos} />
              <Ejercicio9 nombre="Vue" votos={contador.Vue} contarVotos={contarVotos} />
              <Ejercicio9 nombre="Angular" votos={contador.Angular} contarVotos={contarVotos} />
            </div>
          </div>

          {/* Mini carrito */}
          <div style={bloqueEjercicio(colores.avanzado)}>
            <h3 style={tituloEjercicio}>
              Mini carrito <span style={etiquetaPendiente}>Pendiente</span>
            </h3>
            <p style={{ ...descripcion, margin: 0 }}>
              4 productos con precio. Cada uno con “Añadir al carrito” (se puede añadir el mismo varias
              veces). Muestra la lista del carrito, el total en euros y un botón “Vaciar carrito”. Si está
              vacío, mensaje con ternario.
            </p>
          </div>

          {/* El regreso de los reyes */}
          <div style={bloqueEjercicio(colores.avanzado)}>
            <h3 style={tituloEjercicio}>
              👑 El regreso de los reyes <span style={etiquetaPendiente}>Pendiente</span>
            </h3>
            <p style={{ ...descripcion, margin: 0 }}>
              En tu proyecto de los reyes: cada chip de rey reservado tiene una ❌ para cancelar la reserva.
              El rey vuelve a la galería y su precio se resta del total. Y un botón “Cancelar todas las
              reservas”. Es el jefe final: lo usa todo.
            </p>
          </div>
        </section>

      </div>
    </div>
  )
}

export default Ejercicio1