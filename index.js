const buttons = document.querySelectorAll("button");
const ecran = document.querySelector('#ecran');
buttons.forEach((button) =>{
    button.addEventListener('click', e=> {
            ecran.textContent += button.textContent;
      });
})
