export const SNAKE_SPEED = 1;
const snakebody = [
  { x: 10, y: 11 },
  { x: 11, y: 11 },
  { x: 12, y: 11 },
];

export function update() {
  for (let i = snakebody.lenght - 2; i >= 0; i--) {
    snakebody[i + 1] = { ...snakebody[i] };
  }
  snakebody[0].x += 1;
  snakebody[0].y += 0;
}

export function draw(gameBoard) {
  snakebody.forEach((segment) => {
    const snakeElement = document.createElement("div"); //generates a div in the grid
    snakeElement.style.gridRowStart = segment.y; //gives the ubication of the row to start to draw
    snakeElement.style.gridColumnStart = segment.x; //gives the ubication of the column to start to draw
    snakeElement.classList.add("snake"); //add class "snake" to the div
    gameBoard.appendChild(snakeElement); //all of this is generated in the game-board(index.html)
  });
}
