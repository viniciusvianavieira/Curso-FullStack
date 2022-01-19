// Você deve criar um programa que faça 5 perguntas para o usuário, e dependendo das respostas, vai exibir 
// um resultado diferente no final. As perguntas devem ser todas de Sim ou Não, e devem ser referentes aos 
// objetivos que ele tiveram que ser cumpridos durante a jornada, por exemplo: "Você conseguiu encontrar a 
// Espada Mágica da Chama da Estrela do Inverno?", "Você conseguiu consertar os reatores nucleares do motor 
// de dobra?", "Você se lembrou de passar no mercado e comprar óleo?"
// No final, o programa deve fazer uma contagem de quantas respostas foram Sim, e exibir o resultado de 
// acordo com esse número:

// 0 respostas Sim: Você falha miseravelmente.
// 1 ou 2 respostas Sim: Você falha, mas ainda consegue fugir da situação.
// 3 respostas Sim: Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco.
// 4 respostas Sim: Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita.
// 5 respostas Sim: Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações.
// O programa deve contar a história inicial (background), fazer as perguntas, e ao final, exibir o resultado 
// de acordo com as situações acima.


prompt = require("prompt-sync")();

console.log("-----------------------------------------------------------------");
console.log("");
console.log("OLÁ VOCÊ CHEGOU NA IRLANDA PARA O SEU PRIMEIRO INTERCAMBIO!!!!");
console.log("PORÉM PRECISAMOS SABER SE VOCÊ ESTA PREPARADO PARA COMEÇAR A JORNADA!!!!");
console.log("");
console.log("-------------------------------------------------------------");
resposta1 = prompt("VOCÊ ESTÁ PREPARADO PARA COMEÇAR SUA JORNADA?????       ");

if (resposta1 == "SIM"){;
    console.log("-------------------------------------------------------------");
    resposta2 = prompt("VOCÊ JUNTOU DINHEIRO PARA RESERVA DE SEGURANÇA?????     ");
    console.log("");
    resposta3 = prompt("VOCÊ DEU ENTRADA PARA O VISTO????       ");
    console.log("");
    resposta4 = prompt("JÁ DEFINIU A ONDE IRÁ DORMIR NA PRIMEIRA SEMANA????        ");
    console.log("");
    resposta5 = prompt("CONTRATOU UM SEGURO DE VIAGEM????       ");
    console.log("");
    resposta6 = prompt("VOCÊ JÁ ENCONTROU ALGUM TRABALHO PARA COMEÇAR????       ");

}else{
    do {
        console.log("-------------------------------------------------------------");
        console.log("VOCÊ NÃO TEM OPÇÃO, CLIQUE SIM PARA COMEÇAR")
        console.log("")
        resposta7 = prompt ("VOCÊ VAI COMEÇAR SUA JORNADA OU NÃO???     ");
        console.log("-------------------------------------------------------------");
    }while (resposta7 != "SIM");
    
    console.log("-------------------------------------------------------------");
    resposta2 = prompt("VOCÊ JUNTOU DINHEIRO PARA RESERVA DE SEGURANÇA?????     ");
    console.log("");
    resposta3 = prompt("VOCÊ DEU ENTRADA PARA O VISTO????       ");
    console.log("");
    resposta4 = prompt("JÁ DEFINIU A ONDE IRÁ DORMIR NA PRIMEIRA SEMANA????        ");
    console.log("");
    resposta5 = prompt("CONTRATOU UM SEGURO DE VIAGEM????       ");
    console.log("");
    resposta6 = prompt("VOCÊ JÁ ENCONTROU ALGUM TRABALHO PARA COMEÇAR????       ");
    console.log("-------------------------------------------------------------");
    }

let cont = 0;

if (resposta2 == "SIM"){;
    cont = cont + 1;
}
if (resposta3 == "SIM"){;
    cont = cont + 1;
}
if (resposta4 == "SIM"){;
    cont = cont + 1;
}
if (resposta5 == "SIM"){;
    cont = cont + 1;
}
if (resposta6 == "SIM"){;
    cont = cont + 1;
};

console.log(cont)
console.log("");
console.log("-------------------------------------------------------------");
console.log("");
console.log("SEU CONTADOR É:    ", cont);
console.log("");
console.log("-------------------------------------------------------------");
console.log("");

if (cont == 0){;
    console.log("Você falha miseravelmente.");
};
if (cont == 1 ){;
    console.log(" Você falha, mas ainda consegue fugir da situação.");
};
if (cont == 2 ){;
    console.log(" Você falha, mas ainda consegue fugir da situação.");
};
if (cont == 3){;
    console.log("Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco.");
};
if (cont == 4){;
    console.log("Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita.");
};
if (cont == 5){;
    console.log("Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações.");
};
console.log("");
console.log("-------------------------------------------------------------");
console.log("");