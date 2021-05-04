import { getIputDirection } from "./input.js";

export const SNAKE_SPEED = 5;
const snakeBody = [{ x: 11, y: 11 }];
let newSegments = 0;

export function update() {
  const inputDirection = getIputDirection();
  for (let i = snakeBody.lenght - 2; i >= 0; i--) {
    snakeBody[i + 1] = snakeBody[i];
  }
  snakeBody[0].x += inputDirection.x;
  snakeBody[0].y += inputDirection.y;
}

export function draw(gameBoard) {
  snakeBody.forEach((segment) => {
    const snakeElement = document.createElement("div"); //generates a div in the grid
    snakeElement.style.gridRowStart = segment.y; //gives the ubication of the row to start to draw
    snakeElement.style.gridColumnStart = segment.x; //gives the ubication of the column to start to draw
    snakeElement.classList.add("snake"); //add class "snake" to the div
    gameBoard.appendChild(snakeElement); //all of this is generated in the game-board(index.html)
  });
}

export function expandSnake(amount) {
  newSegments += amount;
}

export function onSnake(position) {
  return snakeBody.some((segment) => {
    return equalPosition(segment, position);
  });
}

export function equalPosition(pos1, pos2) {
  return pos1.x === pos2.x && pos1.y === pos2.y;
}
