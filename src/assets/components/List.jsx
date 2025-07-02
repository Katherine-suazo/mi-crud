import React from 'react';
import Item from './Item';

function List({ items, deleteItem, editItem }) {
  return (
    <div className='lista-evaluaciones'>
      <h2>Evaluaciones Guardadas</h2>
      <ul>
        {items.map(item => (
          <Item
            key={item.id}
            item={item}
            deleteItem={deleteItem}
            editItem={editItem}
          />
        ))}
      </ul>
    </div>
  );
}

export default List;

