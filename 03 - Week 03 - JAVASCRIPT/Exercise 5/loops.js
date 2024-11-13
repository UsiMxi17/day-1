// Create an array called numbers with values 1 through 5
let numberz = [1, 2, 3, 4, 5];

// Write a for loop that prints each number in the array
for (number in numberz){
    console.log(number);
}
// Write a while loop that counts down from 5 to 1
// Countdown from 5 to 1
let countdown = 5;
while (countdown >= 1) {
    console.log(countdown);
    countdown--; // Decrease countdown by 1
}

// Array of numbers
// Print only even numbers from the numbers array
console.log("Even numbers:");
for (let i = 0; i < numberz.length; i++) {
    if (numberz[i] % 2 === 0) {
        console.log(numberz[i]);
    }
}

// Calculate the sum of all numbers in the array
let sum = 0;
for (let i = 0; i < numberz.length; i++) {
    sum += numberz[i]; // Add each number to sum
}
console.log("Sum of all numbers:", sum);

// ^_~