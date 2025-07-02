import React, { useState, useEffect } from 'react';
import Form from './assets/components/Form';
import List from './assets/components/List';
import './App.css';


function App() {
  const [items, setItems] = useState([]);
  const [itemToEdit, setItemToEdit] = useState(null);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('items')) || [];
    setItems(storedItems);
  }, []);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);


  const addOrUpdateItem = (nuevoItem) => {
    if (itemToEdit) {
      // console.log("hola");
      setItems(items.map(item => item.id === itemToEdit.id ? { ...nuevoItem, id: item.id } : item));
      setItemToEdit(null);
    } else {
      // console.log("holados")
      setItems([...items, { ...nuevoItem, id: Date.now() }]);
    }
    // console.log(this.items);
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const editItem = (item) => {
    setItemToEdit(item);
  };


  return (
    <div className="contenedor">
      <h1 className='bordeTitulo'><strong>Evaluacion de alumnos</strong></h1>
      <Form addOrUpdateItem={addOrUpdateItem} itemToEdit={itemToEdit}/>
      <List items={items} deleteItem={deleteItem} editItem={editItem}/>
    </div>
  );
}


export default App
