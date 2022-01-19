
var prompt = require("prompt-sync")();

console.log("------------------------------------------------")
cliente = prompt("NOME DO CLIENTE: ");
console.log("------------------------------------------------")

console.log("");
console.log("OPÇÕES PARA O CLIENTE:");
console.log("");
console.log(" OPÇÃO 1 = PICANHA COMPLETA");
console.log(" OPÇÃO 2 = CAMARÃO NO COCO");
console.log(" OPÇÃO 3 = BACALHAU EMPANADO");
console.log(" OPÇÃO 4 = COSTELA DE PORCO");
console.log("");
console.log("------------------------------------------------")

escolhido = +prompt("Digite o número 1,2,3 ou 4:    ")

if (escolhido == 1){
    console.log(" OPÇÃO 1 = PICANHA COMPLETA ESCOLHIDA")}
if (escolhido==2){
    console.log(" OPÇÃO 2 = CAMARÃO NO COCO ESCOLHIDA")}
if (escolhido==3){   
    console.log(" OPÇÃO 3 = BACALHAU EMPANADO")}
if (escolhido==4){     
    console.log(" OPÇÃO 4 = COSTELA DE PORCO")}