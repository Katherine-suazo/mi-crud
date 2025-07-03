import React from 'react';

function Item({ item, deleteItem, editItem }) {
  return (

    <div>

      <div className='textLeft'>
        <p><strong>Alumno: {item.nombre} </strong></p>
        <p>Asignatura: {item.asignatura}</p>
        <p>Promedio: <strong>{parseFloat(item.promedio).toFixed(1)}</strong> </p>
        {item.promedio == 7 && <span className='destacado'>Destacado</span>}
      </div>

      <div className='botones'>
        <button className="btn btn-outline-warning botones" onClick={() => editItem(item)}>Editar</button>
        <button className="btn btn-outline-danger botones"  onClick={() => deleteItem(item.id)}>Eliminar</button>
      </div>

    </div>
  );
}

export default Item;
