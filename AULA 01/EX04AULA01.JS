var prompt = require("prompt-sync")();

let dias = +prompt("Quantidade de dias total que uma pessoa viveu: ");

idadeanos = (~~(dias/365))
idademeses = (~~((dias%365)/30))
idadedias = (~~((dias%365)%30))

console.log("Idade em em anos inteiros: ",idadeanos)
console.log("Meses vividos: ",idademeses)
console.log("Dias vividos",idadedias)
