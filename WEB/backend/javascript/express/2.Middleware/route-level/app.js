const express = require('express');
const app = express();

// Define route-level middleware
function checkAuth(req, res, next) {
  const token = req.query.token;
  if (token === '123') next(); // proceed to next middleware or route handler
  else res.status(403).send('Access denied');
}

// Apply only to this route
app.get('/dashboard', checkAuth, (req, res) => {
  res.send('Welcome to your dashboard');
});

app.get('/', (req, res) => res.send('Public route'));

// Multiple Middleware on a Route
function logRequest(req, res, next) {
  console.log(`Request for ${req.url}`);
  next();
}

function verifyUser(req, res, next) {
  if (req.query.user === 'admin') next();
  else res.status(401).send('Unauthorized');
}

app.get('/admin', logRequest, verifyUser, (req, res) => {
  res.send('Welcome, Admin!');
});

// Using express.Router()
const router = express.Router();

// Middleware for this router
router.use((req, res, next) => {
  console.log('Router-level middleware active');
  next();
});

router.get('/profile', (req, res) => res.send('User profile'));
router.get('/settings', (req, res) => res.send('User settings'));

app.use('/user', router);
