import React, { useEffect, useState } from 'react';
import '../itemListContainer/ItemListContainer.css';
import ItemList from './ItemList';
import cortinas from '../../data/data';


const ItemListContainer = () => {

  const getCortinas = (confirmacion) => new Promise ((res, err) =>{
    setTimeout(()=>{
      if(confirmacion){
        res(cortinas)
      }else{
        err("Acceso rechazado")
      }
    }, 2000)
  })

  const[cortinasList, setCortinasList] = useState()
    useEffect(()=>{
      getCortinas(true) 
      .then(cortinasList => setCortinasList(cortinasList))
    }, [])

  return (
    <div className='contenedorProductos'>
      <h1 className='saludo'>TIENDA DE CORTINAS ON-LINE</h1>
      <div className='listaProductos'>
        {cortinasList && <ItemList cortinasList={cortinasList} />  }
      </div>
    </div>
  )
}

export default ItemListContainer




