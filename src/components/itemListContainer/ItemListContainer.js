import React, { useEffect, useState } from 'react';
import '../itemListContainer/ItemListContainer.css';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { getItems } from '../../app/api';


const ItemListContainer = () => {

  const[cortinasList, setCortinasList] = useState([])
  const{tiposId} = useParams()
  
  useEffect(()=> {
    if(tiposId){
      getItems() 
      .then(res => setCortinasList(res.filter((res) => res.tipoCortina === tiposId)))
    }else{
      getItems() 
      .then(res => setCortinasList(res))
    }  
  }, [tiposId])

  return (
    <div className='contenedorProductos'>
      <h1 className='saludo'>TIENDA DE CORTINAS ON-LINE</h1>
      <div className='listaProductos'>
        <ItemList cortinasList={cortinasList} />
      </div>
    </div>
  );
}

export default ItemListContainer
