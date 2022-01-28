// Faça um programa que peça o nome de usuário e a senha de um usuário. A senha
//  deve ter no mínimo 8 caracteres, pelo menos um número e um caracter especial.

var prompt = require("prompt-sync")()
const vector = []
var cont = 0
var contto = 0

var username = prompt("Put your username:   ")
var password = prompt("Put your password:   ")

while( cont < password.length)
{
    if (typeof(password[cont]) == typeof("1"))
    {
        contto++
    }
    cont++        
}   
    if (contto < 1)
    {
        console.log("Necessita de pelo menos um número")
    }

console.log("Type of vector:    ",typeof(password[1]))
console.log("Type of número:    ",typeof(1))
console.log("Senha:             ",password)


