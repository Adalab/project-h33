'use strict';

const name = document.querySelector('#name');
const position = document.querySelector('#position');
const cardName = document.querySelector('.card__name');
const cardPosition = document.querySelector('.card__job-title');

//Función para que al introducir los datos en los campos de nombre y trabajo, aparezcan en la tarjeta.
function changeCardName() {
  console.log('llamando a changeCardText');
  if (name.value.length === 0) {
    cardName.innerHTML = 'Nombre Apellido';
    console.log('funciona');
  } else {
    cardName.innerHTML = name.value;
  }
}
function changeCardPosition() {
  if (position.value.length === 0) {
    cardPosition.innerHTML = 'Front end developer';
    console.log('funciona');
  } else {
    cardPosition.innerHTML = position.value;
  }
}

name.addEventListener('keyup', changeCardName);
position.addEventListener('keyup', changeCardPosition);

//Añadir los enlaces a los iconos y mostrarlos en el card preview

const inputEmail = document.querySelector('#email');
const inputPhone = document.querySelector('#phone');
const inputLinkedin = document.querySelector('#linkedin');
const inputGit = document.querySelector('#git');

const emailLink = document.querySelector('.card__list--icon-mail');
const phoneLink = document.querySelector('.card__list--icon-phone');
const linkedinLink = document.querySelector('.card__list--icon-linkedin');
const githubLink = document.querySelector('.card__list--icon-github');

function showIconMail() {
  if (inputEmail.value.length > 0) {
    emailIcon.classList.remove('hidden');
    emailLink.href = `mailto:${inputEmail.value}`;
  }else{
    emailIcon.classList.add('hidden');
  }
}
function showIconPhone() {
  if (inputPhone.value.length > 0) {
    phoneIcon.classList.remove('hidden');
    phoneLink.href = `tel:${phoneValue}`;
  }else{
    phoneIcon.classList.add('hidden');
  }
}
function showIconLinkedin() {
  if (inputLinkedin.value.length > 0) {
    linkedinIcon.classList.remove('hidden');
    linkedinLink.href = `http://www.linkedin.com/in/${inputLinkedin.value}`;
  }else{
    linkedinIcon.classList.add('hidden');
  }
}
function showIconGit() {
  if (inputGit.value.length > 0) {
    githubIcon.classList.remove('hidden');
    githubLink.href = `https://www.github.com/${inputGit.value}`;
  }else{
    githubIcon.classList.add('hidden');
  }
}

inputEmail.addEventListener('keyup', showIconMail);
inputPhone.addEventListener('keyup', showIconPhone);
inputLinkedin.addEventListener('keyup', showIconLinkedin);
inputGit.addEventListener('keyup', showIconGit);