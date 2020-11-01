const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routers = require("./config/router");

const PORT = process.env.PORT || 3000
const server = express();

server.use(cors());
server.use(bodyParser.json());

routers(server);

server.listen(PORT, ()=>{
    console.log("Api On");
})
module.exports = server;