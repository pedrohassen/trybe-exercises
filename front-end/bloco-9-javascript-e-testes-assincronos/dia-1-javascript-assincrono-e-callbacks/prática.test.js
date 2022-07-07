const uppercase = require('./prática');

// 7 - Escreva um teste que verifique a chamada da callback de uma função uppercase, que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.

describe('Testes da função uppercase', () => {
  it('Verifica se a função uppercase existe', () => {
    expect(typeof uppercase).toBe('function');
  })
  it('Testando se uppercase transforma as letras de uma palavra em letras maiúsculas', (done) => {
    uppercase('test', (result) => {
      try {
        expect(result).toBe('TEST');
        done();
      } catch (error) {
        done(error);
      }
    })
  });
})