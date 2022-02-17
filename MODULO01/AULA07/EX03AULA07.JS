// Faça um programa que sorteie 20 números de 0 a 100, 
// armazene todos em um array e imprima em ordem crescente.

var prompt = require("prompt-sync")()
var cont = 0
const vector = []
const newvector = []

while(cont < 20){

    var aleatorio = Math.floor(Math.random()*101)
    vector.push(aleatorio)
    newvector.push(aleatorio)
    cont++

}

console.log("The array is: ",vector)
console.log("the array length is: ",vector.length)
console.log("The newest array is:  ",newvector.sort((a,b)=> a - b))