'use strict';

//boton crear tarjeta
const shareButton = document.querySelector('#share_btn');
const shareForm = document.querySelector('#share-div');
const elementError = document.querySelector('.errorMessage');
const elementInputs = document.querySelectorAll('input');
const label = document.querySelector('label');
const shareFormLink = document.querySelector('.share__create-card');

function ValidateEmail() {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputEmail.value)) {
    return (true);
  }
  return (false);
}

const validation = () => {

  let hasErrors = false;
  for (let input of elementInputs) {
    console.log(input);
    console.log(input.value === "")
    console.log(input.pattern !== '')
    if (input.value === "" && inputPhone.value !== '') {

      hasErrors = true;
      input.classList.remove('able');
      input.classList.add('error');
    }
  };
  return !hasErrors;
};

const sendInfo = () => {

  const sendPhoto = fr.result;
  console.log(sendPhoto);
  const finalPalette = document.querySelector(('input[name="palette"]:checked'));
  console.log(finalPalette)
  const userData = {
    "palette": finalPalette.value,
    "name": name.value,
    "job": position.value,
    "phone": inputPhone.value,
    "email": inputEmail.value,
    "linkedin": inputLinkedin.value,
    "github": inputGit.value,
    "photo": sendPhoto
  };

  if (validation() === false) {
    elementError.innerHTML = '*Rellene todos los campos obligatorios.';
  } else if (ValidateEmail() === false) {
    elementError.innerHTML = '*Ingrese un correo válido.';
  } else {
    elementError.innerHTML = '';
    shareButton.classList.add('disabled');
    shareButton.setAttribute('disabled', 'true');
    shareForm.classList.remove('hidden');
    for (let input of elementInputs) {
      if (input.value !== '') {
        input.classList.remove('error');
        input.classList.add('able');
      }
    }

    fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        'content-type': 'application/json'
      },
    })
      .then(response => response.json())
      .then(data => showUrlUser(data))
      .catch(function (error) { console.log(error) })
  }
}

function showUrlUser(data) {

  const elementLink = document.createElement('a');

  if (data.success) {
    shareForm.classList.remove('hidden')
    elementLink.setAttribute('href', `${data.cardURL}`);
    elementLink.classList.add('share__create-card--link');
    elementLink.setAttribute('target', '_blank');
    elementLink.innerHTML = `${data.cardURL}`;
    shareFormLink.appendChild(elementLink);
    shareTwitter(data.cardURL);
  } else {
    data.error.innerHTML = '';
  }

};

function shareTwitter(cardURL) {
  const urlTwitter = encodeURIComponent('He creado está tarjeta con CocoLab Awesome Profile Cards. ¿Qué te parece?');
  const hastagTwitter = encodeURIComponent('adalab, adalaber, frontend, awesomeCards, CocoLab, promocionHamilton, CocoLabCard');
  const urlResult = `https://twitter.com/intent/tweet?text=${urlTwitter}&url=${cardURL}&hashtags=${hastagTwitter}`;
  document.querySelector('.share__create-card--twitter').href = urlResult;
}


shareButton.addEventListener('click', sendInfo);
