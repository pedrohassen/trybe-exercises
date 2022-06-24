// const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
// food.sort(); // em um array de strings, por padrão, retorna em ordem alfabética
// console.log(food);
// // [ 'arroz', 'chocolate', 'doce de leite', 'farofa', 'feijão' ]

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// numbers.sort(); // em um array de números, por padrão, retorna em ordem numérica, mas levando em conta o unicode
// console.log(numbers); // [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]

// const points = [40, 100, 1, 5, 25, 10];
// points.sort((a, b) => a - b); // nesse caso, compara o primeiro e o segundo item do array, mudando de posição para que a condição seja atendida, ordenando-o numéricamente, do menor ao maior
// console.log(points); // [1, 5, 10, 25, 40, 100]

// const points1 = [40, 100, 1, 5, 25, 10];
// points.sort((a, b) => b - a); // mesma coisa que o de cima, mas ao contrário, ordenando do maior ao menor
// console.log(points); // [ 100, 40, 25, 10, 5, 1 ]

// Para fixar
// 1 - Utilize a sort para ordenar o array pela idade das pessoas em ordem crescente.

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const thereShallBeOrder = (arr) => arr.sort((a, b) => a.age - b.age);

console.log(thereShallBeOrder(people));

// 2 - Modifique o sort do exercício anterior para que ordene o array pela idade das pessoas em ordem decrescente.

const thereShallBeInverseOrder = (arr) => arr.sort((a, b) => b.age - a.age);

console.log(thereShallBeInverseOrder(people));