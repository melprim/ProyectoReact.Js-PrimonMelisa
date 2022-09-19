import { createContext, useState } from 'react'

const CarritoContext = createContext()

const CarritoProvider = (props) => {
    //Almaceno el carrito en un estado
  const [carrito, setCarrito] = useState ([])

  const agregarAlCarrito = (id, quantity, tipoCortina, precio) => {
        // si existe la cortina en el carrito cambiamos cantidad, si no pusheamos la "nueva" cortina (que aún no esta en el array).
        if(carrito.some(cortinaEnCarrito => cortinaEnCarrito.id === id)){
            let cortinaExistente = (carrito.find(cortinaEnCarrito => cortinaEnCarrito.id === id))
            cortinaExistente.quantity += quantity
            console.log("Producto Existente", carrito)
        }else{
            const auxCarrito = carrito
            let nuevaCortina = {
                id: id,
                quantity: quantity,
                tipoCortina: tipoCortina,
                precio: precio
            }
            auxCarrito.push(nuevaCortina)
            setCarrito(auxCarrito)
            console.log("Nueva Cortina", carrito)
        }
    }
    // Esta sería la funcion removeItem
    const eliminarCortinaCarrito = (cortina) => {
        const auxCarrito = carrito
        auxCarrito.splice(auxCarrito.findIndex(cortina.id), 1)
        setCarrito(auxCarrito)
    }
    // Funcion clear() vaciamos el carrito por completo.
    const vaciarCarrito = () => {
        const auxCarrito = ([])
        setCarrito(auxCarrito)
    }

    return(
      <CarritoContext.Provider value = {{carrito, agregarAlCarrito, eliminarCortinaCarrito, vaciarCarrito}}>
        {props.children}
      </CarritoContext.Provider>
    )


}

export  {CarritoContext, CarritoProvider}