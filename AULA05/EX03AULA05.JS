
// Faça um programa que peça um número par, e repita a execução caso o número
//  digitado seja ímpar.

var prompt = require("prompt-sync")();

do
{
    numero = +prompt("Digite um número par: ")
    if (numero%2 != 0)
    {
        console.log("--------------------------------------")
        console.log("DIGITE UM NÚMERO PAR")
        console.log("--------------------------------------")
    }
}while (numero%2 != 0)

console.log("--------------------------------------")
console.log("PARABÉNS SEU NÚMERO ",numero," É PAR")
console.log("--------------------------------------")