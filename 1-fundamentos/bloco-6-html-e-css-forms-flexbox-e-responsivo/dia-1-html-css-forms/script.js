const BTN_SUBMIT = document.querySelector('#btn1');

window.onload = () => {
  BTN_SUBMIT.addEventListener('click', (e) => {
  e.preventDefault();
});
}