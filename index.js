var superheroes = require("superheroes");
var supervillains = require("supervillains");

var mysh = superheroes.random();
var mysv = supervillains.random();

console.log("The fight is between "+mysh+" and "+ mysv);