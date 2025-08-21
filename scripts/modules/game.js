export class Logic {
  getTotalSquares() {
    let totalGridSquares = 0;
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => totalGridSquares++);
    let bomb = 0;
    switch (totalGridSquares) {
      case 100:
        bomb = 10;
        break;
      case 256:
        bomb = 40;
        break;
      case 480:
        bomb = 99;
        break;
      default:
        throw Error("Failed to set number of bombs.");
    }
    return { bomb, totalGridSquares, squares };
  }

  placeBombs() {
    const numberOfBombs = this.getTotalSquares();
    for (let i = 0; i < numberOfBombs.bomb; i++) {
      const randomNumber = Math.floor(
        Math.random() * numberOfBombs.totalGridSquares
      );
      numberOfBombs.squares[randomNumber].textContent = "💣";
    }
  }
}
