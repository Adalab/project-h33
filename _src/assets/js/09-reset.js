//'use strict';

const resetButton = document.querySelector('.card__reset');
const cardPhoto = document.querySelector('.card__photo');
const createLink = document.querySelector('.form__create-link');
const cardUrl = './assets/images/imelda.png';

//Función reset que vacía localstorage y devuelve la página a su estado inicial

function reset() {
  console.log('función reset');
  cardName.innerHTML = 'Nombre Apellido';
  cardPosition.innerHTML = 'Front end developer';
  emailIcon.classList.add('hidden');
  phoneIcon.classList.add('hidden');
  linkedinIcon.classList.add('hidden');
  githubIcon.classList.add('hidden');
  card.classList.remove('theme-colors2');
  card.classList.remove('theme-colors3');
  card.classList.remove('theme-colors1');
  card.classList.add('theme-colors4');
  inputEmail.value = '';
  inputPhone.value = '';
  inputLinkedin.value = '';
  inputGit.value = '';
  name.value = '';
  position.value = '';
  clickTheme4.checked = true;
  clickTheme1.checked = false;
  clickTheme2.checked = false;
  clickTheme3.checked = false;
  localStorage.removeItem('data');
  profileImage.style.backgroundImage = `url(${cardUrl})`;
  profilePreview.style.backgroundImage = `url(${cardUrl})`;
  shareFormLink.innerHTML='';
  createLink.classList.add('hidden');
  shareButton.setAttribute('disabled', 'false');
  shareButton.classList.remove('disabled');
}

resetButton.addEventListener('click', reset);