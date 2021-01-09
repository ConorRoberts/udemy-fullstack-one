import express from "express";
import passport from "passport";
import GoogleStrategy from "passport-google-oauth20";
import { googleClientID, googleClientSecret } from "./config/keys";

// Client ID: 579553257300-qti9k1bvkfs5onsf0qgs92o4p8jpq8m9.apps.googleusercontent.com
// Secret: FZ2__u1x5ObJW0ctDEddSGqh

const app = express();

passport.use(
  new GoogleStrategy(
    {
      clientID: googleClientID,
      clientSecret: googleClientSecret,
      callbackURL: "/auth/google/callback",
    },
    (accessToken) => {
      console.log(accessToken);
    }
  )
);

const PORT = process.env.PORT;
app.listen(PORT);
