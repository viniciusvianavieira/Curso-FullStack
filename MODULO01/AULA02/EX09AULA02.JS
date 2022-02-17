// 9) Conversor de moedas - Crie um programa que solicite um um valor em real ao usuário e 
// converta esse valor, para dólar")

prompt = require("prompt-sync")();

dinheiro = +prompt("Digite um valor para conversão: ")
dolar = 5.42
var preçot = dinheiro/dolar


console.log("")
console.log("----------------------------------------------------")
console.log("O valor em dollar é : ", preçot.toFixed(2))