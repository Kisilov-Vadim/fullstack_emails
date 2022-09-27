const PORT = process.env.PORT || 3000;
const COOKIE_SESSION_MAX_AGE = 30 * 24 * 60 * 60 * 1000;

module.exports = {
  PORT,
  COOKIE_SESSION_MAX_AGE,
}