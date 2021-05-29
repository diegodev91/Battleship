export default function GameOver({ onPlayAgain }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h1>Game Over</h1>
        <p>You have sunk all ships</p>
        <button onClick={onPlayAgain}> Play Again </button>
      </div>
    </div>
  );
}
