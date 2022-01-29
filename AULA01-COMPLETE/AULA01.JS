
var prompt = require('prompt-sync')();
console.log();
let nome = 'Vinicius';
let idade = 21;

console.log(nome);
console.log(); 
console.log(idade);
console.log();
console.log(typeof(idade));
console.log(typeof(nome));

console.log();

idade = idade + 10;

console.log(idade)

// Typeof é para saber o tipo de variável (String, number etc)
// O uso do console.log vazio é para dar espaços entre as frases!
// Usar ' para String

console.log("OI", nome , "SEJA BEM VINDO");
console.log(`oi ${nome}, seja bem vindo`);

let numberint = 10;
let numberfloat =10.5;
let boolean = true;

console.log(numberint);
console.log(numberfloat);
console.log(boolean);

let name = prompt("Digita um nome ai seu corno:   ");

console.log("OLÁ",name);

let numberr = prompt("Digite sua idade que somo + 10:  ");
numberr = Number(numberr);
console.log( numberr + 10);