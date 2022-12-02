"use strict";

let playerHand = [];
let houseHand = [];

const player = new Player("Player",playerHand);
const house = new Player("House",houseHand)

//------Functions------//

function displayMainMenu(){
    //TODO: input validation
console.log(`
    Welcome to Blackjack! Good luck.\n
    Player's Score: ${player.getScore}\t\tHouse's score: ${house.getScore}\n
    \n
    Please select an option:\n
    1. Play a hand.\n
    2. Exit game.
`)
    return prompt("Select an option.");
}

function gameMenu(){
    //TODO: input Validation
    console.log(`

    Please select an option:\n
    1. Hit.\n
    2. Stand.\n
    3. Return to main menu.
    `)
    return prompt("Select an option.");
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
        playerHand = dealToHand(player.hand);
        houseHand = dealToHand(house.hand);
        displayPlayerHand(player.hand);
        displayHouseHand(house.hand);
        let playerStand = false;
        let houseStand = false;
        while(playingHand){

            //player turn
            if(!playerStand){
                handChoice = gameMenu();
                if(parseInt(handChoice)===1){
                    displayPlayerHand(player.hand);
                    playerHand = hit(player.hand);
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
                if(house.getCardValue() === 21){
                    house.incrementScore();
                    playingHand = false;
                    console.log(`House wins with a hand valued at 21`)
                }else
                if (house.getCardValue() <= 17){
                    console.log(`The house hits...`)
                    houseHand = hit(houseHand);
                    displayHouseHand(houseHand);
                } else
                if(house.getCardValue() > 21){
                    player.incrementScore();
                    playingHand = false;
                    console.log(`The house busts with a ${house.getCardValue}`)
                }
            }

            if(houseStand === true && playerStand === true){
                playingHand = false;
            }

        }
    }
}