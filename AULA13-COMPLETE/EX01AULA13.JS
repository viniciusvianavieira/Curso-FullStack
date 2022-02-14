//Crie um objeto pessoa com os atributos: nome, idade, peso e altura. Além disso ela deve ter os métodos:
//Envelhecer, engordar, emagrecer, crescer. Por padrão, a cada ano que nossa pessoa envelhece até os 21 anos,
//ela deve crescer 0,5 cm. Crie um método bio que retorna uma string com todas as informações da pessoa.
console.clear()
console.log()

var prompt = require("prompt-sync")()
var idade = 0
pessoa = { Nome: 'Vinicius Viana', Idade: 18, Altura: 1.78, Peso: 74,

envelhecer: function(){
    pessoa.Idade++
},
crescer: function(){
    if (pessoa.Idade < 21){
        idade = pessoa.Altura + 0.05
        parseFloat(idade).toFixed(2)
        pessoa.Altura = idade}
},
engordar: function(){
    pessoa.Peso = pessoa.Peso + 0.08}
}




for( let i = 0; i < 45; i++){
    pessoa.envelhecer()
    pessoa.crescer()
    pessoa.engordar()
    console.log(pessoa)
}