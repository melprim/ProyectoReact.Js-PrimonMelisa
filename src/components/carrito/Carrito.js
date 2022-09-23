import React from 'react';
import './Carrito.css';
import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import CarritoItemList from './CarritoItemList';
import { CarritoVacio } from './CarritoVacio';


const Carrito = () => {
  const {carrito} = useContext(CarritoContext)
    return (
        <div className='container'>
            <h1 className='saludo'>CARRITO DE COMPRAS</h1>
            {carrito.length > 0 ? <CarritoItemList/> : <CarritoVacio/>}
        </div>
    );
}

export default Carrito