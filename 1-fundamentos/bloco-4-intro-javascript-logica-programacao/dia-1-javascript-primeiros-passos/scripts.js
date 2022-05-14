// 1. Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:
// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)



// let a = 10;
// let b = 2;

// let resultado;

// //1. Adição
// resultado = (a + b);
// console.log("O Exercício 1 deu: " + resultado);

// //2. Subtração
// resultado = (a - b);
// console.log("O Exercício 2 deu: " + resultado);

// //3. Multiplicação
// resultado = (a * b);
// console.log("O Exercício 3 deu: " + resultado);

// //4. Divisão
// resultado = (a / b);
// console.log("O Exercício 4 deu: " + resultado);

// //5. Módulo - O resto da divisão
// resultado = (a % b);
// console.log("O Exercício 5 deu: " + resultado);



//2. Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

// const a = 55
// const b = 9

// let maiorNumero;

// if (a > b) {
//   console.log("a é maior que b");
// } else {
//   console.log("b é maior que a");
// }

//3. Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

// const a = 111;
// const b = 4;
// const c = 3;

// if (a > b && a > c) {
//   console.log("a é o maior dos três números");
// } else if (b > a && b > c) {
//   console.log("b é o maior dos três números");
// } else {
//   console.log("c é o maior dos três números");
// }

//4. Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

// const hiddenNumber = 0;

// if (hiddenNumber > 0) {
//   console.log('positive');
// } else if (hiddenNumber < 0) {
//   console.log('negative');
// } else {
//   console.log('zero');
// }

//5. 🚀 Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
// Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
// Um ângulo será considerado inválido se não tiver um valor positivo.

const angleA = 40;
const angleB = 45;
const angleC = 45;
let sumOfAllAngles = (angleA + angleB + angleC);

if (angleA < 0 || angleB < 0 || angleC < 0) {
  console.log("Triângulo inválido, não existem ângulos negativos");

} else if (sumOfAllAngles === 180) {
  console.log("true");

} else {
  console.log("false");
}
