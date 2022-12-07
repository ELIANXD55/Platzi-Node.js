const  bycrypt = require('bcrypt');

async function verypassword  (){
const myPassword = 'password123';
const hash = await bycrypt.hashSync(myPassword, 10);
console.log(hash);
}



verypassword();
