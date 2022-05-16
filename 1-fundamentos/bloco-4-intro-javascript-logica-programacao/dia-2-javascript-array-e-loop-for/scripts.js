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

