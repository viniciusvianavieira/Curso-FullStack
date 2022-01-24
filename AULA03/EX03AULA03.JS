
//Faça um programa que leia um número, e informe se ele é par ou impar

var prompt = require("prompt-sync")();

console.log("PROGRAMA QUE DIZ SE O NÚMERO É PAR OU NÃO")
console.log("")

numero = prompt("DIGITE UM NÚMERO:  ")
console.log("")

if (numero%2 == 0){
    console.log("")
    console.log("O NÚMERO É PAR")
    console.log("")
}else{
    console.log("")
    console.log("O NÚMERO É IMPAR")
    console.log("")}