"use strict";const card=document.querySelector(".card__box");let colorpalette=document.getElementsByName("palette");function changeColor(){for(let e=0;e<=4;e++)colorpalette[0].checked?(card.classList.add("theme-colors4"),card.classList.remove("theme-colors2"),card.classList.remove("theme-colors3"),card.classList.remove("theme-colors1")):colorpalette[1].checked?(card.classList.add("theme-colors1"),card.classList.remove("theme-colors2"),card.classList.remove("theme-colors3"),card.classList.remove("theme-colors4")):colorpalette[2].checked?(card.classList.add("theme-colors2"),card.classList.remove("theme-colors1"),card.classList.remove("theme-colors3"),card.classList.remove("theme-colors4")):colorpalette[3].checked&&(card.classList.add("theme-colors3"),card.classList.remove("theme-colors2"),card.classList.remove("theme-colors1"),card.classList.remove("theme-colors4"))}card.classList.add("theme-colors4"),colorpalette[0].checked=!0,document.addEventListener("click",changeColor);const name=document.querySelector("#name"),position=document.querySelector("#position"),cardName=document.querySelector(".card__name"),cardPosition=document.querySelector(".card__job-title");function changeCardName(){console.log("llamando a changeCardText"),0===name.value.length?(cardName.innerHTML="Nombre Apellido",console.log("funciona")):cardName.innerHTML=name.value}function changeCardPosition(){0===position.value.length?(cardPosition.innerHTML="Front end developer",console.log("funciona")):cardPosition.innerHTML=position.value}name.addEventListener("keyup",changeCardName),position.addEventListener("keyup",changeCardPosition);const inputEmail=document.querySelector("#email"),inputPhone=document.querySelector("#phone"),inputLinkedin=document.querySelector("#linkedin"),inputGit=document.querySelector("#git"),emailLink=document.querySelector(".card__list--icon-mail"),phoneLink=document.querySelector(".card__list--icon-phone"),linkedinLink=document.querySelector(".card__list--icon-linkedin"),githubLink=document.querySelector(".card__list--icon-github");function showIconMail(){inputEmail.value.length>0?(emailIcon.classList.remove("hidden"),emailLink.href=`mailto:${inputEmail.value}`):emailIcon.classList.add("hidden")}function showIconPhone(){inputPhone.value.length>0?(phoneIcon.classList.remove("hidden"),phoneLink.href=`tel:${phoneValue}`):phoneIcon.classList.add("hidden")}function showIconLinkedin(){inputLinkedin.value.length>0?(linkedinIcon.classList.remove("hidden"),linkedinLink.href=`http://www.linkedin.com/in/${inputLinkedin.value}`):linkedinIcon.classList.add("hidden")}function showIconGit(){inputGit.value.length>0?(githubIcon.classList.remove("hidden"),githubLink.href=`https://www.github.com/${inputGit.value}`):githubIcon.classList.add("hidden")}inputEmail.addEventListener("keyup",showIconMail),inputPhone.addEventListener("keyup",showIconPhone),inputLinkedin.addEventListener("keyup",showIconLinkedin),inputGit.addEventListener("keyup",showIconGit);const nameValue=name.value,jobValue=position.value,emailValue=inputEmail.value,phoneValue=inputPhone.value,linkedinValue=inputLinkedin.value,githubValue=inputGit.value,paletteValue=colorpalette.value,collapsibles=document.querySelectorAll(".collapsible-header"),arrowElement=document.querySelectorAll(".click-arrow"),openCollapsable=e=>{const t=e.currentTarget.parentElement;for(let e=0;e<collapsibles.length;e++){const o=collapsibles[e].parentElement;t===o?(t.classList.toggle("collapsible"),arrowElement[e].classList.toggle("animate")):(o.classList.add("collapsible"),arrowElement[e].classList.remove("animate"))}};for(let e=0;e<collapsibles.length;e++)collapsibles[e].addEventListener("click",openCollapsable);const fr=new FileReader,uploadBtn=document.querySelector(".js__profile-trigger"),fileField=document.querySelector(".js__profile-upload-btn"),profileImage=document.querySelector(".js__profile-image"),profilePreview=document.querySelector(".js__profile-preview");function getImage(e){var t=e.currentTarget.files[0];fr.addEventListener("load",writeImage),fr.readAsDataURL(t)}function writeImage(){profileImage.style.backgroundImage=`url(${fr.result})`,profilePreview.style.backgroundImage=`url(${fr.result})`}function fakeFileClick(){fileField.click()}uploadBtn.addEventListener("click",fakeFileClick),fileField.addEventListener("change",getImage);const shareButton=document.querySelector("#share_btn"),shareForm=document.querySelector("#share-div"),elementError=document.querySelector(".errorMessage"),elementInputs=document.querySelectorAll("input"),label=document.querySelector("label"),shareFormLink=document.querySelector(".share__create-card");function ValidateEmail(){return!!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputEmail.value)}const validation=()=>{let e=!1;for(let t of elementInputs)console.log(t),console.log(""===t.value),console.log(""!==t.pattern),""===t.value&&""!==inputPhone.value&&(e=!0,t.classList.remove("able"),t.classList.add("error"));return!e},sendInfo=()=>{const e=fr.result;console.log(e);const t=document.querySelector('input[name="palette"]:checked');console.log(t);const o={palette:t.value,name:name.value,job:position.value,phone:inputPhone.value,email:inputEmail.value,linkedin:inputLinkedin.value,github:inputGit.value,photo:e};if(!1===validation())elementError.innerHTML="*Rellene todos los campos obligatorios.";else if(!1===ValidateEmail())elementError.innerHTML="*Ingrese un correo válido.";else{elementError.innerHTML="",shareButton.classList.add("disabled"),shareButton.setAttribute("disabled","true"),shareForm.classList.remove("hidden");for(let e of elementInputs)""!==e.value&&(e.classList.remove("error"),e.classList.add("able"));fetch("https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/",{method:"POST",body:JSON.stringify(o),headers:{"content-type":"application/json"}}).then(e=>e.json()).then(e=>showUrlUser(e)).catch(function(e){console.log(e)})}};function showUrlUser(e){const t=document.createElement("a");e.success?(shareForm.classList.remove("hidden"),t.setAttribute("href",`${e.cardURL}`),t.classList.add("share__create-card--link"),t.setAttribute("target","_blank"),t.innerHTML=`${e.cardURL}`,shareFormLink.appendChild(t),shareTwitter(e.cardURL)):e.error.innerHTML=""}function shareTwitter(e){const t=`https://twitter.com/intent/tweet?text=${encodeURIComponent("He creado está tarjeta con CocoLab Awesome Profile Cards. ¿Qué te parece?")}&url=${e}&hashtags=${encodeURIComponent("adalab, adalaber, frontend, awesomeCards, CocoLab, promocionHamilton, CocoLabCard")}`;document.querySelector(".share__create-card--twitter").href=t}shareButton.addEventListener("click",sendInfo);const clickTheme1=document.querySelector("#colorpalette1"),clickTheme2=document.querySelector("#colorpalette2"),clickTheme3=document.querySelector("#colorpalette3"),clickTheme4=document.querySelector("#colorpalette4"),emailIcon=document.querySelector(".card__list--email"),phoneIcon=document.querySelector(".card__list--phone"),linkedinIcon=document.querySelector(".card__list--linkedin"),githubIcon=document.querySelector(".card__list--github"),formFill=document.querySelector("#form__fill"),formDesing=document.querySelector("#form_desing");function setData(){const e={name:name.value,job:position.value,email:inputEmail.value,phone:inputPhone.value,linkedin:inputLinkedin.value,github:inputGit.value,photoUrl:profileImage.style.backgroundImage,palette:document.querySelector(".form-item:checked").value};localStorage.setItem("data",JSON.stringify(e))}const getData=()=>{const e=JSON.parse(localStorage.getItem("data"));showData(e)},showData=e=>{if(e){name.value=e.name,position.value=e.job,inputEmail.value=e.email,inputPhone.value=e.phone,inputLinkedin.value=e.linkedin,inputGit.value=e.github,profileImage.style.backgroundImage=e.photoUrl,profilePreview.style.backgroundImage=e.photoUrl;let t=parseInt(e.palette);card.classList.remove("clickTheme1","clickTheme2","clickTheme3","clickTheme4"),4===t?colorpalette[0].checked=!0:1===t?colorpalette[1].checked=!0:2===t?colorpalette[2].checked=!0:colorpalette[3].checked=!0,changeColor(),""===e.name?cardName.innerHTML="Nombre Apellido":cardName.innerHTML=e.name,""===e.job?cardPosition.innerHTML="Front end developer":cardPosition.innerHTML=e.job,""===e.phone?phoneLink.href="":(phoneLink.href=`tel:${e.phone}`,phoneIcon.classList.remove("hidden")),""===e.email?emailLink.href="":(emailLink.href=`mailto:${e.email}`,emailIcon.classList.remove("hidden")),""===e.linkedin?linkedinLink.href="":(linkedinLink.href=`http://www.linkedin.com/in/${e.linkedin}`,linkedinIcon.classList.remove("hidden")),""===e.github?githubLink.href="":(githubLink.href=`https://www.github.com/${e.github}`,githubIcon.classList.remove("hidden"))}};formFill.addEventListener("keyup",setData),formDesing.addEventListener("change",setData),window.addEventListener("load",getData);const resetButton=document.querySelector(".card__reset"),cardPhoto=document.querySelector(".card__photo"),createLink=document.querySelector(".form__create-link"),cardUrl="./assets/images/imelda.png";function reset(){console.log("función reset"),cardName.innerHTML="Nombre Apellido",cardPosition.innerHTML="Front end developer",emailIcon.classList.add("hidden"),phoneIcon.classList.add("hidden"),linkedinIcon.classList.add("hidden"),githubIcon.classList.add("hidden"),card.classList.remove("theme-colors2"),card.classList.remove("theme-colors3"),card.classList.remove("theme-colors1"),card.classList.add("theme-colors4"),inputEmail.value="",inputPhone.value="",inputLinkedin.value="",inputGit.value="",name.value="",position.value="",clickTheme4.checked=!0,clickTheme1.checked=!1,clickTheme2.checked=!1,clickTheme3.checked=!1,localStorage.removeItem("data"),profileImage.style.backgroundImage=`url(${cardUrl})`,profilePreview.style.backgroundImage=`url(${cardUrl})`,shareFormLink.innerHTML="",createLink.classList.add("hidden"),shareButton.setAttribute("disabled","false"),shareButton.classList.remove("disabled")}resetButton.addEventListener("click",reset);