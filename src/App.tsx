import React, { useEffect, useState } from "react";
import "./App.css";

const emptyGrid: number[][] = [];
for (let i = 0; i < 8; i++) {
  let temp = [];
  for (let j = 0; j < 8; j++) {
    temp.push(0);
  }
  emptyGrid.push(temp);
}

function App() {
  const [selected, setSelected] = useState({ x: 4, y: 4 });
  const [grid, setGrid] = useState(emptyGrid);
  const [count, setCount] = useState(0);
  useEffect(() => {
    let X = [2, 1, -1, -2, -2, -1, 1, 2];
    let Y = [1, 2, 2, 1, -1, -2, -2, -1];
    const newGrid: number[][] = [];
    for (let i = 0; i < 8; i++) {
      let temp = [];
      for (let j = 0; j < 8; j++) {
        temp.push(0);
      }
      newGrid.push(temp);
    }
    let counter = 0;
    for (let i = 0; i < 8; i++) {
      let r = selected.x + X[i];
      let c = selected.y + Y[i];
      if (r >= 0 && c >= 0 && r < 8 && c < 8) {
        newGrid[r][c] = 1;
        counter++;
      }
    }
    setCount(counter);
    setGrid([...newGrid]);
  }, [selected]);

  return (
    <div className="App">
      <div className="count"></div>

      <div className="count">Click anywhere in the Grid</div>

      <div className="grid">
        {grid.map((row, x) => {
          return (
            <div className="row" key={x}>
              {row.map((cell: number, y: number) => {
                return (
                  <div
                    className={cell === 1 ? "cell green" : "cell"}
                    onClick={() => {
                      setSelected({ x, y });
                    }}
                    key={y}
                  >
                    {selected.x === x && selected.y === y && <div>🐴</div>}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="count">
        Total Places where knight can move is: {count}<br/>
       🟩 Green Cells Represents
        <br /> cell in which knight can move
      </div>
    </div>
  );
}

export default App;
