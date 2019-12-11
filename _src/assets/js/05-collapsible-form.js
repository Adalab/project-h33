'use strict';

//Creamos la función handler genérica
//Seleccionamos de manera global los tres collapsables
const collapsibles = document.querySelectorAll('.collapsible-header');
const arrowElement = document.querySelectorAll('.click-arrow');
const openCollapsable = (event) => {
  //guardamos en una variable el padre donde ocurre el evento
  const selectedCollapsable = event.currentTarget.parentElement;
  //recorremos todos los collapsables
  for (let i = 0; i < collapsibles.length; i++) {
    //recogemos el padre del collapsable activo en el bucle
    const parentElement = collapsibles[i].parentElement;
    //si el padre activo en el bucle coincide con el padre del evento
    if (selectedCollapsable === parentElement) {
      //si está abierto se cierra y si no se abre
      selectedCollapsable.classList.toggle('collapsible');
      arrowElement[i].classList.toggle('animate');

    } else {
      //si no coincide se cierra
      parentElement.classList.add('collapsible');
      arrowElement[i].classList.remove('animate');
    }
  }
};
for (let i = 0; i < collapsibles.length; i++) {
  collapsibles[i].addEventListener('click', openCollapsable);
}
