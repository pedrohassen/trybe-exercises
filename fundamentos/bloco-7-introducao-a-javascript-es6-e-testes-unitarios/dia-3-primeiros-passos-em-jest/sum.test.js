// sum.test.js

// 1 - A função sum(a, b) retorna a soma do parâmetro a com o b
// Teste se o retorno de sum(4, 5) é 9
// Teste se o retorno de sum(0, 0) é 0
// Teste se a função sum lança um erro quando os parâmetros são 4 e "5"(string 5)
// Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")

const sum = require('./sum.js');

describe('testa a função sum', () => {

  test('deve retornar o resultado da soma', () => {
    expect(sum(4,5)).toBe(9);
    expect(sum(0,0)).toEqual(0);
  })

  test('deve disparar um erro caso receba como parâmetro uma string', () => {
    expect(() => sum(4,'5')).toThrowError();
    expect(() => sum(4,'5')).toThrowError('parameters must be numbers');
  })
})

// 2 - A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array
// Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
// Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
// Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
