const {Strategy, ExtractJwt} = require('passport-jwt');
const secrect  = 'D8T1LkIMVTA8yYSuNgbadlFJ9yGU7cjD';
const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: secrect ,
}

const JwStrategy = new Strategy(options, async (payload, done) => {
  return done(null, payload);
})





module.exports = JwStrategy;
