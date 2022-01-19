//4) Faça o cálculo contrário: Leia um valor inteiro correspondente à idade de uma pessoa em dias e 
// informe-a em anos, meses e dias. Também considere todo ano com 365 dias e todo mês com 30 dias.

var prompt = require("prompt-sync")();

let dias = +prompt("Quantidade de dias total que uma pessoa viveu: ");

idadeanos = (~~(dias/365))
idademeses = (~~((dias%365)/30))
idadedias = (~~((dias%365)%30))

console.log("Idade em em anos inteiros: ",idadeanos)
console.log("Meses vividos: ",idademeses)
console.log("Dias vividos",idadedias)
