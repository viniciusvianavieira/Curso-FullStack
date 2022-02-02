// A ideia deste projeto é criar um programa que simule uma votação com todo o conteúdo visto no módulo até este momento.
// O programa deve:
// Receber votos até que o usuário diga que não tem mais ninguém para votar;
// Ter uma função chamada autorizaVoto(anoNascimento) retornando: "Negado`, "Opcional" ou "Obrigatório";
// Ter uma função chamada votacao(autorizacao, voto) que valida e contabiliza o voto (número entre 1 e 5) ou retorna a mensagem: 
// "Você não pode votar", caso o voto não possa ser contabilizado;
// Contabilizar os votos de acordo com os significados:
// 1 = Candidato 1
// 2 = Candidato 2
// 3 = Candidato 3
// 4 = Voto Nulo
// 5 = Voto em Branco
// Ter uma função chamada exibirResultados() que deve mostrar:
// O total de votos para cada candidato
// O total de votos nulos
// O total de votos em branco
// Qual candidato venceu a votação

console.clear()
console.log()

var sure = "SIM"
var prompt = require("prompt-sync")()
const candidate1 = []
const candidate2 = []
const candidate3 = []
const blank = []
const nulll = []

function autorizaVoto(years){

    if(years > 17){
        console.log()
        console.log("OK.. Go ahead...")
        console.log()
    }else if( years>16 && years<18){
        console.log()
        console.log("Your vote isn't mandatory...")
        sure = prompt("Are you sure you want to vote??  ").toUpperCase()
        if ( (sure !== "SIM")){
            console.log("Ok no problems. Back to home now. NEEEEEEXTTTT")
        }
        console.log()
    }else if(years < 16 ){
        console.log()
        console.log("You can't vote. Vote DENIED")
        console.log("Please back to home!!! NEEEEXTTTT")
        console.log()
    }


}

function contvote(number){

    if (number == 1){
        console.log()
        console.log("You voted for candidate 1")
        candidate1.push(number)
        console.log()
    }else if(number == 2){
        console.log()
        console.log("You voted for candidate 2")
        candidate2.push(number)
        console.log()
    }else if(number == 3){
        console.log()
        console.log("You voted for candidate 3")
        candidate3.push(number)
        console.log()
    }else if(number == 5){
        console.log()
        console.log("You voted for option 5 (vote null)")
        nulll.push(number)
        console.log()
    }else if(number == 4){
        console.log()
        console.log("You voted for option 4 (blank vote)")
        blank.push(number)
        console.log()
    }
}

function exibirResultados(){
    console.log()
    console.log("The number of votes of candidate 1 is: ",candidate1.length)
    console.log("The number of votes of candidate 2 is: ",candidate2.length)
    console.log("The number of votes of candidate 3 is: ",candidate3.length)
    console.log("The number of votes of null:   ",nulll.length)
    console.log("The number of votes of blank:  ",blank.length)
    console.log()

    if (candidate1.length > candidate2.length && candidate1.length > candidate3.length){
        console.log("---------------------------------------------------------------------")
        console.log("The candidate 1 is won!!!!Congratiluations")
        console.log("---------------------------------------------------------------------")
    }else if(candidate2.length > candidate1.length && candidate2.length > candidate3.length){
        console.log("---------------------------------------------------------------------")
        console.log("The candidate 2 is won!!!!Congratiluations")
        console.log("---------------------------------------------------------------------")
    }else if(candidate3.length > candidate1.length && candidate3.length > candidate2.length){
        console.log("---------------------------------------------------------------------")
        console.log("The candidate 3 is won!!!!Congratiluations")
        console.log("---------------------------------------------------------------------")
    }

}

continue1:do{

    var vote = prompt("Do you wanna vote?   ").toLocaleUpperCase()
    if (!(vote == "SIM")){
        break
    }
    var years = +prompt("How old are you?   ")
    
    autorizaVoto(years)

    if(years < 16 || (sure !== "SIM")){
        continue continue1;
    }
   

    console.log("---------------------------------------------------------------------")
    console.log("1 = Candidato 1")
    console.log("2 = Candidato 2")
    console.log("3 = Candidato 3")
    console.log("4 = Voto Nulo")
    console.log("5 = Voto em Branco")
    console.log("---------------------------------------------------------------------")
    console.log("")
    
    do{
    var number = +prompt("Choose an option: (1,2,3,4 or 5):     ")
    }while(!(number == 1 || number == 2 || number == 3 || number == 4 || number == 5))
    
    contvote(number)

}while(vote == "SIM")

exibirResultados()














