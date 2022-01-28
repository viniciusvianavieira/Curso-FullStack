// Faça um programa que peça 2 números e crie um array contando todos os números
// os números sequenciais do primeiro até o segundo, independente de ser maior ou 
// menor.
console.clear
console.log("")

var prompt = require("prompt-sync")()
const vector = []
aux = 0

var number1 = +prompt("Choose the first number:      ")
var number2 = +prompt("Choose the second number:     ")

if (number2 < number1)
{
    aux = number1
    number1 = number2
    number2 = aux
}

for (i = number1; i < (number2+1);i++)
{
    vector.push(i)
}
console.log(vector)