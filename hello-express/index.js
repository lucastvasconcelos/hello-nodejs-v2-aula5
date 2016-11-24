// index.js
const express = require("express");

const app = express();

let teste = "Ola mundo"
let teste2 = ",hey"

app.get("/hello", (req,res) => res.send(teste));

app.listen(8080);

// to be continued
// to be continued
