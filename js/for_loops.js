"use strict"

function showMultiplicationTable(num){
    for (let i = 1; i <= 10; i++){
        console.log(`${num} x ${i} = ${num*i}`);
    }
}

function isEven(num){
    if (parseInt(num) % 2 === 0){
        return 'is even';
    }else {
        return `is odd`;
    }
}

showMultiplicationTable(7);

for (let i = 1; i <= 10; i++){
    let random = Math.floor((Math.random() * 200) + 20);
    console.log(`${random} ${isEven(random)}`)
}


for (let i = 1; i < 10; i++){
    let displayNum = i.toString();
    for(let j = 2; j <= i; j++){
        displayNum += i.toString();
    }
    console.log(displayNum);
}

for (let i = 100; i > 0; i-=5){
    console.log(i);
}