// Faça um programa que, dado uma lista de N números (o usuário deve determinar 
// a quantidade de números a serem entrados e entrar cada um deles), 
// o menor valor, o maior valor e a soma dos valores.
console.clear()
console.log()
var prompt = require("prompt-sync")()
const list = []

var lenght = +prompt("Chose the lenght of the list: ")

for(var i =0; i < lenght; i++)
{
    var value = +prompt("Put the new value of list: ")
    list.push(value)
}
console.log("The list is: ",list)
list.sort((a,b) => a - b)
console.log("The minor value is: ",list[0])
console.log("The major value is: ",list[lenght-1])
console.log("The sum of major and minor is: ",list[0]+list[lenght-1])