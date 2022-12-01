let valid = false;
let userNumber = 0;
do{
    userNumber = prompt("Please enter an odd number between 1 and 49.")
    if (userNumber % 2 === 0) {
        console.log(`That number is even. Please choose an odd number`)
        continue;
    }
    if (userNumber > 49 || userNumber < 1){
        console.log(`That number is out of bounds. PLease choose a number between 1 and 49`)
        continue;
    }
    if (!isFinite(userNumber)){
        console.log(`That is not a number`);
        continue;
    }
    valid=true;
}while(!valid)

console.log(`Number to skip is ${userNumber}`)

for(let i=1;i <= 50; i++){
    if (i % 2 === 0) {
        continue;
    }
    if (i === parseInt(userNumber)) {
        console.log("A wild " +userNumber +" has appeared! RUN!");
        continue;
    }
    console.log("Here is an odd number: " +i)
}