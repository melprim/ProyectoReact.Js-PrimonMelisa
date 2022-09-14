import React, { useEffect, useState } from 'react';
import '../itemListContainer/ItemListContainer.css';
import ItemList from './ItemList';
import cortinas from '../../data/data';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {

  const[cortinasList, setCortinasList] = useState([])

  const{tiposId} = useParams()
  console.log(tiposId)
  useEffect(()=> {
    const getCortinas = () => new Promise (res =>{
        setTimeout(()=>{
            res(cortinas)
        }, 1500)
    })  

    if(tiposId){
    getCortinas() 
    .then(res => setCortinasList(res.filter((res) => res.tipoCortina === tiposId)))
    }else{
      getCortinas() 
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
