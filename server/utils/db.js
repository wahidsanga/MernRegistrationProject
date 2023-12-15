const mongoose = require("mongoose");


const URI = process.env.MONGODB_URI;

// const URI = "mongodb+srv://admin1:test123@cluster0.fsjvlvj.mongodb.net/";
// mongodb+srv://admin1:test123@cluster0.fsjvlvj.mongodb.net/
// mongoose.connect(URI);

// username = wahidDatabase
// password= I557BhJW7oUJld7p


const connectDb = async () => {
    try {
        await mongoose.connect(URI);
        console.log("database connected successfully"); 
    } catch (error) {
        console.error("database connection failed", error);
        process.exit(0);
    }
};

module.exports = connectDb;