// OBJETOS

// Você já aprendeu que as variáveis em JavaScript são recipientes ou containers para os dados. Por exemplo:

// let car = 'Fiat';

// Agora é hora de aprender sobre objetos!
// Um objeto em JavaScript é uma entidade independente, com propriedades e tipos. Uma propriedade é a associação entre uma chave e um valor, são essas as características do objeto.
// Pense em um objeto da vida real, como o carro do exemplo acima. Cada carro tem sua cor, peso, tamanho, quantidade de portas e etc. Essas são suas características, suas propriedades. E, da mesma forma que funciona um objeto da vida real, funcionam os objetos em JavaScript.


// Então, pessoal, como vocês viram, objetos são estruturas ou coleções compostas por pares chave-valor. Também é possível armazenar um objeto dentro de outro, ou até mesmo dentro de um array.

// let car = {
//   type: 'Fiat',
//   model: '500',
//   color: 'white',
// };

// Para acessar as chaves dentro de um objeto, pode-se usar notação de ponto ou notação de colchetes.
// Se o objeto está dentro de um array, ele é acessado através do seu índice, da mesma forma que se acessaria uma informação num array de strings, por exemplo. Após pegar o objeto que você deseja, para acessar suas propriedades basta usar a notação de colchetes ou a notação de ponto. O mesmo vale para acessar objetos dentro de objetos.
// As chaves de um objeto são armazenadas como strings e, para conseguir acessar propriedades nomeadas com números, como 0, por exemplo, só é possível usando a notação de colchetes. Se você usar a notação de ponto, ocorre um erro. Ao usar a notação de colchetes também é possível chamar variáveis que fazem relação com a chave que você quer acessar dentro desses colchetes.
// Escreva os códigos abaixo no seu VSCode para acompanhar os resultados.

// let diasDaSemana = {
//   : 'domingo',
//   : 'segunda',
//   : 'terça',
//   : 'quarta',
//   : 'quinta',
//   : 'sexta',
//   : 'sábado',
//   };
  
//   diasDaSemana.1; // SyntaxError: Unexpected number
//   console.log(diasDaSemana['1']); // domingo

//   No código acima, ocorre um erro por usar notação de ponto ao invés de notação de colchetes com uma propriedade nomeada com número.
// Agora veja este exemplo:

// let conta = {
//   agencia: '0000',
//   banco: {
//     cod: '012',
//     id: 4,
//     nome: 'TrybeBank',
//   },
// };

// let infoDoBanco = 'banco';
// console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
// console.log(conta[infoDoBanco]['nome']); // TrybeBank

// console.log(conta.agencia); // 0000
// console.log(conta['agencia']); // 0000

// console.log(conta.banco.cod); // 012
// console.log(conta['banco']['id']); // 4

// Neste exemplo, a chave banco do objeto conta, guarda um outro objeto, e também há o uso de variável na notação de colchetes, além de você poder ver exemplos usando notação de ponto e notação de colchetes.
// Neste outro exemplo, veja como vamos adicionar as informações de forma encadeada:

// let usuario = {
//   id: 99,
//   email: 'jakeperalta@gmail.com',
//   infoPessoal: {
//     nome: 'Jake',
//     sobrenome: 'Peralta',
//     endereco: {
//       rua: 'Smith Street',
//       bairro: 'Brooklyn',
//       cidade: 'Nova Iorque',
//       estado: 'Nova Iorque',
//     },
//   },
// };

// console.log(usuario['id']); // 99
// console.log(usuario.email); // jakeperalta@gmail.com

// console.log(usuario.infoPessoal.endereco.rua); // Smith Street
// console.log(usuario['infoPessoal']['endereco']['cidade']); // Nova Iorque

// O objeto deste exemplo possui a chave infoPessoal que possui outras 3 chaves, uma delas sendo endereco, que é outro objeto! Ou seja, o objeto usuario possui outros dois dentro dele.
// Agora, e se o nosso objeto está dentro de um array? Como acessamos as propriedades do objeto? Veja este exemplo:

// let moradores = [
//   {
//     nome: 'Luiza',
//     sobrenome: 'Guimarães',
//     andar: 10,
//     apartamento: 1005,
//   },
//   {
//     nome: 'William',
//     sobrenome: 'Albuquerque',
//     andar: 5,
//     apartamento: 502,
//   },
//   {
//     nome: 'Murilo',
//     sobrenome: 'Ferraz',
//     andar: 8,
//     apartamento: 804,
//   },
//   {
//     nome: 'Zoey',
//     sobrenome: 'Brooks',
//     andar: 1,
//     apartamento: 101,
//   },
// ];

// let primeiroMorador = moradores[0];
// console.log(primeiroMorador); // { nome: 'Luiza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
// console.log(primeiroMorador['andar']); // 10

// let ultimoMorador = moradores[moradores.length - 1];
// console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
// console.log(ultimoMorador.nome); // Zoey

// Esse último bloco de código é um exemplo de um array composto por objetos. Os objetos desejados foram acessados através dos seus índices e armazenados dentro de variáveis para facilitar a compreensão.
// Perceba que o nome que escolhemos para a função é um nome composto, e para a escrita de nomes compostos em JavaScript existem algumas convenções. Uma delas é a kebab case, onde o nome fica separado por um traço. Apesar de ser uma convenção, não é uma boa prática de escrita, pois muitas linguagens interpretam o traço como um sinal de subtração, o que pode ocasionar bugs.
// Você se lembra das regras de nomeação de variáveis? As mesmas se aplicam aqui. O recomendado é usar nomes descritíveis para as propriedades, além de escrevê-las no estilo camelCase.
// ATENÇÃO: Não use o estilo de escrita kebab-case no JavaScript, isso não é uma boa prática porque o traço pode ser interpretado como um sinal de subtração. Use o estilo camelCase.
// Exemplos de escrita camelCase:
// nomeCompleto;
// cidadeNatal;
// tituloOriginal.
// Exemplos de escrita kebab-case:
// nome-completo;
// cidade-natal;
// titulo-original.

// Para fixar
// Agora vamos fazer alguns exercícios de fixação para consolidar os conhecimentos adquiridos no video anterior! 😉

// 1 - Crie um objeto player contendo as variáveis listadas abaixo.

// let name = 'Marta';
// let lastName = 'Silva';
// let age = 34;
// let medals = { golden: 2, silver: 3 };

// 2 - Acesse as chaves name, lastName e age e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".

// 3 - Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.

// [2006, 2007, 2008, 2009, 2010, 2018]

// 4 - Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".

// 5 - Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".
// Agora veremos uma variação do laço for, que nos garante facilidade ao lidar com objetos.


// FOR/IN FOR/OF

// Depois de conhecer o laço for/in, o código que mostra as marcas de carros presentes em um Array é:

// let cars = ['Saab', 'Volvo', 'BMW'];

// for (let index in cars) {
//   console.log(cars[index]);
// }

// Um outro exemplo é a iteração nas chaves de um objeto:

// let car = {
//   type: 'Fiat',
//   model: '500',
//   color: 'white',
// };

// for (let index in car) {
//   console.log(index, car[index]);
// }

// O resultado do código acima é:

// type Fiat
// model 500
// color white

// for/of
// O for/of tem uma aplicação bastante parecida com o que vimos agora no for/in, mas com uma diferença crucial.
// Como dito no vídeo, o for/in percorre as propriedades dos objetos que forem enumeráveis com base na ordem de inserção, e não nos valores das propriedades, ou seja, nos retorna o índice. Por exemplo, se tivermos um array com três strings dentro:

// let food = ['hamburguer', 'bife', 'acarajé'];

// As propriedades dos elementos do array serão os índices de cada posição, começando por zero. É por isso que os números retornados pelo console.log são 0, 1 e 2: as propriedades que correspondem ao índice de cada posição do array.



// for (let position in food) {
//   console.log(position);
// };
// //resultado: 0, 1, 2;

// Se percorrermos um objeto, também teremos o mesmo resultado. O for/in irá percorrer a propriedade declarada, e não o seu valor em si.
// Já o for/of percorre os elementos dos objetos iteráveis através dos seus respectivos valores, e não dos índices como o for/in. Vejamos o exemplo:

// let food = ['hamburguer', 'bife', 'acarajé'];
// for (let value of food) {
//   console.log(value);
// };
// //resultado: hamburguer, bife, acarajé;


// Para fixar
// No exemplo acima, utilizamos o for/of para percorrer o nosso iterável e nos retornar o valor dos índices.
// Agora que você já sabe a diferença entre eles e como usá-los, vamos praticar?
// 1 - Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.
// Copiar
// let names = {
//   person1: 'João',
//   person2: 'Maria',
//   person3: 'Jorge',
// };
// 2 - Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.
// Copiar
// let car = {
//   model: 'A3 Sedan',
//   manufacturer: 'Audi',
//   year: 2020
// };


// FUNÇÕES

// Sem função
// let nome = 'João';

// console.log('Bom dia, ' + nome);


// // Com função
// function bomDiaTryber(nome) {
//   console.log('Bom dia, ' + nome);
// }

// bomDiaTryber('João'); // Bom dia, João
// bomDiaTryber('Julia'); // Bom dia, Julia
// bomDiaTryber('Marcelo'); // Bom dia, Marcelo


// function bomDia() {
//   return 'Bom dia!';
// }

// console.log(bomDia()); // Bom dia!


// let status = 'deslogado';

// function logarDeslogar() {
//   if (status === 'deslogado') {
//     status = 'logado';
//   } else {
//     status = 'deslogado';
//   }
// }

// console.log(status); // deslogado

// logarDeslogar();
// console.log(status); // logado

// logarDeslogar();
// console.log(status); // deslogado

// console.log('O usuário está ' + status); // O usuário está deslogado



// // Com função
// function soma(a, b) {
//   return a + b;
// }

// console.log(soma(5, 2)); // 7


// function maiorNum(primeiroNum, segundoNum) {
//   if (primeiroNum > segundoNum) {
//     return primeiroNum + ' é maior que ' + segundoNum;
//   } else if (segundoNum > primeiroNum) {
//     return segundoNum + ' é maior que ' + primeiroNum;
//   } else {
//     return 'Os números são iguais';
//   }
// }

// console.log(maiorNum(10, 20)); // 20 é maior que 10
// console.log(maiorNum(2, -5)); // 2 é maior que -5
// console.log(maiorNum(1, 1)); // Os números são iguais



// ACADEMIA DE LÓGICA

// Exercício 1 - Crie uma função que calcule a área e o perímetro de um quadrilátero qualquer. Essa função deve receber dois parâmetros: base e altura e retornar um objeto no formato:

// { 
//     area: 0, 
//     perimetro: 0 
// }
// Fórmulas: perimetro = (2 * base) + (2 * altura) area = base * altura




// Exercício 2 - Crie uma função que, dado um array de números inteiros, retorne a quantidade de números pares e ímpares no formato:
// {
//     pares: 0, 
//     ímpares: 0 
// }  


// Exercício 3 - Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.

// // valor de teste: 'trybe' e 'be'
// // valor esperado no retorno da função: true
// verificaFimPalavra('trybe', 'be');  
// // Retorno esperado: true  
// verificaFimPalavra('joaofernando', 'fernan');  
// //  Retorno esperado: false;  

// Dica: Use o split.