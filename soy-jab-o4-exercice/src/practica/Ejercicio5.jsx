import React from 'react'

function Ejercicio5({lista,productoNuevo,carrito,agregarAlCarrito,guardarTexto,eliminarProductDelCarrito}) {
    
        {console.log(lista.length)
        }
        
  return (
    <>
    <div><span>
    
    🟡 Nivel medio
    <br />
    {/* Lista de la compra. Un array con 5 productos pintado con .map(). Debajo: “Tienes 5 productos en la lista”. Ese número no puede estar escrito a mano. */}
    Añadir productos. Partiendo del 4, un botón “Añadir” que mete “Producto nuevo 1”, “Producto nuevo 2”... en la lista. El número del texto debe actualizarse solo. <br />
    Eliminar productos. Cada producto lleva un botón ❌ que lo quita. Cuando no quede ninguno, aparece “🛒 Lista vacía”. <br />
    Favoritos. Una lista de 5 canciones, cada una con un botón 🤍. Al pulsarlo pasa a ❤️, y al pulsarlo otra vez vuelve a 🤍. Arriba: “Tienes X favoritas”. Giro: piensa en cómo hiciste los reservados de los reyes, pero ahora hay que poder quitar también. <br /></span>
    </div>

    <div>
        <span>Lista:</span>

        {lista.map((product,index)=>
          
            <li key={index}>
             {index+1}.{product}
            </li>
        )}
        <hr />
        <span>Total</span>: 
        <span>Tienes {lista.length} Productos en la Lista.</span><br />
        <button onClick={productoNuevo}>añadir</button> <br />
        <hr />
        <label htmlFor="">agregar producto a la compra</label>   <input type="text" onChange={guardarTexto} />

        {carrito.length === 0 ?<p>El carrito esta Vacio</p>       
            
           
        :carrito.map((product,index)=>
            <li key={index}>{product} <button onClick={()=> eliminarProductDelCarrito(index)} 
           style={{border:"1px solid black",borderRadius:"2px"}}> ❌ </button>  </li>           
          
      )}
      <button onClick={agregarAlCarrito}>Agregar prodcut</button>    
    </div>
    </>
  )
}

export default Ejercicio5