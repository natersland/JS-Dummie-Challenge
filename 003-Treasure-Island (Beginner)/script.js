console.log(`Welcome to Treasure Island.`);
console.log(`Your mission is to find the tresure.`);
console.log(`You're at a cross road. Where do you want to go? left or right?`);

// Choose path here
function treasureIslandGame(direction1, direction2, direction3) {
    if (direction1.toLowerCase() === "right") {
        console.log("Game Over")
    }    
    else if(direction1.toLowerCase() === "left") {
        if(direction2.toLowerCase() === "swim") {
            console.log("Game Over")
        }
        else if(direction2.toLowerCase() === "wait"){
            if(direction3.toLowerCase() === "red") {
                console.log("Game Over")
            }
            else if(direction3.toLowerCase() === "blue") {
                console.log("Game Over")
            }
            else if(direction3.toLowerCase() === "yellow") {
                console.log("You Win!")
            }
        }
        else {
            console.log("Game Over")
        }
    }
    else {
        console.log("Game Over")
    }
}


treasureIslandGame("left", "wait", "yellow") 
// direction1 : "right" / "left"
// direction2 : "swim" / "wait"
// direction3 : "red" / "blue" / "yellow"
