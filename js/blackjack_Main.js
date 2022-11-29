"use strict";

var playerHand = [];
var houseHand = [];

var playerScore = 0;
var houseScore = 0;

var playerCardTotal = 0;
var houseCardTotal = 0;

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
    //TODO: input Validation
    let gameMenuChoice = prompt("Select an option.");
    console.log(`

    Please select an option:\n
    1. Hit.\n
    2. Stand.\n
    3. Return to main menu.
    `)
    return gameMenuChoice;
}

function displayPlayerHand(hand){
    console.log(`Your hand:\n${displayHand(hand)}`);
    playerCardTotal = sumCardValue(hand);
    console.log(`Card value: ${playerCardTotal}`);
}
//------Game Loop------//
let quit = false;
let playingHand = false;
let menuChoice = 0;
let handChoice = 0;

while (!quit){
    displayMainMenu();
    menuChoice = prompt("Select an option.");

    switch (parseInt(menuChoice)) {
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
        dealToHand(playerHand);
        while(playingHand){

            gameMenu();
            handChoice = prompt(`What would you like to do?`);

            switch (parseInt(handChoice)) {
                case 1 :
                    hit(playerHand);
                    displayPlayerHand(playerHand)
                case 2 :
                    //houseTurn = true;
                case 3 :
                    playingHand = false;
            }
        }
    }
}