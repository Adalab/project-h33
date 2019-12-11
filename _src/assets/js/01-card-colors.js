'use strict';
//Función para cambiar los colores de la tarjeta
const card = document.querySelector('.card__box');
let colorpalette = document.getElementsByName('palette');
card.classList.add('theme-colors4');
colorpalette[0].checked = true;
//Función para cambiar los colores de la tarjeta
function changeColor() {
  for(let i = 0; i <= 4; i++){
    if(colorpalette[0].checked){
      card.classList.add('theme-colors4');
      card.classList.remove('theme-colors2');
      card.classList.remove('theme-colors3');
      card.classList.remove('theme-colors1');
    } else if(colorpalette[1].checked){
      card.classList.add('theme-colors1');
      card.classList.remove('theme-colors2');
      card.classList.remove('theme-colors3');
      card.classList.remove('theme-colors4');
    } else if(colorpalette[2].checked){
      card.classList.add('theme-colors2');
      card.classList.remove('theme-colors1');
      card.classList.remove('theme-colors3');
      card.classList.remove('theme-colors4');
    } else  if(colorpalette[3].checked){
      card.classList.add('theme-colors3');
      card.classList.remove('theme-colors2');
      card.classList.remove('theme-colors1');
      card.classList.remove('theme-colors4');
    }
  }
}
document.addEventListener('click', changeColor);


