// 1) Reajuste salarial - As empresas @.com resolveram dar um aumento de salário 
// aos seus colaboradores e lhe contrataram para desenvolver o programa que 
// calculará os reajustes. Faça um programa que recebe o salário de um colaborador 
// e o reajuste segundo o seguinte critério, baseado no salário atual: 
// Salários até R$ 280,00 (incluindo): aumento de 20%. 
// Salários entre R$ 280,00 e R$ 700,00: aumento de 15%.
// Salários entre R$ 700,00 e R$ 1500,00: aumento de 10%.
// Salários de R$ 1500,00 em diante: aumento de 5%.
// Após o aumento ser realizado, informe na tela:
// O salário antes do reajuste.
// O percentual de aumento aplicado.
// O valor do aumento.
// O novo salário, após o aumento.

var prompt = require("prompt-sync")();

var salario = +prompt("Digite o sálario que necessita ser reajustado:    R$ ");

if (salario <= 280);
{;
    console.log("Salário Atual: R$ ",salario);
    console.log("Percentual de Aumento:  20%");
    console.log("Valor Aumentado:   R$ ",(salario*0.20).toFixed(2));    
    console.log("Valor Total do Sálario:    R$ ",(salario*1.2).toFixed(2));
};

if (salario > 280 && salario < 700);
{;
    console.log("Salário Atual: R$ ",salario.toFixed(2));
    console.log("Percentual de Aumento:  15%");
    console.log("Valor Aumentado:   R$ ",(salario*0.15).toFixed(2)); 
    console.log("Valor Total do Sálario:    R$ ",(salario*1.15).toFixed(2));    
};

if (salario > 700 && salario < 1500);
{;
    console.log("Salário Atual: R$ ",salario.toFixed(2));
    console.log("Percentual de Aumento:  10%");
    console.log("Valor Aumentado:   R$ ",(salario*0.10).toFixed(2));  
    console.log("Valor Total do Sálario:    R$ ",(salario*1.10).toFixed(2));  
};

if (salario > 1500);
{;
    console.log("Salário Atual: R$ ",salario.toFixed(2));
    console.log("Percentual de Aumento:  5%");
    console.log("Valor Aumentado:   R$ ",(salario*0.05).toFixed(2));    
    console.log("Valor Total do Sálario:    R$ ",(salario*1.05).toFixed(2));    
};

