const mongoose = require("mongoose");
const {Schema} = mongoose;

const surveySchema = new Schema({
    title:String,
    body:String,
    subject:String,
    recipients:[String]
});

// Loaded into mongoose library
mongoose.model("surveys",surveySchema);