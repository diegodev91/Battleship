export default function Cell({ cell, onCellClick }) {
  return (
    <div
      className={
        "cell " +
        (cell.isSelected ? "selected " : "") +
        (cell.isShip ? "ship " : "")
      }
      onClick={onCellClick}
    />
  );
}
