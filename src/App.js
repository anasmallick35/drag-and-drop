import React, { useState } from 'react';
import './App.css';
import Container from './container';

const App = () => {
  const [itemsA, setItemsA] = useState(['Item 1', 'Item 2', 'Item 3']);
  const [itemsB, setItemsB] = useState([]);

  const handleDragStart = (e, item) => {
    e.dataTransfer.setData('text/plain', item);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDropA = (e) => {
    const item = e.dataTransfer.getData('text/plain');
    setItemsA((prevItems) => [...prevItems, item]);
    setItemsB((prevItems) => prevItems.filter((i) => i !== item));
    console.log(`Added to A: ${item}`);
  };

  const handleDropB = (e) => {
    const item = e.dataTransfer.getData('text/plain');
    setItemsB((prevItems) => [...prevItems, item]);
    setItemsA((prevItems) => prevItems.filter((i) => i !== item));
    console.log(`Added to B: ${item}`);
  };

  return (
    <div className="app">
      <Container
        title="Container A"
        items={itemsA}
        onDragOver={handleDragOver}
        onDrop={handleDropA}
        onDragStart={handleDragStart}
      />
      <Container
        title="Container B"
        items={itemsB}
        onDragOver={handleDragOver}
        onDrop={handleDropB}
        onDragStart={handleDragStart}
      />
    </div>
  );
};

export default App;
