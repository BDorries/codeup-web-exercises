"use strict"

class Player{
    constructor(name, score, cardValue){
        this.name = name;
        this.score = score;
        this.cardValue = cardValue;
    }
    getName(){
        return this.name;
    }
    getScore(){
        return this.score;
    }
    getCardValue(){
        return this.cardValue;
    }

}