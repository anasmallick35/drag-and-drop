import React from 'react';
import { useDrop } from 'react-dnd';
import Item from './Item';
import './container.css';

const Container = ({ items, onDrop, containerType }) => {
  const [, ref] = useDrop({
    accept: 'ITEM',
    drop: (item) => onDrop(item.name, item.containerType),
  });

  return (
    <div ref={ref} className="container">
      {items.map((item, index) => (
        <Item key={index} name={item} containerType={containerType} />
      ))}
    </div>
  );
};

export default Container;
