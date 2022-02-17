
// Faça um programa que leia 2 valores inteiros (A e B). Após, o programa deve mostrar uma mensagem 
// "Sao Multiplos" ou "Nao sao Multiplos", indicando se os valores lidos são múltiplos entre si. Exemplo:

var prompt = require("prompt-sync")();

numero1 = +prompt("DIGITE UM PRIMEIRO NÚMERO:  ")
numero2 = +prompt("DIGITE UM SEGUNDO NÚMERO:  ")


if (numero1 > numero2){
    if (numero1%numero2 == 0){
        console.log("")
        console.log("NÚMERO É MULTIPLO DO OUTRO")
        console.log("")
    }else{
        console.log("")
        console.log("NÃO É MULTIPLO")
        console.log("")
}
}else{
    if (numero2%numero1 == 0){
        console.log("")
        console.log("NÚMERO É MULTIPLO DO OUTRO")
        console.log("")
    }else{
        console.log("")
        console.log("NÃO É MULTIPLO")
        console.log("")}}