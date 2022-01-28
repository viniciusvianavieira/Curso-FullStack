// Leia um valor inteiro X. Em seguida mostre os ímpares de 1 até X, um valor
// por linha, inclusive o X, se for o caso. Use o laço FOR.

var prompt = require("prompt-sync")()

var number = +prompt("Put any number:   ")

for( i = 1; i < (number+2); i++)
{
    if(i%2 != 0)
    {
        console.log(i)
    }
}