console.log('hello_Annette Bwemere');
const touches = [... document.querySelectorAll('.bouton')];
const listeKeycode = touches.map(touches => touche.dataset.key);
//Touche 6 : keycode 102

document.addEventListener('keydown',(e) => {
  const valeur = e.keycode.toString();
  calculer(valeur)
  
})

document.addEventListener('click',(e) => {
    const valeur = e.target.dataset.key;
    calculer(valeur)
})

const calculer = (valeur) =>{
    if(listeKeycode.includes(valeur)){
        switch (valeur){
            case '8':
        ecran,textContent = "";
             break
            case '13':
                const calcul = aval(ecran.textContent);
                ecran.textContent = calcul;

        }
    }
}





