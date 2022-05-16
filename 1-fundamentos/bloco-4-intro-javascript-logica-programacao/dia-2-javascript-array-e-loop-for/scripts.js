// ARRAYS

// let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

// console.log(tasksList.length);
// // 3

// let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

// let searchForFirstTask = tasksList[0];
// console.log(searchForFirstTask);
// // Tomar café

// let searchForLastTask = tasksList[tasksList.length - 1];
// console.log(searchForLastTask);
// // Brincar com o cachorro


// let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

// tasksList.push('Fazer exercícios da Trybe');  // adiciona mais uma tarefa
// console.log(tasksList);

// // ['Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe']



// let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

// tasksList.unshift('Fazer exercícios da Trybe');  // adiciona mais uma tarefa
// console.log(tasksList);

// // ['Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe']


// let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

// tasksList.pop();  // remove a última tarefa
// console.log(tasksList);

// // [ 'Tomar café', 'Reunião' ]


// let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

// tasksList.shift();  // remove a primeira tarefa
// console.log(tasksList);

// // [ 'Reunião', 'Brincar com o cachorro' ]



// let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

// let indexOfTask = tasksList.indexOf('Reunião');
// console.log(indexOfTask);

// // 1


// // Exercício 1
// // Obtenha o valor "Serviços" do array menu:

// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// let menuServices = menu[1];

// console.log(menuServices);


// // Exercício 2
// // Procure o índice do valor "Portfólio" do array menu:

// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// let indexOfPortfolio = menu.indexOf('Portfólio');

// console.log(indexOfPortfolio);

// // Exercício 3
// // Adicione o valor "Contato" no final do array menu:

// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];

// menu.push("Contato");

// console.log(menu);



// FOR

// let cars = ['Saab', 'Volvo', 'BMW'];
// console.log(cars[0]); // Saab
// console.log(cars[1]); // Volvo
// console.log(cars[2]); // BMW


// let cars = ["Saab", "Volvo", "BMW"];

// for (let index = 0; index < cars.length; index += 1) {
//   console.log(cars[index]);
// }



// Exercício 1
// Utilize o for para imprimir os elementos da lista groceryList com o console.log():

// let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

// for (let index = 0; index < groceryList.length; index += 1) {
//   console.log(groceryList[index]);
// }



// FOR OF


// let numeros = [1,2,3,4,5];
// for(let numero of numeros) {
//   console.log(numero);
// }

// // resultado:
// //1
// //2
// //3
// //4
// //5


// let word = 'Hello';
// for (let letter of word) {
//   console.log(letter);
// }
// // resultado:
// // "H"
// // "e"
// // "l"
// // "l"
// // "o"



// let arrOfNumbers = [10, 20, 30];
// for (let sum of arrOfNumbers) {
//   sum += 1;
//   console.log(sum);
// }



// // 11
// // 21
// // 31

// console.log(arrOfNumbers);
// // Resultado: [10, 20, 30]


// // EXERCICIO 1

// let names = ['João', 'Maria', 'Antônio', 'Margarida'];
// for (let name of names) {
//   console.log(name);
// }

// AGORA A PRÁTICA

// Leia atentamente os enunciados e faça o que se pede! Iremos utilizar esse array para realizar os exercícios do 1 ao 7:

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1. Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

// for (index = 0; index < numbers.length; index += 1) {
//   console.log(numbers[index]);
// }

// 2. Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

// let result = 0;

// for (index = 0; index < numbers.length; index += 1) {
//   result += numbers[index];
// }
// console.log(result);


// 3. Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// * A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

// let result = 0;

// for (index = 0; index < numbers.length; index += 1) {
//   result += numbers[index];
// }
// console.log(result / numbers.length);


// 4. Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

// let result = 0;

// for (index = 0; index < numbers.length; index += 1) {
//   result += numbers[index];
// }
// console.log(result / numbers.length);

// if (result > 20) {
//   console.log("Valor maior que 20");
// } else {
//   console.log("Valor menor ou igual a 20")
// }

// 5. 🚀 Utilizando for, descubra qual o maior valor contido no array e imprima-o;

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// o valor da variável higherNumber poderia ser qualquer um, desde que fosse menor que o menor número do array numbers. Caso atribuíssemos o valor 101 para a variável, nosso algoritmo estaria errado, pois ele nunca acharia um número maior que 101 no array. Para resolver esse problema vamos iniciar a variavel com o primeiro valor do array. Dessa forma podemos pular a posição 0 e iniciar com index = 1

// let higherNumber = numbers[0];

// for (let index = 1; index < numbers.length; index += 1) {
//   if (numbers[index] > higherNumber) {
//     higherNumber = numbers[index];
//   }
// }

// console.log(higherNumber);

// 6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// let howManyAreOdd = 0;
// let howManyAreEven = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//   if (numbers[index] % 2 !== 0) {
//     howManyAreOdd += 1;
//   } else {
//     howManyAreEven += 1;
//   }
// }

// if (howManyAreOdd === 0) {
//   console.log("nenhum valor ímpar encontrado")
// }

// console.log(howManyAreOdd);
// console.log(howManyAreEven);

// // ADICIONEI A OPÇÃO DE IMPRIMIR QUANTOS NÚMEROS SÃO PARES COMO EXTRA!


// 7. Utilizando for, descubra qual o menor valor contido no array e imprima-o;

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// let lowestNumber = numbers[0];

// for (let index = 1; index < numbers.length; index += 1) {
//   if (numbers[index] < lowestNumber) {
//     lowestNumber = numbers[index];
//   }
// }

// console.log(lowestNumber);


// 8. Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

// let oneArray = [];

// for (index = 1; index <= 25; index += 1) {
//   oneArray.push(index);
// }

// console.log(oneArray);

// 9. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

// let oneArray = [];

// for (index = 1; index <= 25; index += 1) {
//   oneArray.push(index / 2);
// }

// console.log(oneArray);

// BÔNUS EXERCISE!

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 1; index < array.length; index += 1) {
//   for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//     if (array[index] < array[secondIndex]) {
//       let position = array[index];
//       array[index] = array[secondIndex];
//       array[secondIndex] = position;
//     }
//   }
// }


// 1. Ordene o array numbers em ordem crescente e imprima seus valores;

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 1; index < numbers.length; index += 1) {
//   for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//     if (numbers[index] < numbers[secondIndex]) {
//       let position = numbers[index];
//       numbers[index] = numbers[secondIndex];
//       numbers[secondIndex] = position;
//     }
//   }
// }

// console.log(numbers);

// 2. Ordene o array numbers em ordem decrescente e imprima seus valores;

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 1; index < numbers.length; index += 1) {
//   for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//     if (numbers[index] > numbers[secondIndex]) {
//       let position = numbers[index];
//       numbers[index] = numbers[secondIndex];
//       numbers[secondIndex] = position;
//     }
//   }
// }

// console.log(numbers);

// 3. Agora crie um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push. O resultado deve ser o array abaixo:

// [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// let multipliedNumbers = [];

// for (index = 0; index < numbers.length; index += 1) {
//   if (index + 1 < numbers.length) {
//   multipliedNumbers.push(numbers[index] * numbers[index + 1]);
//   } else {
//     multipliedNumbers.push(numbers[index] * 2);
//   }
// }

// console.log(multipliedNumbers);