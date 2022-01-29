// Crie um programa em que o usuário escolha a quantidade de notas serem entradas
//  e depois peça e armazene essa quantidade de notas em um array. Ao final imprima
//   a quantidade de alunos APROVADOS (nota >= 7), EM RECUPERAÇÃO (entre 5 e 7) e
//    REPROVADOS (abaixo de 5).

var prompt = require("prompt-sync")()
var cont = 0
const vectorrepproved = []
const vectorapproved = []
const vectorretake = []

var quantity = prompt("Choose how many grades do you want:  ")

while(cont < (quantity))
{
    var grades = prompt("Put the grades:  ")
    cont++

    if (grades >= 7){

        vectorapproved.push(grades)

    }else if (grades < 5){

        vectorrepproved.push(grades)

    }else{

        vectorretake.push(grades)

    }
}

console.log(" Approved grades: ",vectorapproved.length)
console.log(" Retake grades:    ",vectorretake.length)
console.log(" Repproved grades: ",vectorrepproved.length)