const {generateIds, newEmployees} = require('./pratica');

describe('Testa newEmployees', () => {
  test(`função newEmployees, se for chamada com um parâmetro referenciando a função generateIds, retorna um objeto com chaves name e email e seus devidos valores, gerados na função generateIds, que deve ser passada com um parâmetro referenciando o nome da pessoa, cujo Id deve ser criado`, () => {
    expect(newEmployees(generateIds)).toEqual({
      id1: { name: 'Pedro Guerra', email: 'pedro_guerra@email.com.br' },
      id2: { name: 'Luiza Drumond', email: 'luiza_drumond@email.com.br' },
      id3: { name: 'Carla Paiva', email: 'carla_paiva@email.com.br' }
    })
  })
})
