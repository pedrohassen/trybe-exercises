function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

//EXERCICIO 1

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

const holiday = [24, 25, 31];
const friday = [4, 11, 18, 25];

let acessUl = document.querySelector('#days');

for (let index of dezDaysList) {
  let itensLista = document.createElement('li');
  itensLista.className = 'day';
  for (let feriado of holiday) {
    if (feriado === index) {
      itensLista.classList.add('holiday');
      itensLista.innerText = feriado;
      acessUl.appendChild(itensLista);
  }
  for (let sexta of friday) {
    if (index === sexta) {
      itensLista.classList.add('friday');
      itensLista.innerText = sexta;
      acessUl.appendChild(itensLista);
  }
}  
    acessUl.appendChild(itensLista);
    itensLista.innerText = index;
  }
}

//EXERCICIO 2

let div = document.querySelectorAll('div')[2];
const btnHolidays = (Feriados) => {
  let botaoFeriados = document.createElement('button');
  botaoFeriados.id = 'btn-holiday';
  botaoFeriados.innerText = Feriados;
  div.appendChild(botaoFeriados);
}

btnHolidays('Feriados');