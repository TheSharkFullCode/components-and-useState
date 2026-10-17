import React from 'react'

function Ejercicio5({lista,productoNuevo,carrito,agregarAlCarrito,guardarTexto,eliminarProductDelCarrito}) {
    
        {console.log(lista.length)
        }
        
  return (
    <>
    

    <div>
        <span style={{fontWeight:"600", color:"#1f2937"}}>Lista:</span>
        <ul style={{listStyle:"none",padding:"0",marginTop:"8px",
          backgroundColor:"white",border:"1px solid #e5e7eb",overflow:"hidden",borderRadius:"8px"
        }}>

        {lista.map((product,index)=>
          
          <li key={index} style={{display:"flex",alignItems:"center",gap:"12px",padding:"8px 12px",
            borderBottom:index === lista.length -1 ? "none" : "1px solid #f3f4f6"
          }}>
            <span style={{ width:"24px", height:"24px", borderRadius:"50%",alignItems:"center",
              backgroundColor:"#f3f4f6", color:"#4b5563",fontSize:"12px",display:"flex",
              justifyContent:"center"
            }}>

             {index+1}
            </span>
            <span style={{color:index >= 5 ? "#d97706":"#374151",
              fontWeight:index >= 5 ? "500":"400"
            }}>
              {product}
            </span>
            {index >= 5 && (
              <span style={{marginLeft:"auto",fontSize:"12px",
                backgroundColor:"#fef3c7",color:"#b45309",padding:"2px 8px",
                borderRadius:"999px"
              }}>
                Nuevo
              </span>
            )}
            </li>
        )}
        </ul>
          
          <div style={{display:"flex", alignItems:"center", justifyContent:"space-between",
          gap:"12px", flexWrap:"wrap", marginTop:"12px"}}>
          <p style={{margin:0, color:"#374151"}}>
            Total: tienes <span style={{fontWeight:"700", color:"#2563eb"}}>{lista.length}</span> productos en la lista.
          </p>
          <button onClick={productoNuevo} style={{padding:"8px 16px", borderRadius:"8px", border:"none",
            backgroundColor:"#1E2430", color:"#FFFFFF", fontWeight:"500", cursor:"pointer"}}>
            + Añadir producto
          </button>
        </div>

                <div style={{marginTop:"28px", paddingTop:"20px", borderTop:"1px solid #e5e7eb"}}>
          <span style={{fontWeight:"600", color:"#1f2937"}}>Carrito:</span>

          <div style={{display:"flex", gap:"8px", marginTop:"8px"}}>
            <input type="text" onChange={guardarTexto} placeholder="Escribe un producto..."
              style={{flex:1, padding:"8px 12px", border:"1px solid #DCE1E8", borderRadius:"8px", fontSize:"14px"}} />
            <button onClick={agregarAlCarrito} style={{padding:"8px 16px", borderRadius:"8px", border:"none",
              backgroundColor:"#1E2430", color:"#FFFFFF", fontWeight:"500", cursor:"pointer"}}>
              Agregar
            </button>
          </div>

          {carrito.length === 0 ?
            <p style={{textAlign:"center", color:"#8C96A6", padding:"24px", margin:"12px 0 0",
              border:"1px dashed #DCE1E8", borderRadius:"8px"}}>
              🛒 El carrito está vacío
            </p>
          :
            <ul style={{listStyle:"none", padding:0, margin:"12px 0 0", backgroundColor:"#FFFFFF",
              border:"1px solid #e5e7eb", borderRadius:"8px", overflow:"hidden"}}>
              {carrito.map((product,index)=>
                <li key={index} style={{display:"flex", alignItems:"center", justifyContent:"space-between",
                  padding:"8px 12px", color:"#374151",
                  borderBottom: index === carrito.length - 1 ? "none" : "1px solid #f3f4f6"}}>
                  {product}
                  <button onClick={()=> eliminarProductDelCarrito(index)} aria-label={`Eliminar ${product}`}
                    style={{border:"none", background:"transparent", cursor:"pointer", fontSize:"14px",
                    padding:"4px 8px", borderRadius:"6px"}}>
                    ❌
                  </button>
                </li>
              )}
            </ul>
          }
        </div> 

    </div>
    </>
  )
}

export default Ejercicio5