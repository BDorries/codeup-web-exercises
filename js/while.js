"use strict"

let num = 1;
while(num < 60000){
    num = num*2;
    console.log(num);
}

let allCones = Math.floor((Math.random()*100)+50);
let wantToBuy = Math.floor((Math.random()*5)+1);
console.log(`You have ${allCones} cones left.`);

do {
    if(wantToBuy <= allCones){
        console.log(`A customer buys ${wantToBuy} cones!`)
        allCones -= wantToBuy;
    } else if(wantToBuy > allCones){
        console.log(`A customer tries to buy 
        ${wantToBuy} cones but you only have ${allCones} left`)
    }
    wantToBuy = Math.floor((Math.random()*5)+1);
    console.log(`You now have ${allCones} left.`)
    if (allCones === 0){
        console.log("You sold them all! Congrats! You can finally go home.")
    }
}while(allCones>0)
