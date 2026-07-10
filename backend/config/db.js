const mongoose = require("mongoose");
const ENV = require("./env");
const connectDb = async()=>{
    const connection = await mongoose.connect(`${ENV.MONGODB_URL}`);
    console.log("Database connected!", connection.connection.host);
}
module.exports = connectDb;