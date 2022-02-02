// Faça um programa, com uma função que necessite de três argumentos:
// dois números e um sinal de operador matemático (+, -, * ou /).
// Ela deve fazer o cálculo indicado pelo operador usando os dois
// número passados.

var prompt = require("prompt-sync")()

function math (a,b,c){
    console.clear()
    console.log()

    var mathresult = 0  
        if (c == "/" ){
            mathresult = a/b
        }else if( c == "*"){
            mathresult = a*b
        }else if( c == "-"){
            mathresult = a - b
        }else if(c == "+"){
            mathresult = a + b
        }
        console.log(mathresult)
    }
    
do{
    var a = +prompt("Put any number: ")
    var b = +prompt("Put any number: ")
    var c = prompt("Choose the math operation (+, -, * or /):   ")

    math(a,b,c)

    var answer = prompt("Do you want play again?    ").toUpperCase()
    
}while( answer === "SIM")
