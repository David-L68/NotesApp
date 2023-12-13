import React from 'react'
import Item from './Item'

const ItemList = ({ items, onDeleteItem, handleShowModal }) => {
  return (
    <ul className='ItemList'>
      {items.map((item) => (
        <Item key={item.id} item={item} onDeleteItem={onDeleteItem} handleShowModal={handleShowModal} />
      ))}
    </ul>
  );
}

export default ItemList