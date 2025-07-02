import React, { useState, useEffect } from 'react';

function Form({ addOrUpdateItem, itemToEdit }) {
  const [nombre, setNombre] = useState('');
  const [asignatura, setAsignatura] = useState('');
  const [promedio, setPromedio] = useState('');

  useEffect(() => {
    if (itemToEdit) {
      setNombre(itemToEdit.nombre);
      setAsignatura(itemToEdit.asignatura);
      setPromedio(itemToEdit.promedio);
    }
    else {
      setNombre('');
      setAsignatura('');
      setPromedio('');
    }
  }, [itemToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre && asignatura && promedio) {
      addOrUpdateItem( { nombre, asignatura, promedio: parseFloat(promedio) } );
      setNombre('');
      setAsignatura('');
      setPromedio('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='formulario'>
      
      <h2>{itemToEdit ? 'Editar Evaluación' : 'Agregar Nueva Evaluacíon'}</h2>
      <input
        type="text"
        placeholder="Ej: Juan Perez"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="text"
        placeholder="Ej: Matematicas"
        value={asignatura}
        onChange={(e) => setAsignatura(e.target.value)}
      />
      <input
        type="number"
        placeholder="Ej: 5.5"
        value={promedio}
        onChange={(e) => setPromedio(e.target.value)}
      />

      <button className="btn btn-primary" type="submit">
        { itemToEdit ? 'Actualizar Evaluación' : 'Agregar Evaluación' }
      </button>

    </form>
    
  );
}

export default Form;
