import React, { useState, useEffect } from 'react';
import Form from './assets/components/Form';
import List from './assets/components/List';
import './App.css';

// function Saludo() {
//   return <h2>Hola, Bienvenido a mi aplicación de React!</h2>
// }

// function App() {
//   return (
//     <>
//       <Saludo/>
//       <img src="./src/assets/gato.png" className="logo" alt="logo"/>
//       <h1>Welcome to My React App</h1>
//       <Saludo/>
//     </>
//   )
// }


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

  const addOrUpdateItem = (value) => {
    if (itemToEdit) {
      setItems(items.map(item => item.id === itemToEdit.id ? { ...item, value } : item));
      setItemToEdit(null);
    } else {
      setItems([...items, { id: Date.now(), value }]);
    }
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const editItem = (item) => {
    setItemToEdit(item);
  };

  return (
    <div className="App">
      <h1>CRUD con LocalStorage</h1>
      <Form
        addOrUpdateItem={addOrUpdateItem}
        itemToEdit={itemToEdit}
      />
      <List
        items={items}
        deleteItem={deleteItem}
        editItem={editItem}
      />
    </div>
  );
}


export default App
