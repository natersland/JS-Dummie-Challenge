// Insert Your data
let yourTotalBill = 555;
let giveTipPercent = 15;
let peopleSplit = 5;

// Program Zone
console.log("Welcome to the tip calculator.")
console.log(`Your total bill is ${yourTotalBill}$`)
console.log(`What percentage tip you like to give is ${giveTipPercent}%`)
let tipCalc = (((yourTotalBill*(giveTipPercent/100))+yourTotalBill)/peopleSplit)
console.log(`Each person should pay: ${tipCalc}$`)


