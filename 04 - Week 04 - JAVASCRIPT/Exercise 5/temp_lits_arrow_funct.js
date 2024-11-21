// Create a multiline string using template literals
const multilineString = `This is a multiline string.
It spans multiple lines,
making it easier to read and write.`;
console.log(multilineString);

// Create a function that uses template literals for HTML generation
const generateHTML = (title, content) => `
    <div>
        <h1>${title}</h1>
        <p>${content}</p>
    </div>
`;

// Generate HTML string using the function
const htmlString = generateHTML("Welcome", "This is a simple HTML generation using template literals.");
console.log(htmlString);

// Arrow function for addition
const add = (a, b) => a + b;
console.log(add(5, 3)); // Outputs: 8

// Arrow function with array methods
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Outputs: [2, 4, 6, 8, 10]
