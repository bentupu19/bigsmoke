const express = require("express");
const { client } = require("./bot");
const { TOKEN } = require("./config");

const server = express();
server.get("/", (req, res) => res.send("Bot Store Online!"));
server.listen(3000, () => console.log("Web server aktif"));

client.login(TOKEN);
