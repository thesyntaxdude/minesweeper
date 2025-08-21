import { Gameboard } from "./modules/grid.js";
import { Logic } from "./modules/game.js";

const startScreen = document.querySelector("#start-screen");
const gameScreen = document.querySelector("#game-screen");

const app = new Gameboard();
const logic = new Logic();
Gameboard.startBtn.addEventListener("click", () => {
  Gameboard.gridSize = app.getGridSize();
  startScreen.style.display = "none";
  gameScreen.style.display = "flex";
  app.generateBoard();
  logic.placeBombs();
});
