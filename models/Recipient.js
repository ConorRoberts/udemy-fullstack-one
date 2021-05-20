const mongoose = require("mongoose");
const {Schema} = mongoose;

const recipientSchema = new Schema({
    email:String,
    clicked:Boolean
});

// Loaded into mongoose library
// mongoose.model("recipients",recipientSchema);
module.exports = recipientSchema;