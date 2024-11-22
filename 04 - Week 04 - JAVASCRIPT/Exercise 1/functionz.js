// Create a function called ‘multiply’ that will take in 3 parameters and multiply all 3 numbers together. Note: The argument passed must NOT be the same number.
// function multiply(a, b, c) {
//     return a * b * c;
// }

// console.log(multiply(7, 3, 5)); // Outputs: 105

// Create a function expression called ‘convertToSeconds’ that takes in a number of minutes as an argument and returns the amount in seconds. ***Do not use a console.log() inside of the function***
function convertToSeconds(minutes) {
    return minutes * 60;
}



// Create a function called fahrenheitToCelsius that takes the temperature as a parameter and returns the equivalent temperature in Celsius. ***Do not use a console.log() inside of the function***
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

// Create a function that takes a string as a parameter and returns the reverse of the string. ***Do not use a console.log() inside of the function ***
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Create a function that takes in a string and returns the number of Vowels in the sentence. E.g. countVowels(‘Javascript’) //output =3 ***Do not use a console.log() inside of the function***
function countVowels(sentence) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of sentence) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

// Create a “isPrime” function that takes a number as a parameter and returns true if the number is prime, and false otherwise. Make sure to test your code with 4 numbers
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Testing the isPrime function with 4 numbers
console.log(isPrime(2)); // true
console.log(isPrime(4)); // false
console.log(isPrime(17)); // true
// Create a function called ‘multiply’ that will take in 3 parameters and multiply all 3 numbers together. Note: The argument passed must NOT be the same number.
// function multiply(a, b, c) {
//     return a * b * c;
// }

// console.log(multiply(7, 3, 5)); // Outputs: 105

// Create a function expression called ‘convertToSeconds’ that takes in a number of minutes as an argument and returns the amount in seconds. ***Do not use a console.log() inside of the function***
function convertToSeconds(minutes) {
    return minutes * 60;
}



// Create a function called fahrenheitToCelsius that takes the temperature as a parameter and returns the equivalent temperature in Celsius. ***Do not use a console.log() inside of the function***
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

// Create a function that takes a string as a parameter and returns the reverse of the string. ***Do not use a console.log() inside of the function ***
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Create a function that takes in a string and returns the number of Vowels in the sentence. E.g. countVowels(‘Javascript’) //output =3 ***Do not use a console.log() inside of the function***
function countVowels(sentence) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of sentence) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

// Create a “isPrime” function that takes a number as a parameter and returns true if the number is prime, and false otherwise. Make sure to test your code with 4 numbers
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Testing the isPrime function with 4 numbers
console.log(isPrime(2)); // true
console.log(isPrime(4)); // false
console.log(isPrime(17)); // true
console.log(isPrime(18)); // false