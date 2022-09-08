import React from 'react';
import ItemCount from '../itemCount/ItemCount';
import "./Item.css"

const Item = ({id, tipoCortina, tipoTela, color, ancho, alto, precio, stock, imagen}) => {
    function onAdd(contador){
        alert(`Agregaste ${contador} cortinas al carrito`) 
    }

    return (
        <div className='divContenedor' id={id}>
            <div className='divCortina'>
                <img src={imagen} alt=" " />
                <h2>Cortina: {tipoCortina} {tipoTela}</h2>
                <p>Medidas: {ancho}cm x {alto}cm</p>
                <p>Color: {color}</p>
                <p>Precio: ${precio}</p>
                <p>Disponibles: {stock} unidades</p>
            </div>
            <div className='divContador'>
                <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
            </div>
        </div>
    )
}

export default Item

