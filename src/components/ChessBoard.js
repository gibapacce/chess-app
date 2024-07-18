import React, { useState } from 'react';
import './ChessBoard.css';
import Piece from './Piece';

const initialBoardSetup = [
  ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
  ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
  ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
];

const ChessBoard = () => {
  const [board, setBoard] = useState(initialBoardSetup);

  const createBoard = () => {
    let boardDisplay = [];
    for (let i = 0; i < 8; i++) {
      let row = [];
      for (let j = 0; j < 8; j++) {
        const isBlack = (i + j) % 2 === 1;
        const piece = board[i][j];
        row.push(
          <div
            key={`${i}-${j}`}
            className={`square ${isBlack ? 'black' : 'white'}`}
          >
            {piece && (
              <Piece
                type={piece.toLowerCase()}
                color={piece === piece.toUpperCase() ? 'white' : 'black'}
              />
            )}
          </div>,
        );
      }
      boardDisplay.push(
        <div key={i} className="row">
          {row}
        </div>,
      );
    }
    return boardDisplay;
  };

  return <div className="chess-board">{createBoard()}</div>;
};

export default ChessBoard;
