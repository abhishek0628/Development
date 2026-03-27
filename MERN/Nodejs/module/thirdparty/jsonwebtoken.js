const jwt = require('jsonwebtoken');

const token = jwt.sign(
  { userId: 123 },
  'secretKey',
  { expiresIn: '1h' }
);

console.log(token);