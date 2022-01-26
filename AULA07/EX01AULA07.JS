// Faça um programa que peça um número inteiro e crie arrays com:
// Todos os números pares de 0 ao número escolhido
// Todos os números ímpares do 0 ao número escolhido

var prompt = require("prompt-sync")()
var cont = 0
const vector = []
const vectorpair = []
const vectorodd = []

number = +prompt("Put how many numbers you want:    ")

while( cont < (number +1))
{
    vector.push(cont)
    
    if(cont%2 === 0)
    {
        vectorpair.push(cont)
        cont++

    }else{

        vectorodd.push(cont)
        cont++
    }


}
console.log("-------------------------------------")
console.log("The complete array is: ",vector)
console.log("-------------------------------------")
console.log("The pair array is: ",vectorpair)
console.log("-------------------------------------")
console.log("The odd array is:  ",vectorodd)
console.log("-------------------------------------")
