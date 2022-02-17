// Faça um programa que carregue uma lista com os modelos de cinco carros. 
// Carregue uma outra lista com o consumo desses carros, isto é, quantos 
// quilômetros cada um desses carros faz com um litro de combustível. Calcule e mostre:
// O modelo do carro mais econômico;
// Quantos litros de combustível cada um dos carros cadastrados consome para percorrer 
// uma distância de 1000 quilômetros e quanto isto custará, considerando um que a 
// gasolina custe R$ 5,50 o litro.

const newkilometers = []

const cars = ["Onix", "Kwid", "Clio", "HB20", "Vectra"]
const kilometers = ["9.9", "12.3", "10.9", "15.0", "7.6" ]

for (var i = 0; i < 5; i++)
{
    var liters = (1000/kilometers[i]).toFixed(2)
    console.log("The ",cars[i]," travels ",parseFloat(kilometers[i]),"kilometers per liter")
    console.log("For 1000 kilometers it use ",liters," liters and spend",(liters*5.5).toFixed(2)," reals")
    newkilometers.push(kilometers[i])    
}
newkilometers.sort((a,b) => a - b)

var index = kilometers.indexOf(newkilometers[0])
console.log("The most economic model is ",cars[index],"and it travels ",kilometers[index],"Kilometers per liter")



