import React, { useState, useEffect } from 'react';

function Form({ addOrUpdateItem, itemToEdit }) {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (itemToEdit) {
      setInputValue(itemToEdit.value);
    }
    else {
      setInputValue('');
    }
  }, [itemToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addOrUpdateItem(inputValue);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="btn btn-primary" type="submit">{ itemToEdit ? 'Actualizar Evaluación' : 'Agregar Evaluación' }</button>
    </form>
    
  );
}

export default Form;
