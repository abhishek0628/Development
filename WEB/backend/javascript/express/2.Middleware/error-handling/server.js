function errorHandler(err, req, res, next) {
  console.error(err.stack); // log the error
  res.status(500).send('Something broke!');
}
app.use(errorHandler);

const express = require('express');
const app = express();

// Normal route
app.get('/', (req, res) => {
  throw new Error('Oops, broke it');
});

// Another route
app.get('/test', (req, res, next) => {
  next(new Error('Manual error pass'));
});

// Error-handling middleware (MUST come last)
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).json({ error: err.message });
});

app.listen(3000, () => console.log('Server running'));

app.use((err, req, res, next) => {
  if (err.name === 'ValidationError') {
    return res.status(400).json({ error: err.message });
  }
  next(err);
});
