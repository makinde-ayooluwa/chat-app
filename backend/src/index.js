const app = require("./app")
const dotenv = require("dotenv")

dotenv.config({
    path:"./.env"
})
const startServer = ()=>{
    const PORT = process.env.SERVER_PORT || 3000;
    app.listen(PORT, ()=>{
        console.log(`Server listening on port ${PORT}`)
    })
}
startServer();