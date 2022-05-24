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

//EXERCICIO 3

const colorInOut = (normalColor, white) => {
  const getHolidayButton = document.querySelector('#btn-holiday');
  const getHolidays = document.querySelectorAll('.holiday');
  // const normalColor = 'rgb(238,238,238)';
  // const white = 'white';

  getHolidayButton.addEventListener('click', function() {
    for (let change in holiday) {
      let caminho = getHolidays[change].style;
      if (caminho.backgroundColor === white) {
        caminho.backgroundColor = normalColor;
      } else {
        caminho.backgroundColor = white;
      }
    }
  })
};

colorInOut('rgb(238,238,238)', 'white');


//EXERCICIO 4

const itsFriday = (friday) => {
  let sextou = document.createElement('button');
  sextou.id = 'btn-friday';
  sextou.innerHTML = friday;
  div.appendChild(sextou);
}

itsFriday('Sexta-feira');

//EXERCICIO 5

const changeText = (toFriday) => {
  const getFridayButton = document.querySelector('#btn-friday');
  const getFridays = document.querySelectorAll('.friday');
  // const fridays = 'Sexta-feira;'

  getFridayButton.addEventListener('click', function() {
    for (let change in friday) {
      if (getFridays[change].innerText === toFriday) {
        getFridays[change].innerText = friday[change];
      } else {
        getFridays[change].innerText = toFriday;
      }
    }
  })
};

changeText('Sexta-feira');

// EXERCICIO 6

const zoomIn = () => {
  let daysAcess = document.querySelector('#days');

  daysAcess.addEventListener('mouseover', (event) => {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  })
};

const zoomOut = () => {
  let daysAcess = document.querySelector('#days');

  daysAcess.addEventListener('mouseout', (event) => {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200';
  })
};

zoomIn();

zoomOut();

// EXERCICIO 7