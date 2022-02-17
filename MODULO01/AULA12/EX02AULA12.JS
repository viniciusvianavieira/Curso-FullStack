// 2. Exercício – Treino:  Crie uma função que verifica se um número inteiro passado como parâmetro é divisível por 3 
// e retorne true ou false.

console.clear()
console.log()

var prompt = require("prompt-sync")()

function division(value){

    if( value%3 == 0){
        console.log("-------------------------------------------------------")
        console.log("TRUE - Your number is divisible by tree.")
        console.log("-------------------------------------------------------")
    }else{
        console.log("-------------------------------------------------------")
        console.log("FALSE - Your number isn't divisible by tree.")
        console.log("-------------------------------------------------------")
    }


}

var value = parseInt(+prompt("Put any number:    "))
console.log("You integer number is: ",value)

division(value)