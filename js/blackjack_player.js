"use strict"

class Player{
    constructor(name, hand){
        this.name = name;
        this.hand = hand;
        this.score = 0;
        this.cardValue = 0;
    }
    getName(){
        return this.name;
    }
    getHand(){
        return this.hand;
    }
    getScore(){
        return this.score;
    }
    getCardValue(){
        return this.cardValue;
    }
    incrementScore(){
        this.score++;
    }
}