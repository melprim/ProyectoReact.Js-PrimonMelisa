import React from 'react'
import Item from '../item/Item'
import Loader from '../loader/Loader'

const ItemList = ({cortinasList}) => {

  return (
    <>
        {!cortinasList ? <Loader/> : cortinasList.map((cortinas) => <Item key={cortinas.id} {...cortinas}/>)}
    </>
  )
}

export default ItemList