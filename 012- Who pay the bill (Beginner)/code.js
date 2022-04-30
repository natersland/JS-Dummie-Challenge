const nameList = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

nameList.length;
const randomName = (arr) => {
  let result = Math.floor(Math.random() * arr.length);
  console.log(`🎉${arr[result]} is going to buy the meal today!🎉`);
};

randomName(nameList);
