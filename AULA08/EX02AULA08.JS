// Escreva um programa que peça um número e escreva o fatorial dele. 
// Exemplo 6! = 6 x 5 x 4 x 3 x 2 x 1 = 720

var prompt = require("prompt-sync")()

var number = +prompt("Chosse the factorial number:  ")

math = 1
for(let i = 1 ; i < (number+1);i++){

    math2 = (math * i)
    math = math2
    
}
console.log("The factorial number of ",number,"! is:    ",math)