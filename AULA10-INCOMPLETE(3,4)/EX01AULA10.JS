// Faça um programa que peça um número inteiro e determine se ele é ou
// não um número primo. Um número primo é aquele que é divisível somente 
// por ele mesmo e por 1.

var prompt = require("prompt-sync")()
var cont = 0

var number = +prompt("Choose the integer number: ")

for (var i = 1; i < number;i++)
{
    if (number%i == 0) 
    {
        cont++
    }
}

if ( cont > 1)
{
    console.log("This number isn't prime")
}else{
    console.log("This number is prime!!!!!")
}