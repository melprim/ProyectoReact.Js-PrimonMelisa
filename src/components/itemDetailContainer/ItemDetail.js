import React from 'react'
import ItemCount from '../itemCount/ItemCount';
import './ItemDetail.css'

const ItemDetail = ({cortina}) => {
   function onAdd(contador){
        alert(`Agregaste ${contador} cortinas al carrito`) 
    }
  return (
    <div className='divContenedor' id={cortina.id}>
            <div>
                <img src={cortina.imagen} alt=" " />
                <h2>Cortina: {cortina.tipoCortina} {cortina.tipoTela}</h2>
                <p>Precio: $ {cortina.precio}</p>
                <p>Descripcion: {cortina.descripcion} </p>
                <p>Disponibles: {cortina.stock} unidades</p>
            </div>
            <div>
                <ItemCount stock={cortina.stock} initial={1} onAdd={onAdd}/>
            </div>
    </div>
    )
}

export default ItemDetail