const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userName : String,
    mobile   : Number,
    Address  : String,
    email    : String
});

module.exports = mongoose.model("UserSchema", userSchema);