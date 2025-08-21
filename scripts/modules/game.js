export class Logic {
  static gameoverScreen = document.querySelector("#gameover-screen");
  static gameScreen = document.querySelector("#game-screen");
  static startScreen = document.querySelector("#start-screen");
  static restartGameBtn = document.querySelector("#restart-game");

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

  checkForBombClicks(e) {
    let noBomb = true;
    if (e.target.textContent === "💣") {
      noBomb = false;
      e.target.style.backgroundColor = "red";
      e.target.style.color = "var(--numbers)";
      setTimeout(() => {
        Logic.gameScreen.style.display = "none";
        Logic.gameoverScreen.style.display = "flex";
      }, 100);
    }
    return noBomb;
  }

  checkForCloseBombs(e) {
    if (this.checkForBombClicks(e)) {
      let closeBombCount = 0;
      try {
        if (e.target.previousSibling.textContent === "💣") {
          closeBombCount++;
        }
      } catch (error) {
        closeBombCount = 0;
      }
      try {
        if (e.target.nextSibling.textContent === "💣") {
          closeBombCount++;
        }
      } catch (error) {
        closeBombCount = 0;
      }
      if (closeBombCount) {
        e.target.textContent = closeBombCount;
        e.target.style.color = "var(--numbers)";
        e.target.style.backgroundColor = "var(--revealed-tiles)";
      } else {
        e.target.style.backgroundColor = "var(--revealed-tiles)";
      }
    }
  }

  restartGame() {
    window.location.reload();
  }
}
