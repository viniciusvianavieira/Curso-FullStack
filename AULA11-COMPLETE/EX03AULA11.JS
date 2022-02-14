//Escreva uma função para conversão de temperatura. Ela deve receber 2 argumentos: um número
//e um caracter 'C', 'F' ou 'K', indicando que a temperatura está em Celsius, Fahrenheit ou
//Kelvin. A função deve exibir a temperatura nas 3 escalas e perguntar qual valor quer retornar.
console.clear()
console.log()

var prompt = require("prompt-sync")()

function choices (option)
{
    
    if ( option == "C"){

        console.log("The chosen temperature was:    ",tc, "°C")

    }else if (option == "F"){

        console.log("The chosen temperature was:    ",tf, "°F")

    }else if (option == "F"){

        console.log("The chosen temperature was:    ",tk, "°K")

    }
    


}

function temperatures (value,unit){

    if (unit == "C")
    {
        let tf = ((value/5)*9)+32
        let tk = (value + 273)
        let tc = value
        console.log("The temperature in the celsius escale  is:   ",tc)
        console.log("The temperature in the fahrenheit escale  is:   ",tf)
        console.log("The temperature in the kelvin escale is:   ",tk)
        console.log()

        var option = prompt("Choice a temperature unit (C,F or K):   ").toUpperCase()
        if ( option == "C"){

            console.log("The chosen temperature was:    ",tc, "°C")
    
        }else if (option == "F"){
    
            console.log("The chosen temperature was:    ",tf, "°F")
    
        }else if (option == "F"){
    
            console.log("The chosen temperature was:    ",tk, "°K")
    
        }

    }else if(unit == "K") {

        let tf = (((value-273)/5)*9)+32
        let tk = (value)
        let tc = (value - 273)
        console.log("The temperature in the celsius escale is:   ",tc)
        console.log("The temperature in the fahrenheit escale is:   ",tf)
        console.log("The temperature in the kelvin escale is:   ",tk)
        console.log()

        var option = prompt("Choice a temperature unit (C,F or K):   ").toUpperCase()
        if ( option == "C"){

            console.log("The chosen temperature was:    ",tc, "°C")
    
        }else if (option == "F"){
    
            console.log("The chosen temperature was:    ",tf, "°F")
    
        }else if (option == "F"){
    
            console.log("The chosen temperature was:    ",tk, "°K")
    
        }

    }if(unit == "F") {
        let tf = value
        let tk = (((value-32)/9)*5)+273
        let tc = ((value-32)/9)*5

        console.log("The temperature in the celsius escale is:   ",tc)
        console.log("The temperature in the fahrenheit escale is:   ",tf)
        console.log("The temperature in the kelvin escale is:   ",tk)
        console.log()

        var option = prompt("Choice a temperature unit (C,F or K):   ").toUpperCase()
        if ( option == "C"){

            console.log("The chosen temperature was:    ",tc, "°C")
    
        }else if (option == "F"){
    
            console.log("The chosen temperature was:    ",tf, "°F")
    
        }else if (option == "F"){
    
            console.log("The chosen temperature was:    ",tk, "°K")
    
        }

    }
}

        do{
            var temperature = +prompt("Choose the value of temperature:  ")
            var choice = prompt("Choose a unit: (C,F or K):  ").toUpperCase()
        }while(!(choice == "C"||choice == "F"||choice == "K"))
    

        temperatures(temperature,choice)
