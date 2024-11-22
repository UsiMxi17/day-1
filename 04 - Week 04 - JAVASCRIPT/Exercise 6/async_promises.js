// Create a Promise that simulates fetching user data
// - The Promise should resolve after 1.5 seconds
// - If userId is positive, resolve with user data object 
// - If userId is negative or zero, reject with an error 
// - User data should include: id, name, email, and registrationDate

function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        console.log("Fetching the user's data...");
        setTimeout(() => {
            const dataBase = {
                711: { id: 711, firstName: "Usisipho", email: "usimxi711@gmail.com", registrationDate: "02/02/2024" }
            };
            const user = dataBase[userId];
            // Check if userId is positive
            if (userId > 0 && user) {
                resolve(user); // Resolve with user data
            } else {
                reject(new Error("User not found or invalid ID")); // Reject with an error
            }
        }, 1500); // Resolve after 1.5 seconds
    });
}
// Function to generate HTML for the user's profile
function generateUserProfileHTML(user) {
    return `
        <div class="user-profile">
            <h2>${user.firstName}</h2>
            <p><strong>Email:</strong> <a href="mailto:${user.email}">${user.email}</a></p>
            <p><strong>Registered on:</strong> ${user.registrationDate}</p>
        </div>
    `;
}
// Fetching user data
fetchUserData(711)
    .then(user => {
        console.log("Data retrieved:", user);
        // Generate and display the user's profile as HTML
        const userHTML = generateUserProfileHTML(user);
        console.log("Generated HTML:\n", userHTML);
    })
    .catch(error => {
        console.error("Error:", error.message);
    });

// Create a function that uses template literals for HTML generation 

// Create a Promise that simulates fetching user posts 
// - Should resolve after 1 second 
// - Return an array of post objects 
// - Each post should have: id, title, content, and userId 
// - If userId doesn't exist, reject with error 

// Create a function that chains multiple Promises together 
// - First fetch user data 
// - Then fetch their posts 
// - Combine the data into a single object 
// - Handle any errors that occur in the chain 

// Convert the above Promise chain to use async/await 
// - Use try/catch for error handling 
// - Log each step of the process 
// - Return combined user and posts data 

// Create a function that fetches multiple users in parallel 
// - Take an array of userIds 
// - Fetch all users simultaneously using Promise.all 
// - Handle errors for individual user fetches 
// - Return array of successfully fetched users 

// Create a function that fetches users and their posts in parallel 
// - Fetch user data for multiple users 
// - Once user data is received, fetch all their posts in parallel 
// - Combine user and posts data 
// - Handle errors appropriately 

// Test success cases 
// - Test single user fetch 
// - Test multiple user fetch 
// - Test error handling
