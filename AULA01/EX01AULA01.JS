//1) Leia 2 valores A e B, que correspondem a 2 notas de um aluno. A seguir calcule e informe a média do aluno,
//  sabendo que a nota A tem peso 4 e a nota B tem peso 6.


var prompt = require( 'prompt-sync')();

let nota1 = +prompt("Digite a primeira nota do aluno: ");
let nota2 = +prompt("Digite a segunda nota do aluno: ");

let média = ((nota1 * 4) + (nota2 * 6))/10;

console.log(" Ele tirou as seguintes notas: ",nota1," & ",nota2," sua média foi de: ",média)