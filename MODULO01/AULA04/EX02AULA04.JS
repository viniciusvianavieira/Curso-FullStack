// 2) Jogo da adivinhação - Escreva um programa que faça o computador “pensar” em 
// um número inteiro entre 0 e 10 e peça para o usuário tentar descobrir qual foi 
// o número escolhido pelo computador. O programa deverá escrever na tela se o usuário 
// venceu ou perdeu.
///////////////////////////////////////
var prompt = require("prompt-sync")();
///////////////////////////////////////
var aleatorio = Math.floor(Math.random()*11);

do{;

    console.log("");
    var escolhido = +prompt("Escolha um número inteiro entre 0 e 10: ");
    console.log("");
    
}while (escolhido > 10 || escolhido <0); 

console.log("");
console.log("Número randomico gerado pelo computador é: ",aleatorio);
console.log("------------------------------------------------------------");
console.log("Número escolhido por você é: ",escolhido);
console.log("");

if (escolhido === aleatorio){;

    console.log("");
    console.log("PARABÉNS VOCÊ GANHOU!!!!");
    console.log("");

}else{

    console.log("");
    console.log("VOCÊ PERDEU!!! TENTE NOVAMENTE!!!!!");
    console.log("");
}
