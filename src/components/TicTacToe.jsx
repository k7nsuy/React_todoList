import { useState } from "react";
import "../css/TicTacToe.css";

function Square() {
  const X = "X";
  const [click, setClick] = useState(null);
  function handleClick() {
    setClick(X);
  }

  return (
    <>
      <button className="square" onClick={handleClick}>
        {click}
      </button>
    </>
  );
}

function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}

export function TicTacToe() {
  return (
    <>
      <Board />
    </>
  );
}
