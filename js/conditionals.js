"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// function analyzeColor(color){
//     if(color.toLowerCase()==="blue"){
//         return "Blue is nice.";
//     } else
//     if(color.toLowerCase()==="purple"){
//         return "purple was my mom's favorite color.";
//     }
//     if(color.toLowerCase()==="orange"){
//         return "Orange is my least favorite color.";
//     } else
//     if(color.toLowerCase()==="yellow"){
//         return "Tie a yellow ribbon around an old oak tree.";
//     }
//     if(color.toLowerCase()==="green"){
//         return "Green was my favorite color for most of my life.";
//     } else
//     if(color.toLowerCase()==="grey" || color.toLowerCase()==="gray"){
//         return "Grey is the best!";
//     }
//     if(color.toLowerCase()==="white"){
//         return "It's a nice day for a white wedding.";
//     } else
//     {
//         return "I don't know anything about that color.";
//     }
// }

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

//console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

function analyzeColor(color){
    switch(color.toLowerCase()){
        case 'red' :
            return "Red is nice";
            break;
        case 'orange' :
            return "Orange is my least favorite color";
            break;
        case 'yellow' :
            return "Tie a yellow ribbon 'round an old oak tree";
            break;
        case 'green' :
            return "Green was my favorite color for most of my life";
            break;
        case 'blue' :
            return "I can't think of anything to say about blue.";
            break;
        case 'indigo' :
            return "Indigo is a fancy name for purple.";
            break;
        default :
            return "I know nothing about that color.";
    }
}

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

let color = prompt(`What is your favorite color?`)
alert(analyzeColor(color));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(luckyNum, priceBeforeDiscount){
    let discount = 0;
    switch(luckyNum){
        case 1 :
            discount = .1;
            break;
        case 2 :
            discount = .25;
            break;
        case 3 :
            discount = .35;
            break;
        case 4 :
            discount = .5;
            break;
        case 5 :
            discount = 1;
            break;
        default :
            discount = 0;
    }
    return ((priceBeforeDiscount)-(priceBeforeDiscount*discount));
}

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

let price = prompt("What was your total bill?");
alert(`Your lucky number was ${luckyNumber}.\n
That means your bill is now $${calculateTotal(luckyNumber, price).toFixed(2)}`);

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
let valid = false;
let num = prompt(`Please enter a number`);
num = parseInt(num);
if(typeof(num) !== 'number'){
    alert("That is not a number.")
} else{
    if(num % 2 === 0) {
        alert(`That number is even.`);
    }
    if(num % 2 === 1){
        alert(`That number is odd.`);
    }
    alert(`${num} + 100 = ${num+100}.`)
    if(num>=0){
        alert(`That number is positive`);
    }
    if(num<0){
        alert(`That number is negative`)
    }
}

