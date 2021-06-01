import Cell from "../cell/cell";
import { useState, useEffect } from "react";
import "./field.css";

export default function Field() {
  const [battlefield, setBattlefield] = useState([]);

  useEffect(() => {
    setBattlefield(createBattlefield);
    return () => {};
  }, []);

  const createBattlefield = () => {
    let _batleField = [
      [
        { coordinates: { x: 0, y: 0 }, type: "index" },
        { coordinates: { x: 1, y: 0 }, type: "columnHeader", textValue: "1" },
        { coordinates: { x: 2, y: 0 }, type: "columnHeader", textValue: "2" },
        { coordinates: { x: 3, y: 0 }, type: "columnHeader", textValue: "3" },
        { coordinates: { x: 4, y: 0 }, type: "columnHeader", textValue: "4" },
        { coordinates: { x: 5, y: 0 }, type: "columnHeader", textValue: "5" },
        { coordinates: { x: 6, y: 0 }, type: "columnHeader", textValue: "6" },
        { coordinates: { x: 7, y: 0 }, type: "columnHeader", textValue: "7" },
        { coordinates: { x: 8, y: 0 }, type: "columnHeader", textValue: "8" },
        { coordinates: { x: 9, y: 0 }, type: "columnHeader", textValue: "9" },
        { coordinates: { x: 10, y: 0 }, type: "columnHeader", textValue: "10" },
      ],
      [
        { coordinates: { x: 0, y: 1 }, type: "rowHeader", textValue: "A" },
        { coordinates: { x: 1, y: 1 }, type: "cell" },
        { coordinates: { x: 2, y: 1 }, type: "cell" },
        { coordinates: { x: 3, y: 1 }, type: "cell" },
        { coordinates: { x: 4, y: 1 }, type: "cell" },
        {
          coordinates: { x: 5, y: 1 },
          type: "cell",
          isShipPiece: true,
          pieceId: "2-1",
        },
        {
          coordinates: { x: 6, y: 1 },
          type: "cell",
          isShipPiece: true,
          pieceId: "2-1",
        },
        { coordinates: { x: 7, y: 1 }, type: "cell" },
        { coordinates: { x: 8, y: 1 }, type: "cell" },
        { coordinates: { x: 9, y: 1 }, type: "cell" },
        { coordinates: { x: 10, y: 1 }, type: "cell" },
      ],
      [
        { coordinates: { x: 0, y: 2 }, type: "rowHeader", textValue: "B" },
        { coordinates: { x: 1, y: 2 }, type: "cell" },
        { coordinates: { x: 2, y: 2 }, type: "cell" },
        { coordinates: { x: 3, y: 2 }, type: "cell" },
        { coordinates: { x: 4, y: 2 }, type: "cell" },
        { coordinates: { x: 5, y: 2 }, type: "cell" },
        { coordinates: { x: 6, y: 2 }, type: "cell" },
        { coordinates: { x: 7, y: 2 }, type: "cell" },
        { coordinates: { x: 8, y: 2 }, type: "cell" },
        { coordinates: { x: 9, y: 2 }, type: "cell" },
        { coordinates: { x: 10, y: 2 }, type: "cell" },
      ],
      [
        { coordinates: { x: 0, y: 3 }, type: "rowHeader", textValue: "C" },
        { coordinates: { x: 1, y: 3 }, type: "cell" },
        { coordinates: { x: 2, y: 3 }, type: "cell" },
        { coordinates: { x: 3, y: 3 }, type: "cell" },
        { coordinates: { x: 4, y: 3 }, type: "cell" },
        { coordinates: { x: 5, y: 3 }, type: "cell" },
        { coordinates: { x: 6, y: 3 }, type: "cell" },
        { coordinates: { x: 7, y: 3 }, type: "cell" },
        { coordinates: { x: 8, y: 3 }, type: "cell" },
        { coordinates: { x: 9, y: 3 }, type: "cell" },
        { coordinates: { x: 10, y: 3 }, type: "cell" },
      ],
      [
        { coordinates: { x: 0, y: 4 }, type: "rowHeader", textValue: "D" },
        { coordinates: { x: 1, y: 4 }, type: "cell" },
        { coordinates: { x: 2, y: 4 }, type: "cell" },
        { coordinates: { x: 3, y: 4 }, type: "cell" },
        { coordinates: { x: 4, y: 4 }, type: "cell" },
        { coordinates: { x: 5, y: 4 }, type: "cell" },
        { coordinates: { x: 6, y: 4 }, type: "cell" },
        { coordinates: { x: 7, y: 4 }, type: "cell" },
        { coordinates: { x: 8, y: 4 }, type: "cell" },
        { coordinates: { x: 9, y: 4 }, type: "cell" },
        { coordinates: { x: 10, y: 4 }, type: "cell" },
      ],
      [
        { coordinates: { x: 0, y: 5 }, type: "rowHeader", textValue: "E" },
        { coordinates: { x: 1, y: 5 }, type: "cell" },
        { coordinates: { x: 2, y: 5 }, type: "cell" },
        { coordinates: { x: 3, y: 5 }, type: "cell" },
        { coordinates: { x: 4, y: 5 }, type: "cell" },
        { coordinates: { x: 5, y: 5 }, type: "cell" },
        { coordinates: { x: 6, y: 5 }, type: "cell" },
        { coordinates: { x: 7, y: 5 }, type: "cell" },
        { coordinates: { x: 8, y: 5 }, type: "cell" },
        { coordinates: { x: 9, y: 5 }, type: "cell" },
        { coordinates: { x: 10, y: 5 }, type: "cell" },
      ],
      [
        { coordinates: { x: 0, y: 6 }, type: "rowHeader", textValue: "F" },
        { coordinates: { x: 1, y: 6 }, type: "cell" },
        { coordinates: { x: 2, y: 6 }, type: "cell" },
        { coordinates: { x: 3, y: 6 }, type: "cell" },
        { coordinates: { x: 4, y: 6 }, type: "cell" },
        { coordinates: { x: 5, y: 6 }, type: "cell" },
        { coordinates: { x: 6, y: 6 }, type: "cell" },
        { coordinates: { x: 7, y: 6 }, type: "cell" },
        { coordinates: { x: 8, y: 6 }, type: "cell" },
        { coordinates: { x: 9, y: 6 }, type: "cell" },
        { coordinates: { x: 10, y: 6 }, type: "cell" },
      ],
      [
        { coordinates: { x: 0, y: 7 }, type: "rowHeader", textValue: "G" },
        { coordinates: { x: 1, y: 7 }, type: "cell" },
        { coordinates: { x: 2, y: 7 }, type: "cell" },
        { coordinates: { x: 3, y: 7 }, type: "cell" },
        { coordinates: { x: 4, y: 7 }, type: "cell" },
        { coordinates: { x: 5, y: 7 }, type: "cell" },
        { coordinates: { x: 6, y: 7 }, type: "cell" },
        { coordinates: { x: 7, y: 7 }, type: "cell" },
        { coordinates: { x: 8, y: 7 }, type: "cell" },
        { coordinates: { x: 9, y: 7 }, type: "cell" },
        { coordinates: { x: 10, y: 7 }, type: "cell" },
      ],
      [
        { coordinates: { x: 0, y: 8 }, type: "rowHeader", textValue: "H" },
        { coordinates: { x: 1, y: 8 }, type: "cell" },
        { coordinates: { x: 2, y: 8 }, type: "cell" },
        { coordinates: { x: 3, y: 8 }, type: "cell" },
        { coordinates: { x: 4, y: 8 }, type: "cell" },
        { coordinates: { x: 5, y: 8 }, type: "cell" },
        { coordinates: { x: 6, y: 8 }, type: "cell" },
        { coordinates: { x: 7, y: 8 }, type: "cell" },
        { coordinates: { x: 8, y: 8 }, type: "cell" },
        { coordinates: { x: 9, y: 8 }, type: "cell" },
        { coordinates: { x: 10, y: 8 }, type: "cell" },
      ],
      [
        { coordinates: { x: 0, y: 9 }, type: "rowHeader", textValue: "I" },
        { coordinates: { x: 1, y: 9 }, type: "cell" },
        { coordinates: { x: 2, y: 9 }, type: "cell" },
        { coordinates: { x: 3, y: 9 }, type: "cell" },
        { coordinates: { x: 4, y: 9 }, type: "cell" },
        { coordinates: { x: 5, y: 9 }, type: "cell" },
        { coordinates: { x: 6, y: 9 }, type: "cell" },
        { coordinates: { x: 7, y: 9 }, type: "cell" },
        { coordinates: { x: 8, y: 9 }, type: "cell" },
        { coordinates: { x: 9, y: 9 }, type: "cell" },
        { coordinates: { x: 10, y: 9 }, type: "cell" },
      ],
      [
        { coordinates: { x: 0, y: 10 }, type: "rowHeader", textValue: "J" },
        { coordinates: { x: 1, y: 10 }, type: "cell" },
        { coordinates: { x: 2, y: 10 }, type: "cell" },
        { coordinates: { x: 3, y: 10 }, type: "cell" },
        { coordinates: { x: 4, y: 10 }, type: "cell" },
        { coordinates: { x: 5, y: 10 }, type: "cell" },
        { coordinates: { x: 6, y: 10 }, type: "cell" },
        { coordinates: { x: 7, y: 10 }, type: "cell" },
        { coordinates: { x: 8, y: 10 }, type: "cell" },
        { coordinates: { x: 9, y: 10 }, type: "cell" },
        { coordinates: { x: 10, y: 10 }, type: "cell" },
      ],
    ];

    return _batleField;
  };

  return (
    <div className="container">
      {battlefield.map((row) => {
        return row.map((cell) => {
          return (
            <Cell
              className="cell"
              key={cell.coordinates.x + cell.coordinates.y}
              color={"primary"}
              isDisabled={
                cell.type === "columnHeader" ||
                cell.type == "rowHeader" ||
                cell.type == "index"
                  ? true
                  : false
              }
              isShipPiece={cell.isShipPiece}
              pieceId={cell.pieceId}
              textValue={cell.textValue}
            />
          );
        });
      })}
    </div>
  );
}
