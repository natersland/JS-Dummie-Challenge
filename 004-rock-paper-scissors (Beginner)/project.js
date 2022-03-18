class RpsGame {
  constructor() {}
  drawGraphic(number) {
    if (number === 0) {
      return `✊🏻`;
    } else if (number === 1) {
      return `🖐🏻`;
    } else if (number === 2) {
      return `✌🏻`;
    }
  }
  game(user) {
    // Game Data
    let computerPlay = Math.floor(Math.random() * 3);
    let userPlay = null;
    // Check User
    if (user === "rock") {
      userPlay = 0;
    } else if (user === "paper") {
      userPlay = 1;
    } else if (user === "scissors") {
      userPlay = 2;
    } else {
      console.log("ไม่ได้แดกชั้นหรอก");
    }
    const drawResult = () => {
      return `You: ${this.drawGraphic(userPlay)}\nComputer: ${this.drawGraphic(
        computerPlay
      )}`;
    };

    // Game Zone
    if (computerPlay === userPlay) {
      console.log(`DRAW!\n${drawResult()}`);
    } else if (
      (userPlay === 0 && computerPlay === 2) ||
      (userPlay === 1 && computerPlay === 0) ||
      (userPlay === 2 && computerPlay === 1)
    ) {
      console.log(`You Win!\n${drawResult()}`);
    } else {
      if (userPlay === 0 || userPlay === 1 || userPlay === 2) {
        console.log(`You Lose!\n${drawResult()}`);
      } else {
        console.log(`ไปใส่มาใหม่นะ`);
      }
    }
  }
}
const user1 = new RpsGame();
const user2 = new RpsGame();

user1.game("rock"); // rock, paper, scissors
/* user2.game("scissors"); // rock, paper, scissors
 */
