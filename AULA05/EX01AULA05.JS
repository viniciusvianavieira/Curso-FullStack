// Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha 
// igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir 
// as informações.

var prompt = require("prompt-sync")();

do
{;
    var usuario = prompt("Digite o nome do usuario: ");
    console.log("")
    var senha = prompt("Digite a senha: ");
    console.log("")

    if ( usuario == senha)
    {
    console.log("---------------------------------------------------")
    console.log("Senha e Usuario não podem ser iguais!!!!")
    console.log("---------------------------------------------------")
    }


    

}while(usuario == senha);

console.log("---------------------------------------------------")
console.log("CADASTRO FEITO COM SUCESSO");
console.log("---------------------------------------------------")