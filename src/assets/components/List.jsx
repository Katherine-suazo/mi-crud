import React from 'react';
import Item from './Item';

function List({ items, deleteItem, editItem }) {
  return (
    <div className='bordeEG'>
      <h2><strong>Evaluaciones Guardadas</strong></h2>

      {items.length === 0 ? (
        <p style={{ color: '#777', fontStyle: 'italic' }}>
          No hay evaluaciones guardadas aún. ¡Agrega una!
        </p>
      ) : (
        <div>
          {items.map(item => (
            <Item
              key={item.id}
              item={item}
              deleteItem={deleteItem}
              editItem={editItem}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default List;

