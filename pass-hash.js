const  bycrypt = require('bcrypt');

async function hashpassword  (){
const myPassword = 'password123';
const hash = '$2b$10$5qAESXi.WvG2ZbUtZMi3Sexn6lKpZxWmlZzJxEUdkASvUsmWMrEDm';
const isMach = await bycrypt.compare(myPassword, hash);
console.log(isMach);
}



hashpassword();
