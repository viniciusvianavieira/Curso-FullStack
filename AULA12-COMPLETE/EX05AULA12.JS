// 5. Crie uma função para inverter um array passado pelo usuário.

console.clear()
console.log()

var prompt = require("prompt-sync")()

const vector = []
const   inversevector = []

function inverse(vector){

//inversenames[(names.length-1)-j] = names[j]

for (let i = 0; i < vector.length; i++) {

    inversevector[(vector.length -1 ) - i]  = vector[i]
}
console.log(inversevector)
}


do{

    var number = +prompt("Digite anym number to your array:     ")
    vector.push(number)
    var continue1 = prompt("Do you want continue? (YES OR NO)   ").toUpperCase()

}while((continue1 == "YES"))

console.log("The chosen vector is:  ",vector)

        
inverse(vector)