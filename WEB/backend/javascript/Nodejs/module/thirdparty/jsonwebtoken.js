const jwt = require('jsonwebtoken');//npm install jsonwebtoken

const token = jwt.sign(
  { userId: 123 },//payload
  'secretKey',//signature
  { expiresIn: '1h' }//optional
);

console.log(token);