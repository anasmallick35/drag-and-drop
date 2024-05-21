import React from 'react';
import { useDrag } from 'react-dnd';
import './Item.css';

const Item = ({ name, containerType }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'ITEM',
    item: { name, containerType },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
    end: (item, monitor) => {
      const arrow = document.getElementById('arrow');
      if (arrow) {
        arrow.style.display = 'none';
      }
    },
  });

  const handleDrag = (event) => {
    const arrow = document.getElementById('arrow');
    if (arrow) {
      arrow.style.display = 'block';
      const rect = event.target.getBoundingClientRect();
      const arrowStartX = rect.left + rect.width / 2;
      const arrowStartY = rect.top + rect.height / 2;
      const arrowEndX = event.clientX;
      const arrowEndY = event.clientY;
      const angle = Math.atan2(arrowEndY - arrowStartY, arrowEndX - arrowStartX) * 180 / Math.PI;
      const length = Math.hypot(arrowEndX - arrowStartX, arrowEndY - arrowStartY);
      arrow.style.width = `${length}px`;
      arrow.style.transform = `rotate(${angle}deg)`;
      arrow.style.left = `${arrowStartX}px`;
      arrow.style.top = `${arrowStartY}px`;
    }
  };

  return (
    <div
      ref={drag}
      className="item"
      style={{
        opacity: isDragging ? 0.5 : 1,
      }}
      onDrag={handleDrag}
    >
      {name}
    </div>
  );
};

export default Item;
