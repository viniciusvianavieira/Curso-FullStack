prompt = require("prompt-sync")();

Vida = +prompt("Escolha a vida do Vilão que quer destruir:   ")
Ataque = +prompt("Escolha a força de ataque do seu pesonagem:    ")

if (Vida%Ataque == 0){
    resultado = (~~(Vida/Ataque)) 
}else{
    resultado = (~~(Vida/Ataque)) + 1}

console.log("VOCÊ MATARÁ O VILÃO EM ",resultado," ROUNDS")