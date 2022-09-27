import {React, useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import {useParams} from 'react-router-dom';
import { getItemById } from '../../app/api';

const ItemDetailContainer = () => {
  const [cortinaDetail, setCortinaDetail] = useState();  
  const {detalleId} = useParams ()


  useEffect(()=>{
    getItemById(detalleId)
    .then(cortinaDetail => setCortinaDetail(cortinaDetail))
  }, [detalleId])


  return (
        <div className='container my-5'>
            {cortinaDetail && <ItemDetail {...cortinaDetail} />}
        </div>
  )
}

export default ItemDetailContainer;