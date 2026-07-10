const app = require("./app");
const connectDb = require("./config/db");
const ENV = require("./config/env");
const initializeSocket = require("./config/socket");

const startServer = async () => {
    await connectDb();
    await initializeSocket();
    app.listen(ENV.SERVER_PORT, ()=>{
        console.log("Server running on port", ENV.SERVER_PORT)
    })
}
startServer();