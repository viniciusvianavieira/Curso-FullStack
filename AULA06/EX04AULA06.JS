// Faça um programa que simule um lançamento de dados. Lance o dado 100 vezes 
// e armazene os resultados em um array. Depois, mostre quantas vezes cada valor 
// foi conseguido.

const vectorrandom = []
const newvector = []
var cont = 0
var randomnumber = 0
var x = 100
var rep = 0

while(cont <x){

    randomnumber = Math.floor(Math.random() * 101)
    vectorrandom.push(randomnumber)
    cont++

}

console.log("The oldest array is:   ",vectorrandom)
vectorrandom.sort((a,b) => a-b)
console.log("The new array: ",vectorrandom)

cont = 0
while (cont < x)
{
    if (vectorrandom[cont] == vectorrandom[cont+1]){
        rep++
        cont++
    }else{
        console.log("The number is :    ",vectorrandom[cont], " and pops up ",rep+1," times")
        rep = 0
        cont++
    }
}

    