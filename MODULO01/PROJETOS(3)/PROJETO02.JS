var prompt = require("prompt-sync")()
console.clear()
console.log()

const elements = [ "SCISOR","ROCK","PAPER"]
var wuser = 0
var wcomputer = 0

console.log(typeof(elements[1]))

console.log("Hello, welcome to the Jokenpô game. Do you wanna play?") 
console.log("Choose the numbers of rounds and the element")
console.log("")
rounds = +prompt("Choose de numbers of rounds:    ")



stop:for ( let i = 0; i < rounds ;i++)
{
    console.log("")
    var element = prompt("Choose between the options:   ",console.log(elements))

    if (!(element == elements[0] || element== elements[1] || element == elements[2])){

        console.log("--------------------------------------------------")
        console.log("Choose a correct option:   ")  
        console.log("--------------------------------------------------")
        i--
        continue stop;      
    }

    const computer = elements[Math.floor(Math.random() * elements.length)]
    console.log("The choice of computer is: ",computer)

    
    if (element == elements[0]){
        if (element == computer){
            console.log("Nobody won, Try again?!!")
        }else if( computer == "PAPER"){
            console.log("The user won, try again!!")
            wuser++           
        }else{
            console.log("The computer won,try again!!")
            wcomputer++
        }
    }

    if (element == elements[1]){
        if (element == computer){
            console.log("Nobody won, Try again?!!")
        }else if( computer == "PAPER"){
            console.log("The computer won, try again!!")
            wcomputer++           
        }else{
            console.log("The user won,try again!!")
            wuser++
        }
    }
    if (element == elements[2]){
        if (element == computer){
            console.log("Nobody won, Try again?!!")
        }else if( computer == "SCISOR"){
            console.log("The computer won, try again!!")
            wcomputer++           
        }else{
            console.log("The user won,try again!!")
            wuser++
        }
    }
}

console.log("")
console.log("The computer won ",wcomputer," times")
console.log("The user won ",wuser," times")
console.log("")

if ( wcomputer>wuser){
    console.log("Computer is the champion")
}else if(wuser>wcomputer){
    console.log("User is the champion")
}else{
    console.log("It drew, no one won")
}
    


    


