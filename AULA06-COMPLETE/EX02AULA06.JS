// Faça um Programa que peça a idade e a altura de 5 pessoas, armazene cada
//  informação no seu respectivo array. Imprima a média de idade e de altura.

var prompt = require("prompt-sync")();

const vectorname1 = []
const vectorheight = []
cont = 0
var average = 0
while (cont < 5)
{
    var name1 = prompt("Write the name: ")
    var height = +prompt("Write the height: ")

    vectorname1.push(name1)
    vectorheight.push(height)
    
    average = average + height
    cont++
}
    average = average/5

    console.log("All names: ",vectorname1)
    console.log("All heights: ",vectorheight)
    console.log("The average is: ",average)