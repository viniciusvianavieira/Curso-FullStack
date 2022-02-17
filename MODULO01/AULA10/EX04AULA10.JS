//Faça um "jogo da velha" criando uma matriz em duas dimensões 
//(Você deve criar um array com 3 arrays de 3 elementos cada dentro).
//O programa deve pedir as coordenadas (linha e coluna) alternadamente
//para 2 jogares e marcar X ou O em cada caso. Caso um jogador vença,
//ele deve interromper o programa e anunciar o vencedor.
console.clear()
console.log()
var prompt = require("prompt-sync")()

const array = []
const array123 = ["","",""]
const array456 = ["","",""]
const array789 = ["","",""]
var end = ""
function Game(line,column){

    for(let i = 0;i<3;i++){
        if (line == 0){
            for(let j = 0;j<3;j++){
                if(column == j){
                    array123[j] = object
                }
            }
        }else if(line == 1){
            for(let j = 0;j<3;j++){
                if(column == j){
                    array456[j] = object
                }
            }
        }else if(line == 2){
            for(let j = 0;j<3;j++){
                if(column == j){
                    array789[j] = object
                }
            }
        }
    }

    array.push(array123,array456,array789)
    array.push(array123,array456,array789)
}

function Empty(line,column,k){

    for(let m = 0; m < 4;m++){
        if ( line == 0){
            for(let l = 0;l < 4;l++){
                if ( (array123[column] == "X")||(array123[column] == "O")){
                    console.log("This position isn't empty. Try again")
                    k0 = k - 1
                    column = ""
                }
            }
        }else if ( line == 1){
            for(let l = 0;l < 4;l++){
                if ( (array456[column] == "X")||(array456[column] == "O")){
                    console.log("This position isn't empty. Try again")
                    k0 = k - 1
                    column = ""
                }
            }
        }else if ( line == 2){
            for(let l = 0;l < 4;l++){
                if ( (array789[column] == "X")||(array789[column] == "O")){
                    console.log("This position isn't empty. Try again")
                    k0 = k - 1
                    column = ""
                }
            }
        } 
    }

}

function Check(array123,array456,array789){''
    
    for(let h = 0; h< 4;h++){
        if(array123[h] ===  "X" &&  array456[h] === "X" && array789[h] === "X" || array123[h] ===  "X" &&  array456[h] === "X" && array789[h] === "X"){
            console.log(`The champion is`,array123[h])
            end = "ok"
        }else if(array123[h] === "X" && array123[h+1] === "X" && array123[h+2] === "X" || array123[h] === "O" && array123[h+1] === "O" && array123[h+2] === "O"){
            console.log(`The champion is`,array123[h])
            end = "ok"
        }else if(array456[h] === "X" && array456[h+1] === "X" && array456[h+2] === "X" || array456[h] === "O" && array456[h+1] === "O" && array456[h+2] === "O"){
            console.log(`The champion is`,array456[h])
            end = "ok"
        }else if(array789[h] === "X" && array789[h+1] === "X" && array789[h+2] === "X" || array789[h] === "O" && array789[h+1] === "O" && array789[h+2] === "O"){
            console.log(`The champion is`,array789[h])
            end = "ok"
        }else if(array123[h] === "X" && array456[h+1] === "X" && array789[h+2] === "X" || array123[h] === "O" && array456[h+1] === "O" && array789[h+2] === "O"){
            console.log(`The champion is`,array789[h])
            end = "ok"
        }else if(array123[h+2] === "X" && array456[h+1] === "X" && array789[h] === "X" || array123[h+2] === "O" && array456[h+1] === "O" && array789[h] === "O"){
            console.log(`The champion is`,array789[h])
            end = "ok"
        }

    }
}


console.log("WELCOME TO THE TIC TAC TOE")
console.log("They are the positions.")
console.log("")
console.log("| 00 | 01 | 02 |")
console.log("| -- | -- | -- |")
console.log("| 10 | 11 | 12 |")
console.log("| -- | -- | -- |")
console.log("| 20 | 21 | 22 |")
console.log("")

for( k = 0; k < 9;k++){
var k0 = k
        console.log("")
        var line = +prompt("Put the line position:   ")
        var column = +prompt("Put the column position : ")
        var object = prompt("Choose between (o) or (x):  ").toUpperCase()
        console.log("")

        Empty(line,column,k,k0)
        k = k0
        Game(line,column)
        
        console.log()
        array.push(array123,array456,array789)
            for(let n = 0;n < 3;n++){
                console.log(array[n])
            }
        console.log()

        Check(array123,array456,array789)

        if (end == "ok"){
            break;
        }
}


