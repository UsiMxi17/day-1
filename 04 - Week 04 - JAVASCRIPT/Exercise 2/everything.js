// Create a function called sum. The function will take in a parameter and calculate all the numbers from 0 -> the parameter.
// You must check if the parameter is an integer first before any calculation is made. If the parameter is not a number, return a message stating,
// “The value passed is not a number”. You are NOT allowed to use methods(!Number.isInteger(n)) or regular expressions(.match(/cat/g)). Make sure to test your code effectively.
// function sum(n) {
//     // Check if the parameter is not a number or not an integer
//     if (typeof n !== 'number' || n % 1 !== 0) {
//         return "The value passed is not a number";
//     }

//     let total = 0;
//     for (let i = 0; i <= n; i++) {
//         total += i;
//     }
//     return total;
// }

// // Test the function with a number
// console.log(sum(9));
// console.log(sum(0));
// console.log(sum(3));
// console.log(sum(8));
// console.log(sum(5.5));
// console.log(sum("coding academy"));

// Create a function called ‘factorial’ that takes in a number as a parameter. The function will print the factorial of the entered number, e.g. factorial(4) ->4*3*2*1 //output 24
// function factorial(number) {
//     if (number < 0) {
//         console.log("Factorial is not defined for negative numbers.");
//         return;
//     }
//     let result = 1;
//     for (let i = number; i > 0; i--) {
//         result *= i;
//     }
//     console.log(result);
// }

// // Example usage:
// factorial(7); // Output: 5024

// Create a function called funkyMath . If this function is called with 2 arguments the function will subtract the first from the second. 
// If the function is called with 3 arguments it will add all 3 numbers together. If the function is called with 4 arguments it will add together argument 1 and 2 , 3 and 4 separately.
// Then divide them accordingly, eg funkyMath(8,2,3,5) -> 8+2 divided by 3+5 -> 10/8 //output 1,25
// function funkyMath(a, b, c, d) {
//     const argCount = arguments.length;

//     if (argCount === 2) {
//         return b - a; // Subtract the first from the second
//     } else if (argCount === 3) {
//         return a + b + c; // Add all three numbers together
//     } else if (argCount === 4) {
//         const sum1 = a + b; // Sum of the first two arguments
//         const sum2 = c + d; // Sum of the last two arguments
//         return sum1 / sum2; // Divide the two sums
//     } else {
//         return "Invalid number of arguments"; // Handle unexpected number of arguments
//     }
// }

// // Test cases
// console.log(funkyMath(8, 2));
// console.log(funkyMath(1, 2, 3));
// console.log(funkyMath(8, 2, 3, 5));
// console.log(funkyMath(5, 10, 2, 4));


// Create a loop that will remove all the odd numbers from the array and add them to a new array. Use the current array [1, 2 , 33, 45, 6,44].
// Bonus: Make sure to arrange them from smallest to biggest.()
// let numbers = [1, 2, 33, 45, 6, 44];
// let oddNumbers = [];
// let evenNumbers = [];

// // Loop through the original array
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 !== 0) {
//         // If the number is odd, add it to the oddNumbers array
//         oddNumbers.push(numbers[i]);
//     } else {
//         // If the number is even, add it to the evenNumbers array
//         evenNumbers.push(numbers[i]);
//     }
// }

// // Sort the Numbers array from smallest to largest
// numbers.sort((a, b) => a - b);

// // Output the results
// console.log("Odd Numbers:", oddNumbers);
// console.log("Even Numbers:", evenNumbers);

// Create an object called ‘me’ with properties of first name, last name, age, favourite colour, dream car

// Create and add a new property and value of ‘favourite food’ to the object. //. Now delete the age property from the object