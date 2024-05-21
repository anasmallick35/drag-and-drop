import React from 'react';
import './container.css';
import Item from './Item';

const Container = ({ title, items, onDragOver, onDrop, onDragStart }) => {
  const handleTouchMove = (e) => {
    e.preventDefault();
  };

  const handleTouchEnd = (e) => {
    e.preventDefault();
    const touch = e.changedTouches[0];
    const newEvent = new DragEvent('drop', {
      bubbles: true,
      cancelable: true,
      dataTransfer: new DataTransfer(),
      clientX: touch.clientX,
      clientY: touch.clientY,
    });
    e.target.dispatchEvent(newEvent);
  };

  return (
    <div
      className="container"
      onDragOver={onDragOver}
      onDrop={onDrop}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <h2>{title}</h2>
      {items.map((item, index) => (
        <Item key={index} item={item} onDragStart={onDragStart} />
      ))}
    </div>
  );
};

export default Container;
