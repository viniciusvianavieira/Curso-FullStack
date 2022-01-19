var prompt = require("prompt-sync")();

let idadeanos = +prompt("Sua idade em anos inteiros: ");
let idademeses = +prompt("Restante de meses inteiros que você viveu: ");
let idadedias = +prompt("Restante de dias inteiros que você viveu: ")

total = (idadeanos*365) + ((idademeses)*30)+((idadedias));
console.log("Quantidade de dias vivido no total foram de: ",total," dias");
