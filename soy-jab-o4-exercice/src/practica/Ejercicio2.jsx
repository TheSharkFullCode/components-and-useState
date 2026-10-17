import React, { useState } from 'react'

/* =========================================================
   ESTILOS
   ========================================================= */

const panel = {
  flex: "1 1 280px",
  backgroundColor: "#FFFFFF",
  border: "1px solid #DCE1E8",
  borderRadius: "12px",
  padding: "24px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "18px",
}

const tituloPanel = {
  fontSize: "15px",
  fontWeight: "600",
  color: "#5B6474",
  margin: 0,
}

const botonContador = {
  width: "56px",
  height: "56px",
  borderRadius: "12px",
  border: "1px solid #DCE1E8",
  backgroundColor: "#F7F9FB",
  color: "#1E2430",
  fontSize: "26px",
  fontWeight: "600",
  cursor: "pointer",
}

const botonReiniciar = {
  padding: "8px 18px",
  borderRadius: "999px",
  border: "none",
  backgroundColor: "#E6EAF0",
  color: "#5B6474",
  fontSize: "14px",
  fontWeight: "500",
  cursor: "pointer",
}

const botonEmoji = {
  width: "72px",
  height: "72px",
  borderRadius: "16px",
  border: "1px solid rgba(128, 128, 128, 0.25)",
  backgroundColor: "rgba(128, 128, 128, 0.08)",
  fontSize: "36px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}

const pista = {
  fontSize: "12px",
  margin: 0,
}

/* ========================================================= */

function Ejercicio2({cambiarNoche,cambiarDia,cambiarTema,oscuro}) {

    const [contador,setContador]=useState(0)

    const Restar=()=>{
        if(contador > 0){

            setContador(contador-1)
        }
    }

  return (
    <>
    <div className="caja-conten" style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>

        {/* ===== CONTADOR CON LÍMITES ===== */}
        <div style={panel}>
          <h3 style={tituloPanel}>Contador con límites</h3>

          <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            <button
              onClick={Restar}
              style={{ ...botonContador, opacity: contador === 0 ? 0.35 : 1 }}
              aria-label="Restar"
            >
              −
            </button>

            <span style={{
              fontSize: "56px",
              fontWeight: "800",
              color: "#1E2430",
              minWidth: "80px",
              textAlign: "center",
              fontVariantNumeric: "tabular-nums",
            }}>
              {contador}
            </span>

            <button
              onClick={()=>setContador((prev)=>prev + 1)}
              style={botonContador}
              aria-label="Sumar"
            >
              +
            </button>
          </div>

          <button onClick={()=>setContador(0)} style={botonReiniciar}>
            Reiniciar
          </button>
        </div>


        {/* ===== MODO DÍA / NOCHE ===== */}
        <div
          className="fondo"
          style={{
            ...panel,
            background: oscuro ? "#1E2430" : "#FFFFFF",
            borderColor: oscuro ? "#1E2430" : "#DCE1E8",
            transition: "background 0.3s ease",
          }}
        >
          <h3 style={{ ...tituloPanel, color: oscuro ? "#C9D1DC" : "#5B6474" }}>
            Modo día / noche
          </h3>

          <div style={{ display: "flex", gap: "16px" }}>
            <button onClick={cambiarDia} style={botonEmoji} aria-label="Fondo de día">☀️</button>
            <button onClick={cambiarNoche} style={botonEmoji} aria-label="Fondo de noche">🌛</button>
            <button onClick={cambiarTema} style={botonEmoji} aria-label="Cambiar tema">
              {oscuro ? "🌚":"🌞" }
            </button>
          </div>

          <p style={{ ...pista, color: "#8C96A6" }}>
            ☀️ y 🌛 cambian el fondo de fuera. {oscuro ? "🌚" : "🌞"} cambia este panel.
          </p>
        </div>

    </div>

    </>

  )
}

export default Ejercicio2