// Peça ao usuário uma quantidade de linhas e e outra de colunas, e imprima essas 
// Informações na forma de uma tabela como no exemplo de 3 linhas e 4 colunas:
// [ 0, 1, 2, 3 ]
// [ 1, 2, 3, 4 ]
// [ 2, 3, 4, 5 ]
//----------------------------------------------------------------------------------
//ESTRUTURA:

// array.push(vectorline)
// array.push(vectorcolumn)

// console.log(array)
// console.log("MATRIZ:")
// for (var i = 0; i < 3 ;i++){
//     console.log(array[i]) 
// }
//-----------------------------------------------------------------------------------
console.clear()
console.log()

var prompt = require("prompt-sync")()
const vectorline = []
const array = []

var lines = +prompt("Put the number of lines:   ")
var columns = +prompt("Put the number of columns:   ")

for ( var i = 0; i < columns;i++){
    vectorline.length = 0
    for (var j = 0; j<lines;j++){
    vectorline.push(j+i)
}
console.log("round",i,"Vector line is",vectorline)
array.push(vectorline)
}
console.log("-----------------------------------------")
console.log(" The math matriz is:   ")
console.log("-----------------------------------------")
for (var k = 0; k < lines; k++)
{
    console.log(array[k])
}