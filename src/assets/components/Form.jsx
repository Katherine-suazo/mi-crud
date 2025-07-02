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
    <form onSubmit={handleSubmit} className='bordeFormulario'>
      
        <h2>{itemToEdit ? 'Editar Evaluación' : 'Agregar Nueva Evaluacíon'}</h2>

        <div className='textLeft'>
          <label>Nombre del Alumno:</label>
          <input className='form-control' type="text" placeholder="Ej: Juan Perez" value={nombre} onChange={(e) => setNombre(e.target.value)}/>

          <label className='espacio'>Asignatura:</label>
          <input className='form-control' type="text" placeholder="Ej: Matematicas" value={asignatura} onChange={(e) => setAsignatura(e.target.value)}/>

          <label className='espacio'>Promedio (0.0 - 7.0):</label>
          <input className='form-control' type="number" step="0.1" min="0.0" max="7.0" placeholder="Ej: 5.5" value={promedio} onChange={(e) => setPromedio(e.target.value)}/>
        </div>

        <div className='espacio'>
          <button className="btn btn-primary form-control" type="submit">
            {itemToEdit ? 'Actualizar Evaluación' : 'Agregar Evaluación'}
          </button>
        </div>

    </form>
    
  );
}


export default Form;
