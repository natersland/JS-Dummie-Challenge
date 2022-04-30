const studentHeight = [156, 178, 165, 171, 187];
let sumHeight = 0;

let i = 0;
while (i < studentHeight.length) {
  console.log(studentHeight[i]);
  sumHeight += studentHeight[i];
  i++;
}

const result = Math.round(sumHeight / studentHeight.length);

console.log(result);
