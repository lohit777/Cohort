/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    let start = Date.now(); //It gives current date
    let sum=0;
    for(let i=0;i<n;i++)
    {
        sum=sum+i;
    }
    return 0.01;
}
let start = new Date().getTime(); //It gives current time in milliseconds after 1970

calculateTime(10000000000) ; 
let endTime = new Date().getTime();
let totalTime = endTime - start ;
console.log("Time taken to execute the program is " + totalTime) ;
