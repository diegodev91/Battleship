import React from "react";
import { Col } from "react-bootstrap";
import Cell from "./Cell";
import Start from "./Start";

export default function Field(props) {
  let { field, hits, onCellClick, onClick } = props;
  return (
    <Col lg={5} md={6} sm={12} xs={12} className="battleFieldPanel">
      {!field && (
        <table className={`emptyBattleField centered`}>
          <tbody>
            <tr>
              <td className="emptyBattleField">
                <Start onClick={() => onClick()} />
              </td>
            </tr>
          </tbody>
        </table>
      )}
      {field && hits < 17 && (
        <table className={`battlefieldTable centered`}>
          <tbody>
            {field.map((row, x) => {
              return (
                <tr key={x}>
                  {row.map((column, y) => {
                    return (
                      <td key={y} className="tableCell">
                        <Cell
                          onCellClick={() => onCellClick(x, y)}
                          x={x}
                          y={y}
                          cellState={column}
                        />
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
      {hits === 17 && (
        <table className={`emptyBattleField centered`}>
          <tbody>
            <tr>
              <td>
                <div className="text-center">
                  <h1>Game over</h1>
                  <Start onClick={() => onClick()} />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </Col>
  );
}
