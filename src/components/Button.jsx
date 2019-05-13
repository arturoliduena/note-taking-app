import React from 'react';
import './App.css';

const Button = props => {
  return (
    <button className="button" onClick={props.onClick}>
      <span className="button-text">
        Add item
      </span>
    </button>
  );
}

export default Button;
