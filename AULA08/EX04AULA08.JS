// Faça um programa que carregue uma lista com os modelos de cinco carros. 
// Carregue uma outra lista com o consumo desses carros, isto é, quantos 
// quilômetros cada um desses carros faz com um litro de combustível. Calcule e mostre:
// O modelo do carro mais econômico;
// Quantos litros de combustível cada um dos carros cadastrados consome para percorrer 
// uma distância de 1000 quilômetros e quanto isto custará, considerando um que a 
// gasolina custe R$ 5,50 o litro.

var prompt = require("prompt-sync")();

const cars = ["Onix", "Kwid", "Clio", "HB20", "Vectra"]
const kilometers = ["9.9", "10.3", "10.9", "11.0", "11.6" ]

for (var i = 0; i < 5; i++){

    console.log("The ",cars[i]," travels ",parseFloat(kilometers[i]),"kilometers per liter")

    
}
console.log(typeof(parseFloat(kilometers[1])))

