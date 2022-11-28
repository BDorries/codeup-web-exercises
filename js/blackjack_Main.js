"use strict";

var playerHand = [];
var houseHand = [];

var playerScore = 0;
var houseScore = 0;

//------Functions------//

function displayMainMenu(){
console.log(`
    Welcome to Blackjack! Good luck.\n
    Player's Score: ${playerScore}\t\tHouse's score: ${houseScore}\n
    \n
    Please select an option:\n
    1. Play a hand.
    2. Exit game.
`)}

function gameMenu(){
    let gameMenuChoice = prompt("Select an option.");
    console.log(`

    Please select an option:\n
    1. Hit.
    2. Stand.
    3. Return to main menu.
    `)

}

//------Game Loop------//
let quit = false;
let playingHand = false;

while (!quit){
    displayMainMenu();
    let playerChoice = prompt("Select an option.");

    switch (parseInt(playerChoice)) {
        case 1 :
            playingHand = true;
            break;
        case 2 :
            quit = true;
            break;
        default :
            console.log("Invalid choice. Please press 1 or 2")
    }
    if(playingHand){
        playerHand.push(deck.pop())
        playerHand.push(deck.pop())
        console.log(`Player's Hand\n${displayHand(playerHand)}`)
        let cardValueTotal = sumCardValue(playerHand);
        console.log(`Your cards add up to: ${cardValueTotal}`)
    }
}