const passport = require('passport');

const localStrategy =require('./strategies/local.stategy');
const  JwStrategy = require('./strategies/jwt.stategy');

passport.use(localStrategy);
passport.use(JwStrategy);
