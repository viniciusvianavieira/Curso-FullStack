
//////// comentário 1 (01/02/2022) - Primeiro dia e o andamento foi bom. Toda parte estrutural organizada. Agora falta terminar o BRAZIL(ELSE IF == 1)


var prompt = require("prompt-sync")()

console.clear()
console.log()
console.log()

console.log("Today you woke up with a strange felling. Only you can change this felling.")
console.log("Every day you have an infinity of options too change your life")
console.log("If you want change your life you need start now!")
console.log("You have tree options too change (or not) your life:   ")
console.log()
console.log("1 - Continue your day like usual")
console.log("2 - Fuck everyone let's make it in our way ")
console.log("3 - You have an emergency fund, and it's a emergency isn't???")
console.log()



function Brazil(){

    console.log("Ok tickets to São Paulo is very cheap, lets buy!!")
    console.log("Be carefully the São Paulo is dangerous!!")
    var random = Math.floor(Math.random()*3) 
    if (random == 2){
        console.log("OMG. You need call the police")
        console.log("you just got robbed")
        console.log("Pay attention!!!!!!!")
        console.log("Don't stop de journey")
    }
    console.log("After take the airplane, you arrived em São Paulo")
    console.log("")
    console.log("What you prefer??")
    console.log("1 - Work in a restaurant")
    console.log("2 - Work in a car wahs ")
    console.log("")

    do{
    var choicebrazil1 = +prompt("Choose the better option:  ")
    }while(!(choicebrazil1 == 2 || choicebrazil1 == 1))

    if (choicebrazil1 == 2){

        console.log()
        console.log("The tips are good!!")
        console.log("But you need more money...")
        console.log()

        do{
        var choicebrazil11= prompt("Ok.. after 6 months its time to back to home, right??  (YES  or NO): ").toUpperCase()
        }while(!(choicebrazil11 == "YES" || choicebrazil11 == "NO"))

        if (choicebrazil11 == "YES"){
            console.log()
            console.log("------------------------------------------------")
            console.log("Welcome again in the rats run...")
            console.log("------------------------------------------------")
            console.log()

        }else if (choicebrazil11 == "NO"){
            console.log("Well.. It wasn't the best of choices....")
            console.log("Maybe you need to rob anyone")

            do{
                 var choicebrazil111 = prompt("So... Do what needs to be done?(1) or keep the hornor(2)??    ")
                 console.log()
            }while(!(choicebrazil111 == 2 || choicebrazil111 == 1))

            if (choicebrazil111 == 1){
                console.log()
                console.log("----------------------------------------------------------------------")
                console.log("You are catched and arrested. Well... It's the end of your life...")
                console.log("----------------------------------------------------------------------")
                console.log()
            }else if (choicebrazil111 == 2){
                console.log()
                console.log("----------------------------------------------------------------------")
                console.log("Sad to say that.... but hornor don't'pay the bills...")
                console.log("You died")
                console.log("----------------------------------------------------------------------")
                console.log()
            }
            
        }
    }else if(choicebrazil1 == 1){

        console.log()
        console.log("The people are nice and the food is for free...")
        console.log("Maybe it's the best choice!!!")
        console.log()

        do{
        var choicebrazil12 = prompt("Well... after 6 months do you wanna back to the home?? (YES OR NO):    ").toUpperCase()
        }while(!(choicebrazil12 == "YES" || choicebrazil12 == "NO"))

        if(choicebrazil12 == "NO"){
            
            console.log()
            console.log("Good choice!!! You met a pretty girl and you want her")
            console.log("But she want's'a person with a lot of money....")
            console.log("And you are a poor guy. So")
            console.log("Would you rather tell her that you are poor or lie?")
            console.log()
            var choicebrazil122 = prompt("(1) - Tell her the truth or (2) - Tell her the lie... ")

            if (choicebrazil122 == 1){
                console.log()
                console.log("------------------------------------------------")
                console.log("Well. She hates poor guys. Its so sad...")
                console.log("Game over. You are so alone. Lets go home")
                console.log("------------------------------------------------")
            }else if(choicebrazil122 == 2){

                console.log("")
                console.log("Nice job. She belives in you")
                var choicebrazil1222 = prompt("After 6 months. She wants to marry with you.You accept?").toUpperCase()
                if ( choicebrazil1222 == "SIM"){
                    console.log()
                    console.log("------------------------------------------------")
                    console.log("Congratulations!! You are happy and successful")
                    console.log("------------------------------------------------")
                }else if( choicebrazil1222 == "NAO"){
                    console.log()
                    console.log("------------------------------------------------")
                    console.log ("Well she broak up with you...")
                    console.log("Its very predictable...")
                    console.log("Let go to home!!!!")      
                    console.log("------------------------------------------------")
                }
            }
        }else if(choicebrazil12 == "YES"){
            console.log()
            console.log("------------------------------------------------")
            console.log("Welcome again in the rats run...")
            console.log("------------------------------------------------")

        }
    }
}
function travelling(){

    console.log("In this option you decided take your fund and travelling around the Brazil")
    console.log("Its a safe option")
    console.log("Coward!!! But ok, lets go!")
    console.log()

    Brazil()

    

}
function ratsrun(){

    console.log("Rats run")

}
function fuckall(){

    console.log("Fuck all")

}

function beggin(choice1){

    if (choice1 == 1){
        ratsrun()
    }else if(choice1 == 2){
        fuckall()
    }else{
        travelling()
    }



}

do{
var choice1 = +prompt("You must choose what option do you want: (1,2 or 3):  ")
}while(!(choice1 == 1 || choice1 == 2 || choice1 == 3))


beggin(choice1)


