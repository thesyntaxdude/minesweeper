export class Gameboard {
  static gridContainer = document.querySelector("#grid-container");
  static startBtn = document.querySelector("#start-btn");
  static gridSize;

  getGridSize() {
    const size = document.querySelector("#grid-size").value;
    return parseInt(size);
  }

  generateBoard() {
    let col = 0;
    let row = 0;
    let gridTemplateColumns = "";
    switch (Gameboard.gridSize) {
      case 100:
        col = 10;
        row = 10;
        gridTemplateColumns = "repeat(10, 1fr)";
        break;
      case 256:
        col = 16;
        row = 16;
        gridTemplateColumns = "repeat(16, 1fr)";
        break;
      case 480:
        col = 16;
        row = 30;
        gridTemplateColumns = "repeat(20, 1fr)";
        break;
      default:
        throw Error("Failed to generate board");
    }

    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        const square = document.createElement("div");
        square.classList.add("square");
        Gameboard.gridContainer.style.gridTemplateColumns = gridTemplateColumns;
        Gameboard.gridContainer.appendChild(square);
      }
    }
  }

  
}
