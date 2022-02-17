// 1. Exercício – Treino: Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
//  multiplicação e divisão desses valores.
console.clear()
console.log()

var prompt = require("prompt-sync")()

function math(value1,value2){

    console.log("The sum is:    ",value1 + value2)
    console.log("The subtraticon is:    ",value1 - value2)
    console.log("The multiplication is: ",value1*value2)
    console.log("The division is:   ",value1/value2)

}


var value1 = +prompt("Put the value 1:    ")
var value2 = +prompt("Put the value 2:    ")

math(value1,value2)
        
