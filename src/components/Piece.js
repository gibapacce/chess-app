import React from 'react';

const Piece = ({ type, color }) => {
  return <div className={`piece ${color}-${type}`}></div>;
};

export default Piece;
