// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID as string,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
  mongoURI: process.env.MONGO_URI as string,
  cookieKey: process.env.COOKIE_KEY as string,
  stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY as string,
  stripeSecretKey: process.env.STRIPE_SECRET_KEY as string,
  sendGridKey: process.env.SEND_GRID_KEY as string,
  redirectDomain: process.env.REDIRECT_DOMAIN as string,
};
