// Express is used to expose routes for data to be served
const express = require("express");

// Mongoose is used to communicate with MongoDB
const mongoose = require("mongoose");

require("./services/passport");
require("./models/User");

const app = express();

const keys = require("./config/keys");
mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
