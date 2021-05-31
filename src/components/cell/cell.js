import Button from "@material-ui/core/Button";
import "./cell.css";
import { useRef } from "react";

export default function Cell({
  color,
  isDisabled = true,
  isShipPiece = false,
  pieceId = "",
}) {
  const button = useRef(null);

  const handleButtonClick = () => {
    if (isShipPiece) button.current.style.backgroundColor = "red";
  };

  return (
    <Button
      className="content"
      variant="contained"
      color={color}
      disabled={isDisabled}
      onClick={handleButtonClick}
      ref={button}
    ></Button>
  );
}
