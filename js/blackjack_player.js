"use strict"

class Player{
    constructor(name, hand){
        this.name = name;
        this.hand = hand;
        this.score = 0;
        this.cardValue = 0;
        this.visibleCardValue = 0;
    }
    incrementScore(){
        this.score++;
    }
}