// Create a global variable called globalCount
let globalCount = 0; // Using 'let' for potential future modifications

// Create a function that demonstrates local scope
function localScope() {
    const localCount = 5; // Local variable
    console.log("Inside localScope: ", localCount);
}

// Create a function that tries to modify both variables
function modifyVariables(newGlobalCount, newLocalCount) {
    globalCount = newGlobalCount; // Modifying the global variable
    console.log("Modified globalCount: ", globalCount);
    
    // Attempting to modify a local variable (will not work as it's not defined here)
    console.log("Attempted to modify localCount: ", newLocalCount);
}

// Test the functions
localScope();
modifyVariables(10, 20); // Modifies the global variable and logs the new values

console.log("Final globalCount: ", globalCount); // Logs the final value of globalCount

// Create a Student constructor function
class Student {
    constructor(name, surname, age, hairType) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.hairType = hairType;
    }
}


// Storing instances in an array
const students = [student1, student2];

// Logging the student instances
console.log(students);


// Create several student instances
const student1 = new Student('Usisipho', 'Mxinwa', 23, 'Bald');
const student2 = new Student('Avela', 'Nikani', 27, 'Low Fade');

// Create an object literal with nested properties
const nestedObject = {
    key1: "value1",
    key2: "value2",
    nestedKey: {
        subKey1: "subValue1",
        subKey2: "subValue2",
        deeperNested: {
            deepKey1: "deepValue1",
            deepKey2: "deepValue2"
        }
    }
};

// Example of accessing nested properties
console.log(nestedObject.key1);
console.log(nestedObject.nestedKey.subKey1);
console.log(nestedObject.nestedKey.deeperNested.deepKey2);