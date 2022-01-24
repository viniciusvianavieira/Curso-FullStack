// Faça um programa que leia e valide as seguintes informações:
// Nome: maior que 3 caracteres;
// Idade: entre 0 e 150;
// Salário: maior que zero;
// Estado Civil: 's', 'c', 'v', 'd';

var prompt = require("prompt-sync")();

do {;

    var nome = prompt("Digite um nome com + de 3 caracteres:    ");
    if (nome.length < 3);
    {;
        console.log("-----------------------------------------------");
        console.log("DIGITE UM NOME COM MAIS DE 3 CARACTERES");
        console.log("-----------------------------------------------");
    };
}while(nome.length < 3);


do {;

    var idade = +prompt("Digite uma idade entre 0 e 150 anos:    ");
    if (idade < 0 || idade > 150);
    {;
        console.log("-----------------------------------------------");
        console.log("DIGITE UMA IDADE ENTRE 0 E 150 ANOS");
        console.log("-----------------------------------------------");
    };
}while(idade < 0 || idade > 150);

do {;

    var salario = +prompt("Digite um salario maior que 0    :    ");
    if (salario < 0 );
    {;
        console.log("-----------------------------------------------");
        console.log("DIGITE UM SALARIO MAIOR QUE 0  ");
        console.log("-----------------------------------------------");
    };
}while(salario < 0);

do {;

    var estadocivil = prompt("Digite o Estado Civil da pessoa em: S , C , V, D    :    ");
    if (estadocivil.toUpperCase() != "S" && estadocivil.toUpperCase() != "C" && estadocivil.toUpperCase() != "V" && estadocivil.toUpperCase() != "D" );
    {;
        console.log("-----------------------------------------------");
        console.log("DIGITE UM ESTADO CIVIL EXISTENTE  ");
        console.log("-----------------------------------------------");
    };
}while(estadocivil.toUpperCase() != "S"  && estadocivil.toUpperCase() != "C" && estadocivil.toUpperCase() != "V" && estadocivil.toUpperCase() != "D" );