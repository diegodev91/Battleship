export default function GameInfo({ ships }) {
  return (
    <div className="game-info">
      <p>Sink all ships by clicking on grid</p>
      <div className="ship-info">
        {ships &&
          ships.map((ship ) => (
            <div className="ship-item">
              {ship.points.map((cell) => (
                <div
                key={cell.}
                  className={
                    "ship-block " + (cell.isRevealed ? "revealed " : "")
                  }
                />
              ))}
            </div>
          ))}
      </div>
    </div>
  );
}
