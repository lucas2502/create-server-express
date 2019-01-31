require("dotenv").config();

const express = require("express");
const server = express();
const { PORT } = process.env;

require("./app")(server);

server.listen(PORT, () => {
    console.log(`Server on by http://localhost:${PORT}`);
});