import React from 'react';

function Item({ item, deleteItem, editItem }) {
  return (

    <div>

      <div className='textLeft'>
        <p><strong>Alumno:</strong> {item.nombre}</p>
        <p>Asignatura: {item.asignatura}</p>
        <p>Promedio: <strong>{item.promedio}</strong></p>
        {item.promedio == 7.0 && <span className='destacado'>Destacado</span>}
      </div>

      <div className='botones'>
        <button className="btn btn-outline-warning botones" onClick={() => editItem(item)}>Editar</button>
        <button className="btn btn-outline-danger botones"  onClick={() => deleteItem(item.id)}>Eliminar</button>
      </div>

    </div>
  );
}

export default Item;
