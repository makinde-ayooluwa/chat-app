// Requires
const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/userRoutes")
// Configurations
const app = express();
app.use(express.json())
app.use(cors())
// Routes declarations
app.use("/user", userRouter);

module.exports = app;