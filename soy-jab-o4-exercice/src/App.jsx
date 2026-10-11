
import MyComponents from './components/MyComponents';
import { useState } from 'react'
import './App.css'

// =====================================================================
// 1. DATOS DE LOS REYES
// Están fuera del componente porque nunca cambian.
// Así no se vuelven a crear cada vez que React repinta la página.
// =====================================================================
const reyes = [
  { nombre: "Atanagildo", color: "darkolivegreen", precio: 178 },
  { nombre: "Ervigio",    color: "crimson",        precio: 169 },
  { nombre: "Ataúlfo",    color: "peru",           precio: 81  },
  { nombre: "Leogivildo", color: "darkmagenta",    precio: 126 },
  { nombre: "Recesvinto", color: "royalblue",      precio: 141 },
  { nombre: "Sisebuto",   color: "teal",           precio: 69  },
]

// =====================================================================
// 2. CREAR EL NOMBRE DEL ARCHIVO DE IMAGEN
// "Ataúlfo" → "rey_ataulfo.png"
//
// - toLowerCase()  → pasa todo a minúsculas.
// - normalize("NFD") → separa cada letra de su tilde ("ú" → "u" + "´").
// - replace(/[\u0300-\u036f]/g, "") → borra esas tildes sueltas.
//   Es una expresión regular que abarca todas las tildes que existen.
// =====================================================================
const crearNameImagen = (nombre) => {
  const sinTilde = nombre
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")

  return `rey_${sinTilde}.png`
}

// =====================================================================
// 3. REYES CON SU IMAGEN
// Creamos un array nuevo: cada rey con todos sus datos (...rey)
// más una propiedad nueva "imagen" con la ruta a su archivo.
// =====================================================================
const reyesConImagen = reyes.map((rey) => {
  const ruta = new URL(
    `./assets/reyes/${crearNameImagen(rey.nombre)}`,
    import.meta.url
  ).href

  return { ...rey, imagen: ruta }
})


// =====================================================================
// COMPONENTE PRINCIPAL
// ====================================================================
function App() {
  
  // ---------- ESTADOS ----------
  // total      → dinero gastado en reservas.
  // reservados → nombres de los reyes ya reservados.
  const [total, setTotal] = useState(0)
  const [reservados, setReservados] = useState([])

  // ---------- RESERVAR UN REY ----------
  // Recibe el rey completo y hace dos cosas:
  // 1. Suma su precio al total.
  // 2. Añade su nombre a la lista de reservados.
  // prev = el valor más reciente del estado (actualización funcional).
  // [...prev, rey.nombre] = copia lo que había y añade el nombre nuevo.
  const anadirPrecio = (rey) => {
    setTotal((prev) => prev + rey.precio)
    setReservados((prev) => [...prev, rey.nombre])
  }

  // ---------- REYES QUE QUEDAN DISPONIBLES ----------
  // "De todos los reyes, quédate con los que NO estén en reservados."
  // - filter()   → recorre el array y se queda con los que cumplan la condición.
  // - includes() → devuelve true si el nombre está en la lista.
  // - !          → le da la vuelta: true pasa a false y viceversa.
  // Cada vez que cambia "reservados", React recalcula esta lista.
  const reyesDisponibles = reyesConImagen.filter(
    (rey) => !reservados.includes(rey.nombre)
  )


  return (
    <>
    <h1 className="titulo">Reyes visigodos</h1>

        {/* Panel del total y de los reyes reservados */}
        <header className="resumen">
        <p className="resumen-etiqueta">Total reservado</p>

        {/* key={total} hace que la animación se repita en cada suma */}
        <h2 className="resumen-total" key={total}>{total}€</h2>

        <div className="resumen-chips">
          {reservados.map((nombre) => (
            <span className="chip" key={nombre}>{nombre}</span>
          ))}
        </div>
      </header>

      <div className="contenedor-reyes">

      {reyesDisponibles.length === 0 ? (
        <span className="mensaje-vacio">👑Todos los reyes han sido reservados</span>
      )
      :(    
        reyesDisponibles.map((rey)=>(
        <MyComponents
        key={rey.nombre}
        nombre={rey.nombre}
        color={rey.color}
        precio={rey.precio}
        imgs={rey.imagen}
        onClick={()=>anadirPrecio(rey)}
        />
      )) 
      )}

      </div>
      
    </>
  )
}

export default App
