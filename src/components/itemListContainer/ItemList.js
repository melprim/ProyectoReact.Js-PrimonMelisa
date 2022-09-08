import React from 'react'
import Item from '../item/Item'

const ItemList = ({cortinasList}) => {

  return (
    <>
        {cortinasList.map((cortinas) => <Item key={cortinas.id} {...cortinas}/>)}
    </>
  )
}

export default ItemList