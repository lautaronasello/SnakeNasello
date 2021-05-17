import { getInputDirection } from './input.js';

export var SNAKE_SPEED = 4;
const snakeBody = [{ x: 11, y: 11 }];
let newSegments = 0;
let segments = newSegments;
export let actualPoints = 0;

export function update() {
  addSegments();
  const inputDirection = getInputDirection();
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] };
  }

  snakeBody[0].x += inputDirection.x;
  snakeBody[0].y += inputDirection.y;
}

export function getSnakeHead() {
  return snakeBody[0];
}

export function draw(gameBoard) {
  snakeBody.forEach((segment) => {
    const snakeElement = document.createElement('div'); //generates a div in the grid
    snakeElement.style.gridRowStart = segment.y; //gives the ubication of the row to start to draw
    snakeElement.style.gridColumnStart = segment.x; //gives the ubication of the column to start to draw
    snakeElement.classList.add('snake'); //add class "snake" to the div
    gameBoard.appendChild(snakeElement); //all of this is generated in the game-board(index.html)
  });
  upSnake();
  upPoints();
}

function upSnake() {
  if (newSegments > segments) {
    return (SNAKE_SPEED += 1 / 5);
  }

  console.log(SNAKE_SPEED);
}

function upPoints() {
  if (newSegments > segments) {
    return (actualPoints += 50);
  }
}

export function expandSnake(amount) {
  newSegments += amount;
}

export function onSnake(position, { ignoreHead = false } = {}) {
  return snakeBody.some((segment, index) => {
    if (ignoreHead && index === 0) return false;
    return equalPosition(segment, position);
  });
}

export function snakeIntersection() {
  return onSnake(snakeBody[0], { ignoreHead: true });
}

function equalPosition(pos1, pos2) {
  return pos1.x === pos2.x && pos1.y === pos2.y;
}

function addSegments() {
  for (let i = 0; i < newSegments; i++) {
    snakeBody.push({ ...snakeBody[snakeBody.lenght - 1] });
  }
  newSegments = 0;
}
