// Faça um Programa que leia 20 números inteiros e armazene-os num array.
// Armazene os números pares no array PAR e os números IMPARES no array IMPAR. 
// Imprima os três vetores.

var prompt = require("prompt-sync")();

const vectorodd = []
const vectorpair = []
const  vector = []
cont = 0
while (cont < 20)
{
    number1 = +prompt("Choose 20 numbers:    ")
    cont++
    vector.push(number1)

    if (number1%2 == 0)
    {
        vectorpair.push(number1)
    }else{
        vectorodd.push(number1)
    }
}

console.log("----------------------------------------------------")
console.log("The complete vector is: ",vector)
console.log("----------------------------------------------------")
console.log("The pair vector is: ",vectorpair)
console.log("----------------------------------------------------")
console.log("The odd vector is: ",vectorodd)
console.log("----------------------------------------------------")