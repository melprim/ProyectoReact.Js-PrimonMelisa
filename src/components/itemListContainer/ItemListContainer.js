import React from 'react';
import ItemCount from '../itemCount/ItemCount';
import '../itemListContainer/ItemListContainer.css';

const ItemListContainer = ({gretings}) => {
  return (
    <>
      <h1 className='saludo'>{gretings}</h1>
      <div className='divContador'>
        <ItemCount stock={10} onAdd={(contador)=>{localStorage.setItem('Carrito', JSON.stringify(`${contador}`)) 
        alert(`Agregaste ${contador} cantidad al carrito.`)
        }}
        
        />

      </div>
    </>
  )
}

export default ItemListContainer




