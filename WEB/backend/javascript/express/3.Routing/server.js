// Import Express framework
const express = require('express');

// Create an Express application
const app = express();

// Middleware to parse JSON data from request body
app.use(express.json());

// Middleware to parse URL-encoded data (form data)
app.use(express.urlencoded({ extended: true }));

// Sample in-memory user data
const users = [
    { id: 1, age: 23 },
    { id: 2, age: 24 }
];

// Root route → basic response
app.get("/", (req, res) => {
    res.send("hello");
});



// Get all users
app.get('/users', (req, res) => {
    res.json(users);
});

// Query parameters example
app.get('/search', (req, res) => {
    // Extract query parameters with default values
    const { q = 'nothing', sort = 'asc', page = 1 } = req.query;

    // Send response as JSON
    res.json({
        searchQuery: q,
        sortOrder: sort,
        pageNumber: Number(page),
        message: `You searched for "${q}" sorted ${sort} on page ${page}`
    });
});

// Get user by ID (route parameter)
app.get("/users/:id", (req, res) => {
    // Convert ID to integer
    const userid = parseInt(req.params.id);

    // Find user in array
    const user = users.find(u => u.id == userid);

    // If user exists, send it
    if (user) {
        res.json(user);
    }
    // (No else case → request will hang if user not found, not ideal)
});

// Multiple middleware handlers for same route
app.get('/test',
    (req, res, next) => {
        console.log('Handler 1');
        next(); // pass control to next handler
    },
    (req, res, next) => {
        console.log('Handler 2');
        next(); // pass control to next handler
    },
    (req, res) => {
        res.send('Final Response'); // final response
    }
);

// Authentication middleware
function auth(req, res, next) {
    // Check if query parameter user=admin
    if (req.query.user === 'admin') {
        next(); // authorized → continue
    } else {
        res.send('Unauthorized'); // block request
    }
}

// Protected route using auth middleware
app.get('/dashboard', auth, (req, res) => {
    res.send('Admin Dashboard');
});

// Handle ALL HTTP methods for /test route
app.all('/test', (req, res) => {
    res.send(`Request method: ${req.method}`);
});
// Regex route → matches any path containing "a"
app.get(/a/, (req, res) => {
    res.send('Matched any path with "a"');
});

// Start server on port 3000
app.listen(3000, () => {
    console.log("running on port 3000");
});