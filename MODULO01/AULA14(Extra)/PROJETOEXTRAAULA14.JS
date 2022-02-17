// Utilizando os conceitos aprendidos até objetos, crie um programa onde jogadores joguem um dado e tenham resultados aleatórios.
// O programa deve:
// Perguntar quantas rodadas você quer fazer;OK
// Perguntar quantos jogadores vão jogar;OK
// Criar um objeto pra cada jogador com nome e número tirado;ok
// Guarda todos os objetos em uma lista;ok
// Ordenar esses objetos, sabendo que o vencedor tirou o maior número no dado.
// Mostrar no final qual jogador ganhou mais rodadas e foi o grande campeão.
console.clear()
console.log()


var prompt = require("prompt-sync")()
var maior = 0
var listacampeao = []
var vetormaior = []
var cont = 0
var igual = 0
var todos=[]
var elemento = 0

function organizar(armazenamento,cont){
    console.log(cont)
    vetormaior = []
    maior = 0
    for(let k = 0; k < jogadores ;k++){
        if(armazenamento[k].aleatorio > maior){
            maior = armazenamento[k].aleatorio
            armazenamento[k].rodada = cont
            vetormaior.unshift(armazenamento[k])
        }
    }
    listacampeao.push(vetormaior[0])
    console.log("-------------------------------------------------------------------------------------")
    console.log("LISTA DOS CAMPEÕES")
    console.log(listacampeao)
    console.log("-------------------------------------------------------------------------------------")
}

function contar(listacampeao,nome){

console.log("dentro do contar",listacampeao)
for(var l = 0;  l < rodadas;l++){
    elemento = listacampeao[l].nome
    console.log("O elemento é:  ",elemento)
    igual = 0
    for(var m = 0; m < todos.length;m++){
        var analise = listacampeao[m].nome
        if (elemento == analise)
        console.log("Listacampeao[m]",analise)
        igual++
    }
    console.log("O nome ",elemento," apareceu ",igual," vezes")
}

}



var rodadas = +prompt("Digite o número de rodadas:   ")
var jogadores = +prompt("Número de jogadores:   ")
var armazenamento = []


for(let i = 1; i < rodadas + 1; i++){
    console.log("------------------------------------------------------------")
    console.log(`Essa é a rodada n° ${i}`)
    console.log("------------------------------------------------------------")
    campeao= []
    armazenamento = []
    for (let j = 0; j < jogadores;j++){

        var adicionar = {}
        var nome = prompt("Qual nome do jogador?    ")
        adicionar.nome = nome
        var aleatorio = Math.floor(Math.random(1)*7)
        adicionar.aleatorio = aleatorio
        adicionar.rodada = "Rodada"+i 
        console.log(`O número do dado do jogador ${nome} é: `,aleatorio)
        armazenamento.push(adicionar)
        todos.push(adicionar)
        
            
}
    cont++
    organizar(armazenamento,cont);
    

    
}

contar(listacampeao,nome)



console.log()
console.log("-------------------------------------------------------------------------------------")
console.log("A LISTA COM TODOS OS JOGADORES E RODADAS É:    ")
console.log(todos)
console.log("-------------------------------------------------------------------------------------")
console.log()