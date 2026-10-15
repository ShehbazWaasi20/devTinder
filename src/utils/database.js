const mongoose = require("mongoose");

const dbConnection = async function(){
     await mongoose.connect("mongodb://localhost:27017");
}

module.exports = dbConnection
//mongodb://localhost:27017
//mongodb+srv://shehbazwaasi_db_user:uKxCRIU3q5bEFpHC@cluster0.sby7vex.mongodb.net/?appName=Cluster0