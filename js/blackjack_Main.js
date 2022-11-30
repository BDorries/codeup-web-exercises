"use strict";

var playerHand = [];
var houseHand = [];

var playerScore = 0;
var houseScore = 0;

var playerCardTotal = 0;
var houseCardTotal = 0;

//------Functions------//

function displayMainMenu(){
    //TODO: input validation
console.log(`
    Welcome to Blackjack! Good luck.\n
    Player's Score: ${playerScore}\t\tHouse's score: ${houseScore}\n
    \n
    Please select an option:\n
    1. Play a hand.\n
    2. Exit game.
`)
    let mainMenuChoice = prompt("Select an option.")
    return mainMenuChoice;
}

function gameMenu(){
    //TODO: input Validation
    console.log(`

    Please select an option:\n
    1. Hit.\n
    2. Stand.\n
    3. Return to main menu.
    `)
    let gameMenuChoice = prompt("Select an option.");
    return gameMenuChoice;
}

function computerTurn() {

    if(houseCardTotal > 21){
        return -1;
    }


    return 0;
}


//------Game Loop------//
let quit = false;
let playingHand = false;
let menuChoice = 0;
let handChoice = 0;

while (!quit){

    menuChoice = displayMainMenu();

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
        playerHand = dealToHand(playerHand);
        houseHand = dealToHand(houseHand);
        let houseTurn = false;
        displayPlayerHand(playerHand);
        displayHouseHand(houseHand);
        while(playingHand){
            //player turn
            handChoice = gameMenu();
            switch (parseInt(handChoice)) {
                case 1 :
                    displayPlayerHand(playerHand);
                    playerHand = hit(playerHand);
                    break;
                case 2 :
                    //todo: houseTurn = true;
                    break;
                case 3 :
                    playingHand = false;
            }
            //house turn
            if(houseTurn){
                houseCardTotal = computerTurn();
            }
        }
    }
}