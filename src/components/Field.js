import React, { useState, useEffect } from "react";
import Board from "./board";
import GameInfo from "./gameInfo";
import GameOver from "./gameOver";
import GameUtil from "../common/GameUtil";

export default function Field({ size }) {
  const [board, setBoard] = useState();
  const [ships, setShips] = useState();
  const [shipBlocksRevealed, setShipBlocksRevealed] = useState();
  const [totalShipBlocks, setTotalShipBlocks] = useState();
  const [totalShootCount, setTotalShootCount] = useState();
  const [gameOver, setGameOver] = useState();

  useEffect(() => {
    gameInitialize();
  }, []);

  const gameInitialize = () => {
    const gameUtil = new GameUtil(size);
    const gameBoard = gameUtil.GenerateBoard();
    setBoard(gameBoard);
    setShips(gameUtil.ships);
    setShipBlocksRevealed(0);
    setTotalShipBlocks(gameUtil.totalShipBlocks);
    setTotalShootCount(0);
    setGameOver(false);
  };

  const handleCellClick = (cell) => {
    if (cell.isSelected) {
      return;
    }

    let selectedItem = { ...cell };
    selectedItem.isSelected = true;

    let _board = [...board];
    _board[cell.coordinates.x][cell.coordinates.y] = selectedItem;

    let _totalShootCount = totalShootCount;
    _totalShootCount += 1;

    let _shipBlocksRevealed = shipBlocksRevealed;
    let _ships = ships;

    if (selectedItem.isShip) {
      _shipBlocksRevealed += 1;

      for (let ship of _ships) {
        let isBreak = false;
        for (let shipCell of ship.points) {
          if (
            shipCell.x === cell.coordinates.x &&
            shipCell.y === cell.coordinates.y
          ) {
            shipCell.isRevealed = true;
            isBreak = true;
            break;
          }
        }
        if (isBreak) {
          break;
        }
      }
    }

    setShips(_ships);
    setBoard(_board);
    setShipBlocksRevealed(_shipBlocksRevealed);
    setTotalShootCount(_totalShootCount);

    if (shipBlocksRevealed === totalShipBlocks) {
      setGameOver(true);
    }
  };

  const handlePlayAgain = () => {
    gameInitialize();
  };

  return (
    <div className="game">
      <div className="heading">
        <h1>Battleship</h1>
      </div>
      <div className="game-board">
        <Board board={board} onCellClick={(cell) => handleCellClick(cell)} />
      </div>
      <GameInfo ships={ships} />
      {gameOver && <GameOver onPlayAgain={() => handlePlayAgain()} />}
    </div>
  );
}
