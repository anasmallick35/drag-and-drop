import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Container from './container';
import './App.css';

function App() {
  const [itemsA, setItemsA] = useState(['Item 1', 'Item 2', 'Item 3']);
  const [itemsB, setItemsB] = useState([]);

  const handleDrop = (item, from, to) => {
    if (from === to) {
      return; 
    }

    if (from === 'A' && to === 'B') {
      setItemsA((prevItemsA) => prevItemsA.filter((i) => i !== item));
      setItemsB((prevItemsB) => [...prevItemsB, item]);
    } else if (from === 'B' && to === 'A') {
      setItemsB((prevItemsB) => prevItemsB.filter((i) => i !== item));
      setItemsA((prevItemsA) => [...prevItemsA, item]);
    }
    console.log(`Item "${item}" moved from ${from} to ${to}`);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="app">
        <Container items={itemsA} onDrop={(item, from) => handleDrop(item, from, 'A')} containerType="A" />
        <Container items={itemsB} onDrop={(item, from) => handleDrop(item, from, 'B')} containerType="B" />
        <div id="arrow" className="arrow"></div>
      </div>
    </DndProvider>
  );
}

export default App;
