import React from 'react';
import './ItemCount.css';
import {useState} from 'react';

const ItemCount = ({stock=10, initial=0, onAdd}) => {
    const [contador, setContador] = useState(0) 

    return (
    <div className='contador '>
        <div className='controles'>
            <button className='btn btn-dark p-2 mx-1' onClick={()=>(contador < stock) ? setContador(contador + 1) : (" ") }>+</button>
            
            <h4 className='numeroContador '>{contador}</h4>

            <button className='btn btn-dark p-2 mx-1' onClick={()=>(contador > initial) ? setContador(contador - 1) : (" ")} disabled={contador === 0} >-</button>
        </div>
        <div>
            <button className='btn btn btn-light p-2 mx-1 border border-secondary' disabled={contador===0} onClick={()=>{onAdd(contador)}}>Agregar al Carrito</button>
            <h3 className='my-3'>Stock : {stock} </h3>
        </div>
    </div>
    )
}

export default ItemCount
