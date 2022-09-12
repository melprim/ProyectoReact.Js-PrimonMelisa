import {React, useEffect, useState } from 'react';
import getCortinaDetail from '../../app/api';
import ItemDetail from './ItemDetail';
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {

  const [cortinaDetail, setCortinaDetail] = useState({});  
  useEffect(() => {
      getCortinaDetail()
      .then((cortinaDetail) => {
        setCortinaDetail(cortinaDetail)
        })
    },[])

  return (
        <div className='contenedorItemDetail'>
            {cortinaDetail && <ItemDetail cortina={cortinaDetail} />}
        </div>
  )
}

export default ItemDetailContainer;