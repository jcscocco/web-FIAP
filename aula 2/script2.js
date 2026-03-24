let nivelAcesso = 2;

if (nivelAcesso === 3) {
  console.log("Acesso Total");
} else if (nivelAcesso === 2) {
  console.log("Acesso Parcial");
} else {
  console.log("Acesso Negado");
}


let nota = 8;
switch (nota) {
  case 10:
    console.log("Nota Máxima");
    break;
  case 9:
  case 8:
    console.log("Muito Bom");
    break;
  case 7:
  case 6:
    console.log("Bom");
    break;
  case 5:
    console.log("Regular");
    break;
  default:
    console.log("Nota insuficiente");
    break;
}


for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log("Par:", i);
  }
}


let soma = 0;
let contador1 = 1;
while (contador <= 5) {
  soma += contador;
  contador++;
}
console.log("Soma total:", soma); // 15


let n = 3;
do {
  console.log(n);
  n--;
} while (n > 0);
console.log("FIM!");


let valor3 = 10; // fazendo a associação direta
let valor4 = 2;  // fazendo a associação direta
let operador1 = "*"; // fazendo a associação direta

//Ou peça para o usuário digitar os valores utilizando o prompt
//Só que nesse caso você precisa converter o retorno do prompt dos valores 1 e 2 para Number.

let valor1 = Number(prompt("Digite o primeiro valor"));
let valor2 = Number(prompt("Digite o segundo valor"));
let operador = prompt("Digite o operador (+, -, *, /)");

switch (operador) {
  case "+":
    console.log(valor1 + valor2);
    break;
  case "-":
    console.log(valor1 - valor2);
    break;
  case "*":
    console.log(valor1 * valor2);
    break;
  case "/":
    console.log(valor1 / valor2);
    break;
  default:
    console.log("Operador inválido");
}


let nota1 = 8.5;
let nota2 = 7.0;
let nota3 = 9.2;

let media = (nota1 + nota2 + nota3) / 3;

console.log("Média:", media.toFixed(1));

if (media >= 9) {
  console.log("Conceito: A - Excelente");
} else if (media >= 7) {
  console.log("Conceito: B - Bom");
} else if (media >= 5) {
  console.log("Conceito: C - Regular");
} else if (media >= 3) {
  console.log("Conceito: D - Insuficiente");
} else {
  console.log("Conceito: F - Reprovado");
}

let numero = 7;

console.log("Tabuada do " + numero + " (usando for):");
for (let i = 1; i <= 10; i++) {
  console.log(numero + " x " + i + " = " + (numero * i));
}

console.log("\nTabuada do " + numero + " (usando while):");
let contador = 1;
while (contador <= 10) {
  console.log(numero + " x " + contador + " = " + (numero * contador));
  contador++;
}