import React from 'react';

function Card({ tittle, image, color, children }) {
  return (
    <div className={`card ${color}`}>
      <h1>{tittle}</h1>
      <p>{children}</p>
      <img src={image} alt="icone que descreve o campo card" />
    </div>
  );
}

export { Card };
