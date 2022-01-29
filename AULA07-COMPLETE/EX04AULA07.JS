// Faça um programa que peça o nome de usuário e a senha de um usuário. A senha
//  deve ter no mínimo 8 caracteres, pelo menos um número e um caracter especial.
console.clear()
console.log()


var prompt = require("prompt-sync")()

var contespecials = 0
var contnumbers= 0

const numbers = ["1","2","3","4","5","6","7","8","9","0"]
const especials = ["!","@","#","$","%","¨","&","*","(",")"]

var username = prompt("Put your username:   ")

do{
var password = prompt("Put your password:   ")


for (var i=0; i < password.length ;i++){
    for (var j = 0;j < especials.length;j++){
        if (password[i] == especials[j]){
            contespecials++
        }
    }
}

for (var i=0;i<password.length;i++){
    for (var k = 0;k < numbers.length;k++){
        if (password[i] == numbers[k]){
            contnumbers++
        }
    }
}

console.log("Choose a correct password: ")

}while( (contnumbers < 1) || (contespecials < 1))
