"use strict";

//------Functions------//

//function to translate numbers in to special card names (i.e. 1 is changed to Ace)
function getCardText(rankDigit){
    switch (rankDigit) {
        case 1 :
            return `Ace`;
        case 11 :
            return `Jack`;
        case 12 :
            return `Queen`;
        case 13 :
            return `King`;
        default :
            return rankDigit;
    }
}

//assign string value for suit based on number
function setCardSuit(suitNum){
    switch (suitNum) {
        case 1 :
            return `hearts`
        case 2 :
            return `diamonds`
        case 3 :
            return `spades`
        case 4 :
            return `clubs`
    }
}

//shuffles the deck. This function is automatically executed when the deck is first created
function shuffleDeck(deck){
    let currentIndex = deck.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [deck[currentIndex], deck[randomIndex]] = [
            deck[randomIndex], deck[currentIndex]];
    }

    return deck;
}

function writeHand(player){
    let hand = player.hand;
    let stringBuilder = '';

    for (let i = 0; i < hand.length; i++){
        if (player.name === 'House' && i === 0){
            stringBuilder = 'HIDDEN' + "\n";
            continue;
        }
        stringBuilder = stringBuilder + hand[i].cardText + "\n";
    }
    return stringBuilder;
}

function sumCardValue(player){
    let totalCardValue = 0;
    let totalVisibleValue = 0;

    for (let i = 0; i < player.hand.length; i++){
        if(player.name === "House" && i === 0){
            totalCardValue += player.hand[i].cardValue;
        } else{
            totalVisibleValue += player.hand[i].cardValue;
            totalCardValue += player.hand[i].cardValue;
        }
    }
    player.cardValue = totalCardValue;
    player.visibleCardValue = totalVisibleValue;
    return player;
}

function displayHand(player){
    console.log(`${player.name}'s hand:\n${writeHand(player)}`);
    player = sumCardValue(player);
    console.log(`${player.name}'s card value: ${player.visibleCardValue}`);
    // console.log(`**DEBUG** House actual cardValue is: ${house.cardValue}`);
}

// All cards are at face value, except for the King, Queen and Jack which count as 10.
// An Ace will have a value of 11 unless that would give a player or the dealer a score
// in excess of 21; in which case, it has a value of 1.

function hasAce(hand) {

    for (let i = 0; i < hand.length; i++) {
        if(hand[i].cardValue === 1){
            return true
        } else return false;
    }
}

//DEBUG TO TEST FOR ACES
// function dealToHand(hand){
//     const card = {cardValue: 1, cardText: `Ace of debugging`}
//     hand.push(card);
//     hand.push(deck.pop());
//
//     return hand;
// }

function dealToHand(hand){
    hand.push(deck.pop());
    hand.push(deck.pop());
    return hand;
}

function hit(player){
    player.hand.push(deck.pop());
    displayHand(player);
    // console.log(`**DEBUG** House actual cardValue is: ${house.cardValue}`);
    return player.hand;
}

//------Deck creation------//

//Create a deck of cards that are in order
var deck = [];

for (let i = 1; i<=4; i++){

    for (let j = 1; j <= 13; j++){
        const card = {cardValue: j, cardText: `${getCardText(j)} of ${setCardSuit(i)}`}
        if(card.cardValue > 10){
            card.cardValue = 10;
        }
        deck.push(card);
    }
}
//initially shuffles the deck
deck = shuffleDeck(deck);
