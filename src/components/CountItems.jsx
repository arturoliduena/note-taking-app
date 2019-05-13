import React from 'react';
import './App.css';

const CountItems = props => {
  const { count } = props;
  return (
    <div className="count">
      {count} ITEM{ count>1 ? 'S' : ''}
    </div>
  );
}

export default CountItems;