const studentScore = [78, 65, 89, 86, 55, 91, 64, 89];
let highestScore = 0;

let i = 0;
while (i < studentScore.length) {
  if (studentScore[i] > highestScore) {
    highestScore = studentScore[i];
  }
  i++;
}

console.log(`The highest score in the class is: ${highestScore}`);
