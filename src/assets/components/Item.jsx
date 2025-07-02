import React from 'react';

function Item({ item, deleteItem, editItem }) {
  return (
    <li>
      {item.value}
      <button className="btn btn-warning" onClick={() => editItem(item)}>Editar</button>
      <button className="btn btn-danger"  onClick={() => deleteItem(item.id)}>Eliminar</button>
    </li>
  );
}

export default Item;
