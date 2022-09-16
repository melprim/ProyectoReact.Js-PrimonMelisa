import React from 'react'
import { Link } from 'react-router-dom'
import './ItemAgregado.css'

const ItemAgregado = () => {
  return (
    <div className='divAgregado'>
        <h3> Cortina Agregada</h3>
        <Link to="/carrito/">
            <button>Finalizar Compra</button>
        </Link>

    </div>
  )
}

export default ItemAgregado