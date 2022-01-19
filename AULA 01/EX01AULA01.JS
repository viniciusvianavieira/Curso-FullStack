
var prompt = require( 'prompt-sync')();

let nota1 = +prompt("Digite a primeira nota do aluno: ");
let nota2 = +prompt("Digite a segunda nota do aluno: ");

let média = ((nota1 * 4) + (nota2 * 6))/10;

console.log(" Ele tirou as seguintes notas: ",nota1," & ",nota2," sua média foi de: ",média)