// Peça ao usuário uma quantidade de linhas e e outra de colunas, e imprima essas 
// Informações na forma de uma tabela como no exemplo de 3 linhas e 4 colunas:
// [ 0, 1, 2, 3 ]
// [ 1, 2, 3, 4 ]
// [ 2, 3, 4, 5 ]

var prompt = require("prompt-sync")()
const vectorline = []
const array = []
var lines = +prompt("Put the number of lines:   ")
var columns = +prompt("Put the number of columns:   ")

for(i = 0;i<lines;i++){
    for(j = i;j<columns+i;j++){
        array.push(j)    
     }
}
console.log(array)

for(i = 0;i<lines;i++){   
    for(j = i;j<columns+i;j++){
        console.log(array[j])
    }
}
