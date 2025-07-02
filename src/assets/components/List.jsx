import React from 'react';
import Item from './Item';

function List({ items, deleteItem, editItem }) {
  return (
    <div className='bordeEG'>
      <h2><strong>Evaluaciones Guardadas</strong></h2>

      <div className='border'>
        {items.map(item => (
          <Item key={item.id} item={item} deleteItem={deleteItem} editItem={editItem} />
        ))}
      </div>
      
    </div>
  );
}

export default List;

