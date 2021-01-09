import express from "express";
import passport from "passport";
import GoogleStrategy from "passport-google-oauth20";

// const keys = require("./config/keys");
import * as keys from "./config/keys.js";

const app = express();

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
    },
    (accessToken) => {
      console.log(accessToken);
    }
  )
);

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

const PORT = process.env.PORT;
app.listen(PORT);
