import React from 'react';
import './Item.css';

const Item = ({ item, onDragStart }) => {
  const handleTouchStart = (e) => {
    // Simulate drag start for touch devices
    const touch = e.touches[0];
    const newEvent = new DragEvent('dragstart', {
      bubbles: true,
      cancelable: true,
      dataTransfer: new DataTransfer(),
    });
    newEvent.dataTransfer.setData('text/plain', item);
    e.target.dispatchEvent(newEvent);
  };

  return (
    <div
      className="item"
      draggable
      onDragStart={(e) => onDragStart(e, item)}
      onTouchStart={handleTouchStart}
    >
      {item}
    </div>
  );
};

export default Item;
