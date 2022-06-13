const pool = require("./confiq/db");
// pool;
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const http = require("http");
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const usersRoute = require("./routes/usersRoutes");
app.use("/users",usersRoute);

const server = http.createServer(app);

server.listen(3000,()=>{
    console.log("Server Started");
});