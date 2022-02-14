// Faça um programa de agenda telefônica que deve ter as funções: Adicionar, Alterar, Deletar e Consultar.
// Ao adicionar um novo contato, ele deve criar um objeto com os atributos nome e telefone, e adicionar esse objeto à uma lista
// com todos os contatos.
// Ao alterar, ele deve receber o nome do contato a ser alterado e o novo telefone. Exiba uma mensagem de erro caso o contato
// não exista.
// Ao deletar, ele deve apagar o objeto com o nome passado.
// Ao consultar, ele deve receber um nome e procurar esse contato na agenda exibindo o número. Exiba uma mensagem de erro caso o 
// contato não exista.
console.clear()
console.log()

var prompt = require("prompt-sync")()

var novo = {}
var listatelefonica = []
var contato = {}

function adicionar(){

    do{
        contato = {}
        console.log()
        contato.Nome = prompt("Digite o nome do contato:    ").toUpperCase()
        console.log()
        do{
        var Telefone = prompt("Digite o número de telefone do contato com o ddd e sem traços:   ")
        contato.Telefone = Telefone
        if(Telefone.length != 11){
            console.log()
            console.log("Digite o número de telefone certo com 11 digitos")
            console.log()
        }
        }while( Telefone.length != 11)

        listatelefonica.push(contato)

        var resposta = ""
        while(!(resposta == "SIM" || resposta == "NAO")){
            console.log()
            resposta = prompt("Deseja adicionar mais algum contato??    ").toUpperCase()
            console.log()
            if(resposta == "NAO"){
                console.log()
                console.log("OK... vamos para tela inicial")
                console.log()
            }
        }

    }while(resposta == "SIM")

}

function alterar(){

    do{
        var alterar = prompt("Digite o número de telefone que deseja alterar:   ")
        if(alterar.length != 11){
            console.log()
            console.log("Digite o número de telefone certo com 11 digitos")
            console.log()
        }
    }while( alterar.length != 11)

    novo.Nome = prompt("Digite o novo nome:  ")
    novo.Telefone = prompt("Digite o novo telefone:  ")

    const igual = listatelefonica.find( numero => numero.Telefone == alterar)
    if(igual != undefined){
        listatelefonica.splice(listatelefonica.indexOf(igual),1,novo)
        console.log("A lista telefonica toda",listatelefonica)
    }else{
        console.log("A lista telefonica toda",listatelefonica)
    }

}

function deletar(){

    do{
        var deletar = prompt("Digite o número de telefone que deseja alterar:   ")
        if(deletar.length != 11){
            console.log()
            console.log("Digite o número de telefone certo com 11 digitos")
            console.log()
        }
    }while( deletar.length != 11)


    const igual = listatelefonica.find( numero => numero.Telefone == deletar)
    if(igual != undefined){
        listatelefonica.splice(listatelefonica.indexOf(igual),1)
        console.log("A lista telefonica toda",listatelefonica)
    }else{
        console.log("A lista telefonica toda",listatelefonica)
    }

}


continuar: do{
console.log()
console.log("Olá bem vindo ao aplicativo de agenda telefônica. Escolha entre as opções desejadas:   ")
console.log("1 - Adicionar um novo contato")
console.log("2 - Deletar algum contato")
console.log("3 - Modificar um contato")
console.log("4 - Encerrar programa")
console.log()
escolha = ""
while( !(escolha == 1 || escolha == 2 || escolha == 3 || escolha == 4)){
    var escolha = prompt("Digite qual opção você deseja (1,2,3 ou 4): ")
    if(!(escolha == 1 || escolha == 2 || escolha == 3 || escolha == 4)){
        console.log()
        console.log("Escolha entre a opção 1,2,3 E 4")
        console.log()
    }
}

if (escolha == 1){
    adicionar()
    continue continuar;
}else if(escolha == 2){
    deletar()
    continue continuar;
}else if(escolha == 4){
    break
}else if (escolha == 3){
    alterar()
    continue continuar;
}


terminar: do{
    var encerrar = prompt("Deseja encerrar o programa?  ")
    if(!(encerrar == "SIM" || encerrar == "NAO")){
        console.log("Escreva (SIM ou NAO) se deseja continuar")
    }
}while(!(encerrar == "SIM" || encerrar == "NAO"))

}while (encerrar = "SIM")
console.log(listatelefonica)