const jwt = require ('jsonwebtoken');
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY2OTgxMjUyNX0.unca-x12mhZhLEFDZUY6BDiA3sms3PoTrdaLAavgiLw'
const secret = 'myCat';

function VarifyToken(token, secret) {
  return jwt.verify(token , secret);
}


const payload  = VarifyToken(token, secret);

console.log(payload);
