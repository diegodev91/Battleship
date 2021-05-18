import { shipTypes } from "./constants";

export const getField = () => {
  let field = [10];

  for (let i = 0; i < 10; i++) {
    field[i] = [10];
    for (let j = 0; j < 10; j++) {
      field[i][j] = null;
    }
  }
  for (let i = 0; i < shipTypes.length; i++) {
    field = generateShipPositions(shipTypes[i], field);
  }
  return field;
};

const generateShipPositions = (ship, field) => {
  let shipStartPosition = null;
  let continueLoop = true;
  while (continueLoop) {
    shipStartPosition = getRandomCoordinate();
    if (positionIsFree(field, shipStartPosition)) {
      let x = shipStartPosition[0];
      let y = shipStartPosition[1];
      let directions = getDirections();
      field[x][y] = ship.id * 100;
      field = refillNeighbourCells(field, x, y, ship.id);

      for (let i = 0; i < directions.length; i++) {
        let tempField = makeClone(field);
        let newField = tryDirections(
          directions[i],
          ship,
          shipStartPosition,
          tempField
        );
        if (newField !== null) {
          continueLoop = false;
          field = [...newField];
          break;
        } else {
          tempField = newField = null;
        }
      }
    }
  }
  return field;
};

function tryDirections(direction, ship, shipStartPosition, field) {
  let x = shipStartPosition[0];
  let y = shipStartPosition[1];
  let wrongDirection = false;

  for (let i = 1; i < ship.size; i++) {
    switch (direction) {
      case 0:
        if (y + i > 9) {
          wrongDirection = true;
          break;
        } else if (
          positionIsFree(field, [x, y + i]) ||
          field[x][y + i] === ship.id
        ) {
          field[x][y + i] = ship.id * 100;
          refillNeighbourCells(field, x, y + i, ship.id);
          wrongDirection = false;
          break;
        } else {
          wrongDirection = true;
          break;
        }
      case 1:
        if (x + i > 9) {
          wrongDirection = true;
          break;
        } else if (
          positionIsFree(field, [x + i, y]) ||
          field[x + i][y] === ship.id
        ) {
          field[x + i][y] = ship.id * 100;
          refillNeighbourCells(field, x + i, y, ship.id);
          wrongDirection = false;
          break;
        } else {
          wrongDirection = true;
          break;
        }
      case 2:
        if (y - i < 0) {
          wrongDirection = true;
          break;
        } else if (
          positionIsFree(field, [x, y - i]) ||
          field[x][y - i] === ship.id
        ) {
          field[x][y - i] = ship.id * 100;
          refillNeighbourCells(field, x, y - i, ship.id);
          wrongDirection = false;
          break;
        } else {
          wrongDirection = true;
          break;
        }
      case 3:
        if (x - i < 0) {
          wrongDirection = true;
          break;
        } else if (
          positionIsFree(field, [x - i, y]) ||
          field[x - i][y] === ship.id
        ) {
          field[x - i][y] = ship.id * 100;
          refillNeighbourCells(field, x - i, y, ship.id);
          wrongDirection = false;
          break;
        } else {
          wrongDirection = true;
          break;
        }

      default:
        break;
    }
  }
  if (wrongDirection) {
    return null;
  } else {
    return field;
  }
}

const refillNeighbourCells = (field, x, y, shipId) => {
  if (y < 9 && field[x][y + 1] === null) {
    field[x][y + 1] = shipId;
  }
  if (x < 9 && y < 9 && field[x + 1][y + 1] === null) {
    field[x + 1][y + 1] = shipId;
  }
  if (x < 9 && field[x + 1][y] === null) {
    field[x + 1][y] = shipId;
  }
  if (x < 9 && y > 0 && field[x + 1][y - 1] === null) {
    field[x + 1][y - 1] = shipId;
  }
  if (y > 0 && field[x][y - 1] === null) {
    field[x][y - 1] = shipId;
  }
  if (x > 0 && y > 0 && field[x - 1][y - 1] === null) {
    field[x - 1][y - 1] = shipId;
  }
  if (x > 0 && field[x - 1][y] === null) {
    field[x - 1][y] = shipId;
  }
  if (x > 0 && y < 9 && field[x - 1][y + 1] === null) {
    field[x - 1][y + 1] = shipId;
  }
  return field;
};

const positionIsFree = (field, position) => {
  let x = position[0];
  let y = position[1];
  return !(field[x][y] > 0);
};

const getDirections = () => {
  let directions = [];
  for (let i = 0; directions.length < 4; i++) {
    let number = getRandomNumber(4);
    if (directions.indexOf(number) === -1) {
      directions.push(number);
    }
  }
  return directions;
};

const getRandomCoordinate = () => {
  const max = 9;
  return [Math.floor(Math.random() * max), Math.floor(Math.random() * max)];
};

const getRandomNumber = (max) => {
  return Math.floor(Math.random() * max);
};

export const makeClone = (field) => {
  let clone = [10];
  for (let i = 0; i < 10; i++) {
    clone[i] = [10];
    for (let j = 0; j < 10; j++) {
      clone[i][j] = field[i][j];
    }
  }
  return clone;
};
