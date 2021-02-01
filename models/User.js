// Model for mongoose user
const mongoose = require("mongoose");
const { Schema } = mongoose;

// Defines properties of a user
const userSchema = new Schema({
  googleId: String,
  credits: { type: Number, default: 0 },
});

// Creates a new collection of users with properties of userSchema
mongoose.model("users", userSchema);
