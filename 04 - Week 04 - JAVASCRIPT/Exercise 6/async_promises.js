// Create a Promise that simulates fetching user data
// - The Promise should resolve after 1.5 seconds
// - If userId is positive, resolve with user data object 
// - If userId is negative or zero, reject with an error 
// - User data should include: id, name, email, and registrationDate

// Function to simulate fetching user data
function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId > 0) {
                // Simulate user data
                const userData = {
                    id: userId,
                    name: `User ${userId}`,
                    email: `user${userId}@example.com`,
                    registrationDate: new Date().toISOString()
                };
                resolve(userData);
            } else {
                reject(new Error('Invalid userId. Must be a positive number.'));
            }
        }, 1500); // Resolve/reject after 1.5 seconds
    });
}

// Example usage of fetchUserData
async function fetchAPI(userId) {
    try {
        const userData = await fetchUserData(userId);
        console.log('User Data:', userData);
    } catch (error) {
        console.error('Error fetching user data:', error.message);
    }
}

// Call fetchAPI with a positive userId
fetchAPI(1); // This will resolve and log the user data

// Call fetchAPI with a negative userId
fetchAPI(-1); // This will reject and log the error


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
