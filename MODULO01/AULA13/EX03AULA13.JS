//Implementando o exercício anterior, escreva uma função que deve calcular um aumento de salário baseado no cargo.
//Ela deve receber como argumento o cargo que receberá o aumento, e a taxa que ele irá aumentar. Após isso, aplique
//esse aumento à todos os funcionários daquele cargo e exiba o valor dos novos salários.

console.clear()
console.log()

var prompt = require('prompt-sync')()

var contprof = 0
var contestud = 0
var professor = []
var estudante = []
var listacadastro = []

function aumentar(){

    if (cadastro.cargo == "PROFESSOR"){

        cadastro.salario = cadastro.salario * 1.05
    
    }else if( cadastro.cargo == "ESTUDANTE"){
        
        cadastro.salario = cadastro.salario * 1.50
    }
}

function separar(cadastro){

if (cadastro.cargo == "PROFESSOR"){
    professor.push(cadastro)
    
    console.log()
    console.log("-----------------------------------------------------------------------------------------------------------------------------")
    console.log(`O ${cadastro.nome} foi adicionado a lista de professor:`,cadastro)
    console.log("-----------------------------------------------------------------------------------------------------------------------------")
    console.log()
    contprof++

}else if( cadastro.cargo == "ESTUDANTE"){
    estudante.push(cadastro)
    
    console.log()
    console.log("-----------------------------------------------------------------------------------------------------------------------------")
    console.log(`O ${cadastro.nome} foi adicionado a lista de estudante:`,cadastro)
    console.log("-----------------------------------------------------------------------------------------------------------------------------")
    console.log()
    contestud++
}
}

do{

    var cadastro = {}
    cadastro.nome = prompt("Digite o nome do funcionário:    ").toUpperCase()
    cadastro.cargo = prompt("Digite o cargo do funcionário:  ").toUpperCase()
    cadastro.salario = prompt("Digite o salário do funcionário:  ")

    separar(cadastro)
    aumentar(cadastro)
    listacadastro.push(cadastro)
    console.log()
    do{
        var resposta = prompt("Quer cadastrar um novo funcionário?   ").toUpperCase()
        if (!(resposta == "SIM" || resposta == "NAO")){
            console.log()
            console.log("DIGITE SIM OU NÂO PARA CONTINUAR")
            console.log()
        }
    }while( !(resposta == "SIM" || resposta == "NAO"))
    console.log()

}while(resposta == "SIM")

console.log("-----------------------------------------------------------------------------------------------------------------------------")
console.log("Número de estudantes é: ",contestud)
console.log("Lista de estudante com o reajuste no salário é:  ")
console.log(estudante)
console.log("-----------------------------------------------------------------------------------------------------------------------------")
console.log()
console.log("-----------------------------------------------------------------------------------------------------------------------------")
console.log("Número de professores é:   ",contprof)
console.log("Lista de professor com o reajuste no salário é:  ")
console.log(professor)
console.log("-----------------------------------------------------------------------------------------------------------------------------")