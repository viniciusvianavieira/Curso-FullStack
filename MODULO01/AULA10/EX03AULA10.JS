//Faça um programa que peça ao usuário digitar a população e a taxa 
//de crescimento populacional de 2 países A e B, sendo que a população
//do país A deve ser menor que a de B, e a taxa de crescimento de A 
//seja maior. Faça um programa que calcule e escreva o número de anos
//necessários para que a população do país A ultrapasse ou iguale a 
//população do país B, mantidas as taxas de crescimento.

var prompt = require("prompt-sync")()

do{
    populationa = +prompt("Put the population of country a:  ")
    populationb = +prompt("Put the population of country b:  ")
    if (populationa > populationb){
        console.log("Put a correct population:  ")}
}while(populationa > populationb)

do{
    populationgrowtha = +prompt("Put the population growth of country a:    ")
    populationgrowthb = +prompt("Put the population growth of country b:    ")
    if ( populationgrowthb > populationgrowtha){
        console.log("Put a correct population growth:  ")} 
}while(populationgrowthb > populationgrowtha)

for (var i = 1; populationa < populationb; i++)
{
    populationa = populationa * populationgrowtha
    populationb = populationb * populationgrowthb
}
    
console.log("It took ",i," years!!!")
