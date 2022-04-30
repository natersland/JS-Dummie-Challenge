// Password Generator Project

const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = ["!", "#", "$", "%", "&", "(", ")", "*", "+"];

const passwordGenerator = (letter, symbol, number) => {
  // 👻Eazy Level - Order not randomised:
  // e.g. 4 letter, 2 symbol, 2 number = JduE&!91
  let password = "";
  // random letter จาก array
  let randomLetterCount = 0;
  while (randomLetterCount < letter) {
    password += letters[Math.floor(Math.random() * letters.length)];
    randomLetterCount++;
  }
  // random symbols จาก array
  let randomSymbolsCount = 0;
  while (randomSymbolsCount < symbol) {
    password += symbols[Math.floor(Math.random() * symbols.length)];
    randomSymbolsCount++;
  }
  // random numbers จาก array
  let randomNumbersCount = 0;
  while (randomNumbersCount < number) {
    password += numbers[Math.floor(Math.random() * numbers.length)];
    randomNumbersCount++;
  }

  // 😈Hard Level - Order of characters randomised:
  // e.g. 4 letter, 2 symbol, 2 number = g^2jk8&P
  // สุ่ม array password

  let hardPassword = "";
  const passwordArray = password.split("");
  // Generate random number
  let i = passwordArray.length - 1;
  console.log(passwordArray[passwordArray.length - 1]);

  while (i > 0) {
    let j = Math.floor(Math.random() * i + 1);
    let temp = passwordArray[i];
    passwordArray[i] = passwordArray[j];
    passwordArray[j] = temp;
    i--;
  }
  // password array to str
  for (const char in passwordArray) {
    console.log(char);
    hardPassword += passwordArray[char];
  }

  console.log(password);
  console.log(hardPassword);
};

passwordGenerator(8, 3, 3);
// instruction
// How many letters would you like in your password?
// How many symbols would you like?
// How many numbers would you like?
