// Faça um programa que peça um número e imprima toda a tabuada dele do 1 ao 10.

var prompt = require("prompt-sync")()

var number = +prompt("Choose your number:    ")

cont = 0
console.log("------------------------------------------------------")
console.log("The multiplication table of",number,"is:   ")
console.log("------------------------------------------------------")
for (let i = 0; i < 11; i++){

    console.log("The result of the expression: ",i,"x",number,"is   :",i*number)

}