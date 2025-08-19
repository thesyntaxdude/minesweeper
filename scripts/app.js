import { Gameboard } from "./modules/grid.js";


const startScreen = document.querySelector("#start-screen");
const gameScreen = document.querySelector("#game-screen");

const app = new Gameboard();
Gameboard.startBtn.addEventListener("click", () => {
  Gameboard.gridSize = app.getGridSize();
  startScreen.style.display = "none";
  gameScreen.style.display = "flex";
  app.generateBoard();
});


