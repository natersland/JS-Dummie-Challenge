class LoveCalculator {
  constructor(name1, name2) {
    this.name1 = name1;
    this.name2 = name2;
    this.combileName = name1 + name2;
    this.trueScore = 0;
    this.loveScore = 0;
  }

  findTrueScore() {
    const charSet1 = ["t", "r", "u", "e"];
    for (let letter of this.combileName) {
      for (const char in charSet1) {
        if (letter === charSet1[char]) {
          this.trueScore++;
        }
      }
    }
  }
  findLoveScore() {
    const charSet2 = ["l", "o", "v", "e"];
    console.table(charSet2);
    for (let letter of this.combileName) {
      for (const char in charSet2) {
        if (letter === charSet2[char]) {
          this.loveScore++;
        }
      }
    }
  }
  resultScore(coupleName) {
    coupleName.findTrueScore();
    coupleName.findLoveScore();
    const resultScore = Number(String(this.trueScore) + String(this.loveScore));
    if (resultScore >= 40 && resultScore <= 50) {
      console.log(`💖Your score is ${resultScore}, you are alright together.`);
    } else if (resultScore <= 10 || resultScore >= 90) {
      console.log(
        `🖤Your score is ${resultScore}, you go together like coke and mentos.`
      );
    } else {
      {
        console.log(`🤍Your score is ${resultScore}`);
      }
    }
  }
}

const couple1 = new LoveCalculator("Kanye West", "Kim Kardashian");
couple1.resultScore(couple1);
