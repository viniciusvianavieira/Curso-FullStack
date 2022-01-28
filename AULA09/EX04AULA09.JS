// Numa eleição existem três candidatos. Faça um programa que peça o número total 
// de eleitores. Peça para cada eleitor votar e ao final mostrar o número de votos 
// de cada candidato.

var prompt = require("prompt-sync")()
const candidates = ["JOAO","MESSIAS","POLVO"]
var contj = 0
var contm = 0
var contp = 0



var electors = +prompt("Number of electors:  ")

pause:for(var i = 0; i < electors;i++)
{
    console.log("-------------------------------------------------------------------")
    var vote = prompt("Please choose between the candites:  ",console.log(candidates))
    console.log("-------------------------------------------------------------------")

    if (!(vote == candidates[0] || vote == candidates[1] || vote == candidates[2]) )
    {
        console.log("Choose a correct option!!!!")
        i = i - 1
        continue pause;
    }

    if (vote == candidates[0]){
        contj++
        console.log("VOTE FOR JOÃO CONFIRMED")        
    }else if(vote == candidates[1]){
        contm++
        console.log("VOTE FOR MESSIAS CONFIRMED") 
    }else{
        contp++
        console.log("VOTE FOR POLVO CONFIRMED")
    }
}
console.log("THE NUMBER OF VOTES OF JOÃO IS:    ",contj)
console.log("THE NUMBER OF VOTES OF MESSIAS IS: ",contm)
console.log("THE NUMBER OF VOTES OF POLVO IS:   ",contp)