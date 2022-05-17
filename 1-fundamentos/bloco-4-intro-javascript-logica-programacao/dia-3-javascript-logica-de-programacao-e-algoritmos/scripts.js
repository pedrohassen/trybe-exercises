// ACADEMIA DE LÓGICA

/*
_______________________________________________________________________________________________________________

1. Encontre o index através do valor de um elemento

Escreva uma algoritmo que recebe 2 parâmetros:
  - Um array
  - O valor de um elemento de tipo primitivo

Imprima no terminal a posição index em que o elemento encontra-se.

Caso não o encontre, imprima:
-----------------------------------
"Elemento não encontrado no array"
-----------------------------------

_______________________________________________________________________________________________________________

2. Retorne os números ímpares

A Dora aventureira gostaria de ter uma lista com todos o números ímpares entre 1 e 50.

Escreva um algoritmo que imprima no terminal uma string com todos os números inteiros ímpares desse intervalo.

Use a seguinte estrutura na impressão:
----------------
"x, y, z, ...n"
----------------

_______________________________________________________________________________________________________________

3. Números divisíveis por 3

Escreva um algoritmo que cria uma sequência numérica de inteiros de razão 1, o algoritmo deve receber antes de
criar o valor inicial e final.

Conte os números divisíveis por 3 da sequência e imprima no terminal condicionando:

Se houver 50 ou mais:
---------------------------------------
"Há 50 ou mais números diviseis por 3"
---------------------------------------

Caso o contrário:
--------------------------
"Sequência muito pequena."
--------------------------

_______________________________________________________________________________________________________________
*/

// 1. FAZER DEPOIS

// 2. FAZER DEPOIS

// 3. FAZER DEPOIS

// O enunciado diz:
// Utilizando o array abaixo, percorra-o somando todos os valores. Caso o valor final seja maior que 15, imprima-o. Caso seja igual ou menor que 15, imprima a mensagem: "valor menor que 16":


//exercise.js

// let fruits = [3, 4, 10, 1, 12];
// let sum = 0;

// for (let index = 0; index < fruits.length; index += 1) {
//   sum += fruits[index];
// }

// if (sum > 15) {
//   console.log(sum);
// } else {
//   console.log('valor menor que 16');
// }


// // AULA AO VIVO; CHECAR MAIS A FUNDO NA AULA AO VIVO SALVA
// // QUEEN_ATTACK.JS

// //posição da rainha
// let linhaRainha = 0;
// let colunaRainha = 0;

// //posição do bispo

// let linhaBispo = 3;
// let colunaBispo = 3;

// //identifica se o ataque foi bem sucedido ou não
// let podeAtacar = false;

// //verifica se está na mesma linha
// if (linhaRainha === linhaBispo) {
//   podeAtacar = true;
// }

// //verifica se está na mesma coluna
// if (colunaRainha === colunaBispo) {
//   podeAtacar = true;
// }

// console.log("Pode atacar")

// //verifica se está na mesma diagonal



//EXERCICIO 1

// O fatorial é representado pelo sinal !
// ! = 4 x 3 x 2 x 1 = 24

// Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

// Ou seja, 10 x 9 x 8 x 7 x 6 x 5 x 4 x 3 x 2 x 1 = 10!


//  PRIMEIRA RESOLUÇÃO
// let fatorial = 1;

// for (index = 1; index <= 10; index += 1) {
//   fatorial *= index;
// }
// console.log(fatorial);


// //  FORMA REFATORADA
// let fatorando = 10; // variavel que indica o número a ser fatorado
// let fatorial = 1; // variavel que seta o início da multiplicação ?

// for (index = fatorial; index <= fatorando; index += 1) {
//   fatorial *= index;
// }
// console.log(fatorial);


// EXERCICIO 2
// Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

// let word = 'tryber'; //variavel que contem a palavra a ser invertida
// let drow = ''; //variavel que vai receber a palavra já invertida


// CRIEI UM MONSTRO QUE RODA PRA SEMPRE

// for (index = word.length-1; index >= 0; index -= 1) {
//   drow[index] = word[index];
//   for (index = 0; index <= drow.length; index += 1) {
//     drow[index] = word[index];
//   }
//   console.log(drow);
// }

// EXERCICIO 2 - Take two
// Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'tryber'; //variavel que contem a palavra a ser invertida
let drow = ''; //variavel que vai receber a palavra já invertida



// EXERCICIO 3
// 3- Considere o array de strings abaixo:

// let array = ['java', 'javascript', 'python', 'html', 'css'];

// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.


// EXERCICIO 4
// 4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.



// BÔNUS
// 1- Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:

// n = 5

// *****
// *****
// *****
// *****
// *****

// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

// n = 5

// *
// **
// ***
// ****
// *****

// 3- Agora inverta o lado do triângulo. Por exemplo:

// n = 5

//     *
//    **
//   ***
//  ****
// *****

// Atenção! Note que esse exercício é bem mais complexo que o anterior! Não basta, aqui, imprimir somente asteriscos. Você precisará de uma lógica para imprimir espaços também.

// 4- Depois, faça uma pirâmide com n asteriscos de base:

// n = 5

//   *
//  ***
// *****


// 5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:

// Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;
// n = 7

//    *
//   * *
//  *   *
// *******


// 6- Faça um programa que diz se um número definido numa variável é primo ou não.
// Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.
// Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.