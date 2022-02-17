// 3) Caixa Eletrônico - Faça um Programa para um caixa eletrônico. O programa deverá perguntar ao usuário a 
// valor do saque e depois informar quantas  notas de cada valor serão fornecidas. As notas 
// disponíveis serão as de 1, 5, 10, 50 e 100 reais. O valor mínimo é de 10 reais e o máximo de 600 reais. 
// O programa não deve se preocupar com a quantidade de notas existentes na máquina.
// Exemplo 1: Para sacar a quantia de 256 reais, o programa fornece duas notas de 100, uma nota de 50, 
// uma nota de 5 e uma nota de 1.
// Exemplo 2: Para sacar a quantia de 399 reais, o programa fornece três notas de 100, uma nota de 50,
//  quatro notas de 10, uma nota de 5 e quatro notas de 1.


var prompt = require("prompt-sync")();

do{;

    var saque  = prompt("Digite o valor a ser sacado:   ");

}while(saque < 10 || saque > 600);

var nota100 = saque/100
console.log("São ",Math.floor(nota100)," notas de 100 reais")

var nota50 = (saque%100)/50
console.log("São ",Math.floor(nota50)," notas de 50 reais")

var nota10 = ((saque%100)%50)/10
console.log("São ",Math.floor(nota10)," notas de 10 reais")

var nota5 = (((saque%100)%50)%10)/5
console.log("São ",Math.floor(nota5)," notas de 05 reais")

var nota1 = ((((saque%100)%50)%10)%5)/1
console.log("São ",Math.floor(nota1)," notas de 01 reais")
