//3) Leia 3 valores de entrada, referentes à idade de uma pessoa em: anos, meses e dias. 
// Calcule e exiba o total de dias que essa pessoa já viveu. Obs.: apenas para facilitar o cálculo, 
// considere todo ano com 365 dias e todo mês com 30 dias.

var prompt = require("prompt-sync")();

let idadeanos = +prompt("Sua idade em anos inteiros: ");
let idademeses = +prompt("Restante de meses inteiros que você viveu: ");
let idadedias = +prompt("Restante de dias inteiros que você viveu: ")

total = (idadeanos*365) + ((idademeses)*30)+((idadedias));
console.log("Quantidade de dias vivido no total foram de: ",total," dias");
