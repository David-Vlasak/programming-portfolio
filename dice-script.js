//have all 6 images loaded but toggle the attribute
//to show just one image on random

//have a script that will determine which dice is higher
//and display the winner

//make sure this happens on Page Refresh

//create a function that will target the elements needed
// to change

//toggle all dices off (hidden), generate a random number
//from the array of dice images, and display that image.
//evaluate both dices and display the winner

var previousDiceThrown1;
var previousDiceThrown2;

function rollDice(){
    var diceThrow1 = Math.floor((Math.random() * 6) + 1);
    if (document.querySelector("#phd1").classList.contains("invisible")) {
        document.querySelector(`#dice${previousDiceThrown1}`).classList.toggle("invisible");
    }
    else {
        document.querySelector("#phd1").classList.add("invisible");
    }

    document.querySelector(`#dice${diceThrow1}`).classList.toggle("invisible");
    
    previousDiceThrown1 = diceThrow1;

///////////////////////////////////////

    var diceThrow2 = Math.floor((Math.random() * 6) + 7);
    if (document.querySelector("#phd2").classList.contains("invisible")) {
        document.querySelector(`#dice${previousDiceThrown2}`).classList.toggle("invisible");
    }
    else {
        document.querySelector("#phd2").classList.add("invisible");
    }

    document.querySelector(`#dice${diceThrow2}`).classList.toggle("invisible");
    
    previousDiceThrown2 = diceThrow2;

    ////////////////////

    if (diceThrow1 > (diceThrow2 - 6)) {
        document.querySelector("h1").textContent = "🚩Player 1 Won!"
    }
    if (diceThrow1 < (diceThrow2 - 6)) {
        document.querySelector("h1").textContent = "Player 2 Won!🚩"
    }
    if (diceThrow1 == (diceThrow2 - 6)) {
        document.querySelector("h1").textContent = "🚩It's a Tie!🚩"
    }
}
  
