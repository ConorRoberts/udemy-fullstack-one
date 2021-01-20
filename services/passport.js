const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const mongoose = require("mongoose");

const keys = require("../config/keys");

// Grabs the user schema from this collection
const User = mongoose.model("users");

// Used for cookies. We need to store the cookie data so the user's
// object data is persistent
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const foundUser = await User.findById(id);
  done(null,foundUser);
});

passport.use(
  new GoogleStrategy(
    {
      // Authorize the google strategy with these credentials and route
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
    },
    // Creating new record in database with profile id
    async (accessToken, refreshToken, profile, done) => {
      // Query the database to ensure no duplicate users
      const existingUser = await User.findOne({ googleId: profile.id });

      // Check if no user has been found
      if (existingUser) {
        // Necessary function to be called when finished with strategy
        // For passportjs
        done(null, existingUser);
      } else {
        // Create and store new user with profile id within our database
        const newUser = await new User({ googleId: profile.id }).save();
        done(null, newUser);
      }
    }
  )
);
