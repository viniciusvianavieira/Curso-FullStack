// Jogo da adivinhação - Escreva um programa que faça o computador “pensar” 
// em um número inteiro entre 0 e 10 e peça para o usuário tentar descobrir 
// qual foi o número escolhido pelo computador. O programa deve ser repetir 
// até o usuário acertar o número, e a cada palpite deve dizer se o número é 
// maior ou menor que o palpite. No final dele deve escrever na tela que o 
// usuário encontrou o número, e mostrar a quantidade de palpites que foi necessária.

var prompt = require("prompt-sync")()
var aleatorio = Math.floor(Math.random()*11);

do{
    do{
        var numero = prompt("Digite um número aleatorio entre 0 e 10:   ")
        if (numero < 0 || numero > 10)
        {
            console.log("-----------------------------------------")
            console.log("Digite um número entre 0 e 10: ")
            console.log("-----------------------------------------")
        }
    }while(numero < 0 || numero > 10)

    if (aleatorio != numero)
    {
        console.log("")
        console.log("NÚMERO ALEATORIO ESCOLHIDO FOI: ",aleatorio)
        console.log("")
        console.log("NÚMERO ESCOLHIDO PELO USUARIO FOI: ",numero)

        console.log("-----------------------------------------")
        console.log("NÚMEROS DIFERENTES DIGITE NOVAMENTE ")
        console.log("-----------------------------------------")
    }  
}while(aleatorio != numero)

console.log("")
console.log("NÚMERO ALEATORIO ESCOLHIDO FOI: ",aleatorio)
console.log("")
console.log("NÚMERO ESCOLHIDO PELO USUARIO FOI: ",numero)

console.log("-----------------------------------------")
console.log("PARABÉNS VOCÊ GANHOU O JOGO ")
console.log("-----------------------------------------")