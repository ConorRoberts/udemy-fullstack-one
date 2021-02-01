// Express is used to expose routes for data to be served
const express = require("express");

// Parsing request body for POST requests
const bodyParser = require("body-parser");

// Required to store auth state as a cookie
const cookieSession = require("cookie-session");

// Authentication
const passport = require("passport");

const keys = require("./config/keys");

// Mongoose is used to communicate with MongoDB
const mongoose = require("mongoose");

require("./models/User");
require("./services/passport");

const app = express();

app.use(bodyParser.json());

app.use(
  cookieSession({
    // Setting cookie lifetime
    maxAge: 30 * 24 * 60 * 60 * 1000,

    // Keys to pass into cookie
    keys: [keys.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);

if (process.env.NODE_ENV==="production"){
  // Tell express to handle unknown routes and redirect them to react
  // Express right now cannot serve up production assets

  // if any request comes in and we don't know what it's looking for (no route already defined)
  // then look inside the client/build directory to find a matching FILE
  app.use(express.static("client/build"))

  // Express will serve up the index.html file if it doesn't recognize the route
  const path = require("path");

  // * is the catchall for every single route. We have already determined it's not part of auth, billing,
  // and client/build. So we are just going to serve index.html
  app.get("*",(req,res)=>{
    // sendFile is as described, sends the file provided by the path
    // __dirname will resolve to pwd and then the rest will be resolved to client/build/index.html
    res.sendFile(path.resolve(__dirname,"client","build","index.html"));
  });


}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
