"use strict";

//------Functions------//

//function to translate numbers in to special card names (i.e. 1 is changed to Ace)
function getCardText(rankDigit){
    switch (rankDigit) {
        case 1 :
            return `Ace`;
            break;
        case 11 :
            return `Jack`;
            break;
        case 12 :
            return `Queen`;
            break;
        case 13 :
            return `King`;
            break;
        default :
            return rankDigit;
    }
}

//assign string value for suit based on number
function setCardSuit(suitNum){
    switch (suitNum) {
        case 1 :
            return `hearts`
            break;
        case 2 :
            return `diamonds`
            break;
        case 3 :
            return `spades`
            break;
        case 4 :
            return `clubs`
            break;
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

function writeHand(hand){
    let stringBuilder = '';

    for (let i = 0; i < hand.length; i++){
        stringBuilder = stringBuilder + hand[i].cardText + "\n";
    }
    return stringBuilder;
}

function writeHouseHand(hand){
    let stringBuilder = '';

    for (let i = 0; i < hand.length; i++){
        if(i===0){
            stringBuilder = 'HIDDEN' + "\n";
            continue;
        }
        stringBuilder = stringBuilder + hand[i].cardText + "\n";
    }
    return stringBuilder;
}

function sumCardValue(hand){
    let totalCardValue = 0;
    for (let i = 0; i < hand.length; i++){
        totalCardValue += hand[i].cardValue;
    }
    return totalCardValue;
}
function sumVisibleHouseCardValue(hand){
    let totalVisibleCardValue = 0;
    for (let i = 0; i < hand.length; i++){
        if(i===0){
            continue;
        }
        totalVisibleCardValue += hand[i].cardValue;
    }
    return totalVisibleCardValue;
}

function displayPlayerHand(hand){
    console.log(`Your hand:\n${writeHand(hand)}`);
    playerCardTotal = sumCardValue(hand);
    console.log(`Card value: ${playerCardTotal}`);
}

function displayHouseHand(hand){

    console.log(`The House's hand:\n${writeHouseHand(hand)}`);
    houseCardTotal = sumCardValue(hand);
    console.log(`Actual house card value is ${houseCardTotal}`)
    console.log(`The House's visible card value: ${sumVisibleHouseCardValue(hand)}`);
}

function dealToHand(hand){
    hand.push(deck.pop());
    hand.push(deck.pop());
    return hand;
}

function hit(hand){
    hand.push(deck.pop());
    displayPlayerHand(hand);
    return hand;
}

//------Deck creation------//

//Create a deck of cards that are in order
var deck = [];

for (let i = 1; i<=4; i++){

    for (let j = 1; j <= 13; j++){
        const card = {cardValue: j, cardText: `${getCardText(j)} of ${setCardSuit(i)}`}
        deck.push(card);
    }
}
//initially shuffles the deck
deck = shuffleDeck(deck);
