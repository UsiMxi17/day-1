// Create a function that validates user input
function validateInput(input) {
    // Check if the input is a string
    if (typeof input !== 'string') {
        return false
    } if (input.trim() === '') { // Check if the string is empty
        return false
    } else {
        return true
    } 
}

// Create a function that demonstrates multiple error types
function demonstrateErrorTypes() {
    // Create an array of error types
    let errorTypes = ['TypeError', 'SyntaxError', 'ReferenceError', 'RangeError'];

    // Loop through the array and create a new error for each type
    errorTypes.forEach((errorType) => {
        try {
            // Throw an error based on the type
            if (errorType === 'TypeError') {
                throw new TypeError("This is a TypeError!");
            } else if (errorType === 'SyntaxError') {
                throw new SyntaxError("This is a SyntaxError!");
            } else if (errorType === 'ReferenceError') {
                throw new ReferenceError("This is a ReferenceError!");
            } else if (errorType === 'RangeError') {
                throw new RangeError("This is a RangeError!");
            }
        } catch (error) {
            // Catch and log the error
            console.log(`${error.name}: ${error.message}`);
        }
    });
}

// Call the function to demonstrate error types
demonstrateErrorTypes();

// Create a collection of helper functions for string manipulation
const stringHelpers = {
    // Function to reverse a string
    reverse: (str) => str.split('').reverse().join(''),

    // Function to capitalize the first letter of each word
    capitalize: (str) => str.replace(/\b\w/g, char => char.toUpperCase()),

    // Function to check if a string is a palindrome
    isPalindrome: (str) => {
        const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
        return cleanedStr === cleanedStr.split('').reverse().join('');
    },

    // Function to count the number of vowels in a string
    countVowels: (str) => (str.match(/[aeiou]/gi) || []).length,

    // Function to remove whitespace from a string
    trim: (str) => str.trim()
};

// Example usage
console.log(stringHelpers.reverse("hello")); // Output: "olleh"
console.log(stringHelpers.capitalize("hello world")); // Output: "Hello World"
console.log(stringHelpers.isPalindrome("A man a plan a canal Panama")); // Output: true
console.log(stringHelpers.countVowels("hello")); // Output: 2
console.log(stringHelpers.trim("   hello   ")); // Output: "hello"


// Create helper functions for array operations
const arrayHelpers = {
    // Function to find the maximum value in an array
    max: (arr) => Math.max(...arr),

    // Function to find the minimum value in an array
    min: (arr) => Math.min(...arr),

    // Function to calculate the sum of all elements in an array
    sum: (arr) => arr.reduce((acc, curr) => acc + curr, 0),

    // Function to remove duplicates from an array
    unique: (arr) => [...new Set(arr)],

    // Function to sort an array in ascending order
    sortAscending: (arr) => [...arr].sort((a, b) => a - b)
};

// Example usage
console.log(arrayHelpers.max([1, 2, 3, 4, 5])); // Output: 5
console.log(arrayHelpers.min([1, 2, 3, 4, 5])); // Output: 1
console.log(arrayHelpers.sum([1, 2, 3, 4, 5])); // Output: 15
console.log(arrayHelpers.unique([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]
console.log(arrayHelpers.sortAscending([5, 3, 1, 4, 2])); // Output: [1, 2, 3, 4, 5]