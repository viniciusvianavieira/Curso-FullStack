// 3. Exercício – Treino: Faça um programa que tenha uma função chamada area(), que receba as dimensões de um terreno
//  retangular (largura e comprimento) e mostre a área do terreno.

console.clear()
console.log()

var prompt = require("prompt-sync")()

function area(width,lenght){

    console.log("The area is:   ",width*lenght," metters²")

}

var lenght = +prompt("Put the lenght of land in metters:    ")
var width = +prompt("Put the width of land in metters:    ")

area(width,lenght)