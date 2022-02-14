// Peça ao usuário para digitar vários nomes (a quantidade deve ser escolhida 
// por ele). Exiba na tela todos os nomes digitados, porém de maneira 
// invertida (do último para o primeiro), apresente também o maior e o 
// menor nome (caso haja empate, deve mostrar todos).
console.clear()
console.log()

var prompt = require("prompt-sync")()
const names = []
const inversenames = []
const lengthnames = []
let iqual = ""
let iquals = ""
let major1 = ""
const list = []
const lists = []

var numbername = +prompt("How many names do you want?  ")  

/////////////////DECLARA A LISTA//////////////////////////////////////////////////////////////////////////////

for(var i = 0; i < numbername;i++)
{
    var name = prompt("Put the names: ")
    names.push(name)
    lengthnames.push(name.length)
}
console.log("The list of names is: ",names)

///////////////////////////////////////////////////////////////////////////////////////////////
/////////////////DECLARA A LISTA INVERSA//////////////////////////////////////////////////////////////////////////////

for(var j = 0 ; j < numbername ; j++)
{
    inversenames[(names.length-1)-j] = names[j]
}
console.log("The list of inverse names is:",inversenames)

///////////////////////////////////////////////////////////////////////////////////////////////
/////////////////DECLARA O MAIOR NOME//////////////////////////////////////////////////////////////////////////////

for (let i of names){
    if(i.length > major1.length){
        major1=i            
    }else if(i.length == major1.length){
        list.push(major1) 
    }    
}
console.log("The biggest name is:   ",major1)

for (let j of list){
    if (j.length > iqual.length)
        iqual = j
} 
if ( iqual.length == major1.length){
    console.log("The names with have the same big lenght:    ",iqual,major1)
}
///////////////////////////////////////////////////////////////////////////////////////////////
/////////////////DECLARA O MENOR NOME//////////////////////////////////////////////////////////////////////////////

for (let i of names){
    if(i.length < major1.length){
        small1=i            
    }else if(i.length == small1.length){
        lists.push(small1) 
    }    
}
console.log("The smallest name is:   ",small1)
console.log("The lists",lists)

for (let K of lists){
    if (K.length < iquals.length)
        iquals = K
} 
if ( iquals.length == small1.length){
    console.log("The names with have the same big lenght:    ",iquals,small1)
}

///////////////////////////////////////////////////////////////////////////////////////////////