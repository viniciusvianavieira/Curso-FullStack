var prompt = require("prompt-sync")();

let nome1 = prompt("Nome da primeira peça: ");
let quant1 = +prompt("Quantidade da primeira peça: ");
let valor1 = +prompt("Valor unitário da primeira peça: ");

let nome2 = prompt("Nome da segunda peça: ");
let quant2 = +prompt("Quantidade da segunda peça: ");
let valor2 = +prompt("Valor unitário da segunda peça: ");

let valortotal = (quant1*valor1) + (quant2*valor2);

console.log(" O preço total do",nome1," foi de: ",quant1*valor1);
console.log(" O preço total do",nome2," foi de: ",quant2*valor2);
console.log("O valor total da compra: ",valortotal);