 //6) Calculadora de Dano - Escreva um programa que receba dois valores digitados pelo usuário: 
// quantidade de vida de um monstro (entre 10 e 50) e valor do ataque do jogador por turno (entre 5 e 10). 
// Baseado nos valores digitados, exiba a quantidade de turnos que o jogador irá demorar para conseguir 
// derrotar o monstro (o jogador irá derrotar o monstro em 8 turnos).


prompt = require("prompt-sync")();

Vida = +prompt("Escolha a vida do Vilão que quer destruir:   ")
Ataque = +prompt("Escolha a força de ataque do seu pesonagem:    ")

if (Vida%Ataque == 0){
    resultado = (~~(Vida/Ataque)) 
}else{
    resultado = (~~(Vida/Ataque)) + 1}

console.log("VOCÊ MATARÁ O VILÃO EM ",resultado," ROUNDS")