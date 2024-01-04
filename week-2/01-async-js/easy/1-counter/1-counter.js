/*
Create a counter in JavaScript

We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
It should go up as time goes by in intervals of 1 second
*/

let counter = 0;
console.log("The Counter runs for 10 seconds...");
const interval = setInterval(function(){
    counter++;
    console.log("Counter:", counter);
    if (counter == 10) {
        clearInterval(interval);
    }
}, 2000);