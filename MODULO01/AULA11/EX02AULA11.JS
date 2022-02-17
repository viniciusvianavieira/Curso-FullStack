// Construa uma função que receba uma data no formato DD/MM/AAAA e 
// devolva uma string no formato 'D de mesPorExtenso de AAAA'. Valide
// a data e retorne NULL caso a data seja inválida.

var prompt = require("prompt-sync")()

function date (a)
{
    months = ["janeiro","feveireiro","março","abril","maio","junho","Julho","agosto","setembro","outubro","novembro","dezembro"]   
    
    var daysandmonths = date1.split("/",3)   
    console.log(daysandmonths[0]," de ",months[parseInt(daysandmonths[1]-1)]," de ",daysandmonths[2])
}

var date1 = prompt("Put the date in this format dd/mm/aaaa: ")

date(date1)
