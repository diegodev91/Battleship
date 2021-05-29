import Cell from "./cell";

export default function Board({ board, onCellClick }) {
  return (
    <div className="board">
      {board &&
        board.map((row, rowIndex) => (
          <div className="row" key={row}>
            {row &&
              row.map((cell, colIndex) => (
                <Cell
                  key={rowIndex + "" + colIndex}
                  onCellClick={() => onCellClick(cell)}
                  cell={cell}
                />
              ))}
          </div>
        ))}
    </div>
  );
}
