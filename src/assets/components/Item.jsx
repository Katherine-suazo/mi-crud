import React from 'react';

function Item({ item, deleteItem, editItem }) {
  return (

    <li className="item">

      <p><strong>Alumno:</strong> {item.nombre}</p>
      <p><strong>Asignatura:</strong> {item.asignatura}</p>
      <p><strong>Promedio:</strong> {item.promedio}</p>

      {item.promedio == 7 && <span className='destacado'>Destacado</span>}

      <button className="btn btn-warning" onClick={() => editItem(item)}>Editar</button>
      <button className="btn btn-danger"  onClick={() => deleteItem(item.id)}>Eliminar</button>

    </li>
  );
}

export default Item;
