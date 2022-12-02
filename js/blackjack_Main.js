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

function isHandOver(hand){

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
        let playerStand = false;
        let houseStand = false;
        while(playingHand){

            //player turn
            if(!playerStand){
                handChoice = gameMenu();
                if(parseInt(handChoice)===1){
                    displayPlayerHand(playerHand);
                    playerHand = hit(playerHand);
                }
                if (parseInt(handChoice)===1){
                    playerStand = true;
                }
                if (parseInt(handChoice)===3){
                    playingHand = false;
                }

            }

            //house turn
            if(!houseStand){
                if(houseCardTotal === 21){
                    houseScore++;
                    playingHand = false;
                    console.log(`House wins with a hand valued at 21`)
                }else
                if (houseCardTotal <= 17){
                    console.log(`The house hits...`)
                    houseHand = hit(houseHand);
                    displayHouseHand(houseHand);
                } else
                if(houseCardTotal > 21){
                    playerScore++;
                    playingHand = false;
                    console.log(`The house busts with a ${houseCardTotal}`)
                }
            }

            if(houseStand === true && playerStand == true){
                playingHand = false;
            }

        }
    }
}