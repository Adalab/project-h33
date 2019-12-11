
const clickTheme1 = document.querySelector('#colorpalette1');
const clickTheme2 = document.querySelector('#colorpalette2');
const clickTheme3 = document.querySelector('#colorpalette3');
const clickTheme4 = document.querySelector('#colorpalette4');

const emailIcon = document.querySelector('.card__list--email');
const phoneIcon = document.querySelector('.card__list--phone');
const linkedinIcon = document.querySelector('.card__list--linkedin');
const githubIcon = document.querySelector('.card__list--github');

//sobre el que se ejecuta las funciones del localstorage
const formFill = document.querySelector('#form__fill');
const formDesing = document.querySelector('#form_desing');
//funcion que obtiene los values del form y los guarda en localStorage tiene que estar dentro de la funcion
function setData(){
//datos introducidos por el usuario en el formulario almacenados en variables para pasarlos a objeto
let nameValue = name.value;
let jobValue = position.value;
let emailValue = inputEmail.value;
let phoneValue = inputPhone.value;
let linkedinValue = inputLinkedin.value;
let githubValue = inputGit.value;
let photoValue = profileImage.style.backgroundImage;
let paletteValue = document.querySelector('.form-item:checked').value;

//creamos objeto con los values del form
const data = {
    name: nameValue,
    job: jobValue,
    email: emailValue,
    phone: phoneValue,
    linkedin: linkedinValue,
    github: githubValue,
    photoUrl: photoValue,
    palette: paletteValue

};
//al ser un objeto lo convertimos a una cadena de texto JSON para guardarlo en el local
localStorage.setItem('data', JSON.stringify(data));
}

//funcion que devuelve el objeto guardado en el localstorage y se la envia a showData para mostrarla
const getData = () => {
    const data = JSON.parse(localStorage.getItem('data'));
    showData(data);
}


//al refrescar la pagina los datos nos vienen del local y deben aparecer pintados en su correspondiente lugar
const showData = (data) =>{
    if(data){
        //asignamos los datos guardados al formulario
        name.value = data.name;
        position.value = data.job;
        inputEmail.value = data.email;
        inputPhone.value = data.phone;
        inputLinkedin.value = data.linkedin;
        inputGit.value = data.github;
        profileImage.style.backgroundImage = data.photoUrl;
        profilePreview.style.backgroundImage = data.photoUrl;
        //paletteValue = data.palette;
        //console.log(paletteValue);
        //pintamos los datos en los radios buttons y en la paleta
        let palette = parseInt(data.palette);
        //console.log(palette);
        card.classList.remove('clickTheme1', 'clickTheme2', 'clickTheme3', 'clickTheme4');
        if(palette===4){
            colorpalette[0].checked = true;
        }else if(palette===1){
            colorpalette[1].checked = true;
        }else if(palette===2){
            colorpalette[2].checked = true;
        }else{
            colorpalette[3].checked = true;
        }
        changeColor();

        
        //pintamos los datos en la tarjeta
        data.name === '' ? cardName.innerHTML = 'Nombre Apellido' : cardName.innerHTML = data.name;
        data.job === '' ? cardPosition.innerHTML = 'Front end developer' : cardPosition.innerHTML = data.job;
        data.phone === '' ? (
            phoneLink.href = '')
        : (
            phoneLink.href = `tel:${data.phone}`,
            phoneIcon.classList.remove('hidden')
        );
        data.email === '' ? ( 
            emailLink.href = '')
        : ( 
            emailLink.href = `mailto:${data.email}`,
            emailIcon.classList.remove('hidden')
        );
        data.linkedin === '' ? (
            linkedinLink.href = '')
        : (
            linkedinLink.href = `http://www.linkedin.com/in/${data.linkedin}`,
            linkedinIcon.classList.remove('hidden')
        );
        data.github === '' ? ( 
            githubLink.href = '')
        : (
            githubLink.href = `https://www.github.com/${data.github}`,
            githubIcon.classList.remove('hidden')
        );
    };
}


//evento que guarda en localstorage los inputs del formulario al pulsar las teclas
//ahora el value de los radio se guarda cuando se pulsa las teclas al escribir en los inputs
formFill.addEventListener('keyup', setData);
formDesing.addEventListener('change', setData);
//evento que se ejecuta al cargar la página y llama a la función que devuelve y pinta los values guardados en localStorage
window.addEventListener('load', getData);





