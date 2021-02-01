const passport = require("passport");
const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
const requireLogin = require("../middlewares/requireLogin");

module.exports = (app) => {
  app.post("/api/stripe", requireLogin, async (req, res) => {
    if (!req.user) {
      return res.status(401).send({ error: "You are not logged in" });
    }
    const charge = await stripe.charges.create({
      amount: 500,
      currency: "usd",
      description: "Testing my fullstack app",
      source: req.body.id,
    });

    // We can reference the current user (magically handled by passport) with req.user
    // In this case, we are modifying the cookied user's credits and pushing this update to
    // mongoDB with .save. But save actually takes a user back from the database too
    req.user.credits += 5;
    const user = await req.user.save();

    res.send(user);
  });
};
