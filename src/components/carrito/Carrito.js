import React from 'react';
import './Carrito.css';
import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';

const Carrito = () => {
  const {carrito} = useContext(CarritoContext)
  console.log(carrito)
    return (
        <div >
            <h1>Carrito de compras</h1>
            {carrito.length > 0 ? carrito.map((carrito) => carrito.quantity + carrito.tipoCortina) : "Carrito Vacio"}
        </div>
    );
}

export default Carrito