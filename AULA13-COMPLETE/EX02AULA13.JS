// Crie um sistema de cadastro de funcionários que deve criar um objeto novo para cada funcionário cadastrado
// com as informações: nome, cargo e salário. Ele deve armazenar todos esses objetos em uma lista. Ao final
// de cada cadastro ele deve perguntar se deseja cadastrar um novo funcionário e recomeçar o processo, e caso 
// não haja mais funcionários para cadastrar, ele deve chamar uma função que deve apresentar a quantidade de 
// funcionários com cada cargo e os nomes deles. (Você pode limitar as opções de cargo para facilitar.)

console.clear()
console.log()

var prompt = require('prompt-sync')()

var contprof = 0
var contestud = 0
var professor = []
var estudante = []
var listacadastro = []

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
console.log("Lista de estudante é:  ")
console.log(estudante)
console.log("-----------------------------------------------------------------------------------------------------------------------------")
console.log()
console.log("-----------------------------------------------------------------------------------------------------------------------------")
console.log("Número de professores é:   ",contprof)
console.log("Lista de professor é:  ")
console.log(professor)
console.log("-----------------------------------------------------------------------------------------------------------------------------")