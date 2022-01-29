//2) Neste problema, deve-se ler o nome de uma peça 1, o número de peças 1, o valor unitário de cada peça 1, 
// o nome de uma peça 2, o número de peças 2 e o valor unitário de cada peça 2. Após, calcule e mostre o 
// valor a ser pago.

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