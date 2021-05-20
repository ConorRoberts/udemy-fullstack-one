const mongoose = require("mongoose");
const Recipient = require("./Recipient");
const { Schema } = mongoose;

const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [Recipient],
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  //   This property can be anything but convention states that any relationship should have _
  _user: { type: Schema.Types.ObjectId, ref: "User" },
  dateSent: Date,
  lastResponded: Date,
});

// Loaded into mongoose library
mongoose.model("surveys", surveySchema);
