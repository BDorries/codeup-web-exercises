"use strict"
console.log("Hello from inline JavaScript")
alert(`Welcome to my website!`)

let favColor = prompt(`What is your favorite color?`);

alert(`You entered ${favColor}`);

/**
 * You have rented some movies for your kids:
 * The little mermaid (for 3 days),
 * Brother Bear (for 5 days, they love it),
 * and Hercules (1 day, you don't know yet if they're going to like it).
 * If price for a movie per day is $3, how much will you have to pay?
 */

let pricePerDay = prompt(`What is the price per day for these movies?`);
let mermaidDays= prompt(`How long will you rent The Little Mermaid?`);
let bearDays= prompt(`How long will you rent The Brother Bear?`);
let hercDays= prompt(`How long will you rent The Hercules?`);

alert(`Your total price is: $${(mermaidDays*pricePerDay)+(bearDays*pricePerDay)+(hercDays*pricePerDay)}`)