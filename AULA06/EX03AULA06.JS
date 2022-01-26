// Faça um programa em que o usuário escolha a quantidade de alunos a serem 
// cadastrados e peça o nome e nota de cada um. Armazene as informações em 
// duas listas separadas e no final imprima o nome e a nota correspondente de 
// cada aluno, e a média total da notas.

var prompt = require("prompt-sync")();
var cont = 0
var cont2 = 0
var avarage = 0
const vectorgrade = []
const vectorname = []

var numberstudent = +prompt("How many students in class??   ")

do {

    var namestudent = prompt("Put the name of student here:   ")
    var gradestudent = +prompt("Put the grade of student here:   ") 

    vectorname.push(namestudent)
    vectorgrade.push(gradestudent)
     
    avarage = (avarage + gradestudent)

    cont++

}while(cont < numberstudent )

avarage = (avarage)/cont

console.log("")
console.log("The students are:  ",vectorname)
console.log("The grades of students are:    ",vectorgrade)
console.log("The total avarage is:  ",avarage)


while(cont2 < numberstudent)
{
    console.log("-------------------------------------------------") 
    console.log("The student is:    ",vectorname[cont2])
    console.log("The grade of student is:   ",vectorgrade[cont2])
    console.log("-------------------------------------------------")
    cont2++
}





