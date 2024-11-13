// Create a variable called score and give it a value between 0 and 100
let score = 100;

// Create a variable called passingGrade and set it to 60
let passingGrade = 60;

// Write an if statement to check if score is greater than or equal to passingGrade
if (score >= passingGrade) {
    console.log("You passed the test!");
    // Check if the score is perfect (100)
    if (score === 100) {
        console.log("Perfect score!");
    }
} else {
    console.log("You failed the test!");
}

// Print "Passed" or "Failed" based on the score
console.log(score >= passingGrade ? "Passed" : "Failed");
