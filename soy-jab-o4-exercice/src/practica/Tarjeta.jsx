import React from 'react'

function Tarjeta({nombre,ciudad,color}) {
  return (
  
        <div style={{
      width: "220px",
      backgroundColor: "#FFFFFF",
      border: "1px solid #DCE1E8",
      borderTop: `4px solid ${color}`,
      borderRadius: "12px",
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "6px",
      textAlign: "center",
    }}>
      <div style={{
        width: "56px",
        height: "56px",
        borderRadius: "50%",
        backgroundColor: color,
        color: "#FFFFFF",
        fontSize: "24px",
        fontWeight: "700",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "8px",
      }}>
        {nombre.charAt(0)}
      </div>

      <span style={{ fontSize: "13px", color: "#8C96A6" }}>Hola, mi nombre es</span>
      <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#1E2430", margin: 0 }}>{nombre}</h3>
      <span style={{ fontSize: "14px", color: "#5B6474" }}>📍 {ciudad}</span>
    </div>
  )
}

export default Tarjeta