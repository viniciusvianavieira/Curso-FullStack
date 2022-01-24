
// Faça um programa que leia 3 valores que representam os lados de um triângulo A, B e C e ordene-os em 
// ordem decrescente, de modo que o lado A representa o maior dos 3 lados. A seguir, determine o tipo de 
// triângulo que estes três lados formam, com base nos seguintes casos:
// Se A² ≥ B² + C², apresente a mensagem: NAO FORMA TRIANGULO;
// Se A² = B² + C² , apresente a mensagem: TRIANGULO RETANGULO;
// Se A² > B² + C² , apresente a mensagem: TRIANGULO OBTUSANGULO;
// Se A² < B² + C² , apresente a mensagem: TRIANGULO ACUTANGULO;
// Se os três lados forem iguais, apresente a mensagem: TRIANGULO EQUILATERO;
// Se apenas dois dos lados forem iguais, apresente a mensagem: TRIANGULO ISOSCELES;

var prompt = require("prompt-sync")();

var lado1 = +prompt("DIGITE UM PRIMEIRO LADO:  ")
var lado2 = +prompt("DIGITE UM SEGUNDO LADO:  ")
var lado3 = +prompt("DIGITE UM TERCEIRO LADO:  ")
console.log("")
console.log("---------------------------------------------------------------")
var x = 0

if (lado1 < lado2)
{
    x = lado1
    lado1 = lado2
    lado2 = x   
}

if (lado1 < lado3)
{
    x = lado1
    lado1 = lado3
    lado3 = x
}

if (lado2 < lado3)
{
    x = lado2
    lado2 = lado3
    lado3 = x   
}

console.log("")
console.log("Os lados dos triângulos em ordem decrescente são: ",lado1," ",lado2," ",lado3)
console.log("")


if ((lado1*lado1) >= (lado2*lado2) + (lado3*lado3))
{
    console.log("")
    console.log("Esse triângulo não existe")
    console.log("")
}

if ((lado1*lado1) == (lado2*lado2) + (lado3*lado3))
{
    console.log("")
    console.log("Esse triângulo é um triângulo retângulo")
    console.log("")
}

if ((lado1*lado1) > (lado2*lado2) + (lado3*lado3))
{
    console.log("")
    console.log("Esse triângulo é um triângulo obtusângulo")
    console.log("")
}

if ((lado1*lado1) < (lado2*lado2) + (lado3*lado3))
{
    console.log("")
    console.log("Esse triângulo é um triângulo acutângulo")
    console.log("")
}

if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3)
{
    console.log("")
    console.log("Esse triângulo é um triângulo Isósceles")
    console.log("")
}
if (lado1 == lado2 && lado3 == lado1)
{
    console.log("")
    console.log("Esse triângulo é um triângulo Equilátero")
    console.log("")
}   