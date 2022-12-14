"use strict";

let playerHand = [];
let houseHand = [];

const player = new Player("Player",playerHand);
const house = new Player("House",houseHand)

//------Functions------//

function displayMainMenu(){
    //TODO: input validation
console.log(`
   ######################################
   Welcome to Blackjack! Good luck.\n                    
   Player's Score: ${player.score}\t\tHouse's score: ${house.score}\n
   \n
   Please select an option:\n
   1. Play a hand.\n
   2. Exit game.
   ######################################
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
    ---------------------------------------
    `)
    return prompt("Select an option.");
}

function handEnded(player){

    if (player.cardValue >= 21){
        if(hasAce(player.hand)){
            if((player.cardValue -10) <= 21){
                return false;
            }
        }
        return true;
    } else return false;

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
        player.hand = dealToHand(player.hand);
        house.hand = dealToHand(house.hand);
        displayHand(player);
        displayHand(house);

        let playerStand = false;
        let houseStand = false;

        while(playingHand){

            //player turn
            if(!playerStand){

                handChoice = gameMenu();
                if(parseInt(handChoice)===1){
                    console.log("...The player hits...")
                    playerHand = hit(player);
                }
                if (parseInt(handChoice)===2){
                    console.log("...The player stands...")
                    playerStand = true;
                }
                if (parseInt(handChoice)===3){
                    playingHand = false;
                }
                if(player.cardValue === 21){
                    player.incrementScore();
                    playingHand = false;
                    console.log(`You win!`)
                }else
                if(player.cardValue > 21){
                    if(hasAce(player.hand)){
                        if((player.cardValue -10) <= 21){
                            console.log(`Player saved by an ace with a new value of ${player.cardValue-10}`)
                            //do nothing
                        }else{
                            console.log(`Oh no, you busted with a ${player.cardValue}!\nYou lose`)
                            house.incrementScore();
                            playingHand = false;
                        }
                    }
                }
            }

            //house turn
            if(!houseStand && playingHand && !handEnded(house)){

                if (house.cardValue < 17){
                    console.log(`...The house hits...`)
                    houseHand = hit(house);
                }

                if(house.cardValue >= 17 && house.cardValue <= 21){
                    console.log("...The house stands...")
                    houseStand = true;
                    displayHand(house);
                }
            }

            if(house.cardValue === 21){
                    house.incrementScore();
                    playingHand = false;
                    console.log(`House wins with a hand valued at 21`)
                }
            if(house.cardValue > 21){
                if(hasAce(house.hand)){
                    if((house.cardValue -10) <= 21){
                        console.log(`House saved by an ace with a new value of ${house.cardValue-10}`)
                        if(house.cardValue-10 >= 17){
                            houseStand = true;
                        }
                    }else{
                        console.log(`The house busts with a ${house.cardValue}!\nYou win!`)
                        player.incrementScore();
                        playingHand = false;
                    }
                }
            }

            if(playingHand && houseStand === true && playerStand === true){
                playingHand = false;
                if(player.cardValue>house.cardValue && player.cardValue <= 21){
                    player.incrementScore()
                    console.log(`Player's card value is: ${player.cardValue}\nHouse's card value is: ${house.cardValue}\nYou win!`)
                }else
                if(house.cardValue>player.cardValue && house.cardValue <=21){
                    house.incrementScore();
                    console.log(`Player's card value is: ${player.cardValue}\nHouse's card value is: ${house.cardValue}\nYou lose!`)
                }
                else{
                    console.log(`This hand is a draw.`)
                }

            }
            if(!playingHand){
                player.hand = [];
                player.cardValue = 0;
                house.hand = [];
                house.cardValue = 0;
            }
        }
    }
}