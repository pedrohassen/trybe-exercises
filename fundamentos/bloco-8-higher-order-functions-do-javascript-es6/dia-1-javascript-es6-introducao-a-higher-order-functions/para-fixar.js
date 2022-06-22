// Para fixar
// Vamos praticar com os seguintes exercícios:

// 1 - Crie uma função que retorne a string 'Acordando!!';

const wakingUp = () => `Acordando!!`;

// console.log(wakingUp());

// 2 - Crie outra função que retorne a string 'Bora tomar café!!';

const coffeTime = () => `Bora tomar café!!`;

// console.log(coffeTime());

// 3 - Crie mais uma função que retorne a string 'Partiu dormir!!';

const sleepTime = () => 'Partiu dormir!!';

// console.log(sleepTime());

// 4 - Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores. Exemplo:

// const doingThings = (func1, func2, func3) => console.log(wakingUp, coffeTime, sleepTime);

const doingThings = (callback) => console.log(callback());
doingThings(wakingUp);
doingThings(coffeTime);
doingThings(sleepTime);

// Ao chamar a função doingThings:
// doingThings(wakeUp);

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!