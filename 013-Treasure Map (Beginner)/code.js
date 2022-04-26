function treasureMap(position) {
  let row1 = ["⬜️", "⬜️", "⬜️"];
  let row2 = ["⬜️", "⬜️", "⬜️"];
  let row3 = ["⬜️", "⬜️", "⬜️"];
  let map = [row1, row2, row3];
  //แยกตัวเลข เป็น 2 หลัก
  const newPosition = position.toString().split("");
  const realNewPosition = newPosition.map(Number);
  //   console.log(realNewPosition);
  // เลขหลักที่ 1 เป็นแกน x 
  const xPosition = realNewPosition[0] - 1;
  // เลขหลักที่ 2 เป็นแกน y 
  const yPosition = realNewPosition[1] - 1;
  // ใส่เพรชลงไปใน map
  map[xPosition][yPosition] = "💎"
  console.log(`${row1}\n${row2}\n${row3}`);
}

treasureMap(32); //Where do you want to put the treasure? ex. 23 / 13 / 11 / etc.
