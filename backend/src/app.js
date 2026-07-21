const express = require("express")
const app = express();
const cors = require("cors")
app.use(cors())
app.use(express.json())
app.get("/api",(req,res)=>{
    res.status(200).json({message:"API working"});
})

module.exports = app;