const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userName : String,
    mobile   : Number,
    Address  : String,
    email    : String,
    gender   : {
        type : String,
        validate(value){
            if(!["male","female","others"].includes(value)){
                throw new Error("Gender is not Valid")
            }
        }
    }
});

module.exports = mongoose.model("UserSchema", userSchema);