import {React, useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import './ItemDetailContainer.css'
import cortinas from '../../data/data';
import {useParams} from 'react-router-dom';

const ItemDetailContainer = () => {
  const [cortinaDetail, setCortinaDetail] = useState();  
 
  const {id} = useParams ()

  useEffect(() => {
    const getCortinaDetail = () => new Promise ((res, err) =>{
    setTimeout(()=>res(cortinas.find(cortinas=>cortinas.id === Number(id))),1500)
    })
      getCortinaDetail()
      .then(cortinaDetail => setCortinaDetail(cortinaDetail))
    }, [id] )

  return (
        <div className='contenedorItemDetail'>
            {cortinaDetail && <ItemDetail {...cortinaDetail} />}
        </div>
  )
}

export default ItemDetailContainer;