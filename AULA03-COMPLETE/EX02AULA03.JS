
// 2) Faça um programa para a leitura de quatro notas parciais de um aluno. O programa deve calcular a média
//  alcançada por aluno e apresentar:
// A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
// A mensagem "Em recuperação", se a média for entre cinco e sete;
// A mensagem "Reprovado", se a média for menor que cinco.

var prompt = require("prompt-sync")();

nota1 = +prompt("DIGITE NOTA 1: ");
nota2 = +prompt("DIGITE NOTA 2: ");
nota3 = +prompt("DIGITE NOTA 3: ");
nota4 = +prompt("DIGITE NOTA 4: ");

var média = (nota1+nota2+nota3+nota4)/4;
média = média.toFixed(2);
console.log("--------------------------------------");
console.log("SUA MÉDIA FOI DE:",média);
console.log("--------------------------------------");

if(média >= 7){;
    console.log("");
    console.log("PARABÉN VOCÊ FOI APROVADO");
    console.log("");
}else if ( média < 7 && média > 5){;
    console.log("");
    console.log("VOCÊ ESTÁ DE RECUPERAÇÃO");
    console.log("");
}else{;
    console.log("");
    console.log("VOCÊ REPETIU DE ANO");
    console.log("")};