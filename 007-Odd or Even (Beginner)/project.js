const oddEvenChecker = (...rest) => {
  let evenNumber = [];
  let oddNumber = [];
  for (let i = 0; i < rest.length; i++) {
    if (rest[i] % 2 === 0) {
      evenNumber.push(rest[i]);
    } else {
      oddNumber.push(rest[i]);
    }
  }
  console.log(`Even: ${evenNumber}\nOdd: ${oddNumber}`);
};

oddEvenChecker(1, 5, 95, 862, 429922, 8225, 205);
