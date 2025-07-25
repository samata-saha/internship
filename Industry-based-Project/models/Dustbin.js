const mongoose = require("mongoose");

//schema module creation
const dustbinSchema = new mongoose.Schema({
  location: { type: String, required: true },
  status: { type: String, required: true },
  lastcleaned: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Dustbin", dustbinSchema);
