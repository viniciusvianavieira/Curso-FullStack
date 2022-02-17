// Faça um programa que solicite o total gasto pelo cliente de uma loja, imprima as opções
// de pagamento com os valores totais, solicite a opção desejada e imprima o valor total
// das prestações (se houverem). Ao final ele deve retornar o valor total da opção escolhida,
// guardar em uma lista e recomeçar a operação perguntando o valor total gasto pelo próximo 
// cliente. Quando o valor informado for 0, significa que não há mais clientes, então ele
// chamar uma nova função que vai mostrar quantas compras foram feitas em cada opção,
// e a soma do valor total de todas elas.

// Opção: a vista com 10% de desconto
// Opção: em duas vezes (preço da etiqueta)
// Opção: de 3 até 10 vezes com 3% de juros ao mês (somente para compras acima de R$ 100,00).

var prompt = require("prompt-sync")()
const vector = []
var summ = 0

function sum(vector){
    for (let i = 0; i < vector.length;i++)
    {
        
        summ = summ + vector[i]
        console.log(vector[i])
    }

    console.log("------------------------------------------------------------------------")
    console.log("The sum is:    ",summ)
    console.log("------------------------------------------------------------------------")
}

function spend()
{
    do{
        var value = +prompt("How many dollars did the client spend? ")
        var cash = value*0.9
        console.log("")
        console.log("Cash payment is:   $",cash)
        console.log("Pay by/in two installments is: $", value)

        if ( value > 100){
            var installments = +prompt("How many installment??   ")
            var installmentspayment = (value*(1.03**installments)).toFixed(2)
            console.log(`Pay by/in ${installments} to ten installments is: $`,installmentspayment)
        }
        console.log("------------------------------------------------------------------------")
        
        var  payment = +prompt("What will the payment method be? (1, 2 or 3):    ")
        if (payment == 1){
            vector.push(cash)
        }else if(payment == 2){
            vector.push(value)
        }else if(payment == 3){
            vector.push(installmentspayment)
        }else{
            console.log("Choose a correct option")

        }
        console.log(vector)
}while(value !== 0)
}

spend()
sum(vector)


console.log("------------------------------------------------------------------------")
console.log("Outside",vector)
console.log("------------------------------------------------------------------------")
