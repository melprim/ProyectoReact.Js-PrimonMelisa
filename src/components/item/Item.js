import React from 'react';
import "./Item.css"

const Item = ({id, tipoCortina, tipoTela, color, ancho, alto, precio, stock, imagen }) => {

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
            <div className='botonDetail'>
                <button onClick={()=>{console.log("hiciste click")}}>Ver más detalles</button>
            </div>
        </div>
    )
}

export default Item

