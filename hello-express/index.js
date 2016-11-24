// index.js
const express = require("express");

const app = express();

app.get("/hello", (req,res) => res.send("Olá mundo!"));

app.get("/greet", (req,res) =>  {
if(req.query.nome){
  res.send(`Olá, ${req.query.nome}!`);

}
else{
  res.send("nao enviado um nome");
}
});

app.get("/queryparams", (req,res) => {
  console.log(req.query);
  res.send("Veja no console");
});

app.get("/pathparams/:nome/:time",  (req,res) => {
  res.send("Veja no console");
  console.log(req.params);
  console.log(`Meu nome é ${req.params.nome} e eu sou ${req.params.time} desde sempre`);
});

app.get("/optional(/:maybe)?", function (req,res){
  if(req.params.maybe)
    res.send("Call me " + req.params.maybe)
  else
    res.send("I just met you");
  console.log(req.params)
});

app.listen(3003);
// to be continued
