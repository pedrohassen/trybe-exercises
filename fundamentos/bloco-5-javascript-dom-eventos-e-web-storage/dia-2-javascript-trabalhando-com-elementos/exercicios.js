// PARTE 1:
// 1. 🚀 Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;

const elementH1 = document.createElement('h1');
elementH1.innerText = 'Exercicio 5.2 - Javascript DOM';
document.body.appendChild(elementH1);

// 2. 🚀 Adicione a tag main com a classe main-content como filho da tag body;

const elementMain = document.createElement('main');
elementMain.className = 'main-content';
document.body.appendChild(elementMain);

// 3. 🚀 Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;

const elementSection = document.createElement('section');
elementSection.className = 'center-content';
elementMain.appendChild(elementSection);

// 4. 🚀 Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;

const elementP = document.createElement('p');
elementP.innerText = 'Fique perplecto com essas imagens que mudam a cada F5!';
elementSection.appendChild(elementP);

// 5. 🚀 Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;

const elementLeftSection = document.createElement('section');
elementLeftSection.className = 'left-content';
elementMain.appendChild(elementLeftSection);

// 6. 🚀 Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;

const elementRightSection = document.createElement('section');
elementRightSection.className = 'right-content';
elementMain.appendChild(elementRightSection);

// 7. 🚀 Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;

const elementImg = document.createElement('img');
elementImg.src = 'https://picsum.photos/200';
elementImg.className = 'small-image';
elementLeftSection.appendChild(elementImg);

// 8. 🚀 Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;

const elementUl = document.createElement('ul');
elementRightSection.appendChild(elementUl);
const fromOneToTen = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez'];
for (let numbers in fromOneToTen) {
  const elementLi = document.createElement('li');
  elementLi.innerHTML = fromOneToTen[numbers];
  elementUl.appendChild(elementLi);
}

// 9. 🚀 Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.

for (let index = 1; index <= 3; index += 1) {
const elementH3 = document.createElement('h3');
elementH3.innerHTML = 'Eu prometo não olhar o gabarito toda hora';
elementMain.appendChild(elementH3);
}

// PARTE 2:
// 1. 🚀 Adicione a classe title na tag h1 criada;

const classH1 = document.querySelector('h1');
classH1.className = 'title';

// 2. 🚀 Adicione a classe description nas 3 tags h3 criadas;

const classH3 = document.getElementsByTagName('h3');
for (let index = 0; index < 3; index += 1) {
  classH3[index].className = 'description';
}

// 3. 🚀 Remova a section criada no passo 5 (aquele que possui a classe left-content). Utilize a função .removeChild();

const removeLeftSection = document.getElementsByClassName('left-content')[0];
elementMain.removeChild(removeLeftSection);

// 4. 🚀 Centralize a section criado no passo 6 (aquele que possui a classe right-content). Dica: para centralizar, basta configurar o margin-right: auto da section;

const centerRightSection = document.getElementsByClassName('right-content')[0];
centerRightSection.style.marginRight='auto';

// 5. 🚀 Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content) para a cor verde;

const changeSectionToGreen = document.getElementsByClassName('center-content')[0];
elementSection.parentNode.style.backgroundColor = 'green';

// 6. 🚀 Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.

elementUl.lastChild.remove();
elementUl.lastChild.remove();