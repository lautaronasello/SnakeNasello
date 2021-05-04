let food = { x: 11, y: 1 };

export function update() {}

export function draw(gameBoard) {
  const foodElement = document.createElement("div"); //generates a div in the grid
  foodElement.style.gridRowStart = food.y; //gives the ubication of the row to start to draw
  foodElement.style.gridColumnStart = food.x; //gives the ubication of the column to start to draw
  foodElement.classList.add("food"); //add class "snake" to the div
  gameBoard.appendChild(foodElement); //all of this is generated in the game-board(index.html)
}
