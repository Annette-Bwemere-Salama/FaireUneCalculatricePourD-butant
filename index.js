console.log('hello_Annette Bwemere');
//DOM
//comment récupérer les valeur au click ou à l'appui sur une touche? => on allons devoir etudier un evenement dans JS appélée "KEYDOWN EVENT" En bref c'est un événement qui se declanche lorque l'on appuit sur une touche et à ne pas oublier que chaque touche possede son keyCode.
//pour recuperer un élement se trouvant dans l'attribut data en java script il suffit de prendre element.dataset.nomDuDataset
const marque = [... document.querySelectorAll('.bouton')];
const listeabscode = marque.map(touche => touche.dataset.abs); // la fonction map()prend chaque éléement d'un tableau, fait quelque chose à cet élément(fonction callback) et retourne le resultat sous forme d'un nouveaux tableaux dans la variable nouveau Tab
const visionage = document.querySelector('.visionage');
//recuperation de la div ecran du DOM ci-haut . 
//Touche 6 : keycode 102

document.addEventListener('keydown',(e) => {
  const valeur = e.abscode.toString();
  calculer(valeur)
  
})

document.addEventListener('click',(e) => {
    const valeur = e.target.dataset.key;
    calculer(valeur)
})

const calculer = (valeur) => {
    if(listeKeycode.includes(valeur)){
        switch (valeur){
            case '8':
                // 1 ere cas de figure avec la touche supprimer nous prenons le Contenue de l'ecran = une phrase vide
        ecran.textContent = "";
             break
            case '13':
                // 2éme cas de figure en apuiyant sur la touche entrer avec le variable creer on calcul le contenu de l'ecran pour dire faire l'évaluation
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul;
                break;
               default:
                   // ici on fait la recuperation de l'index du key code 
                  const indexabscode = listeKeycode.indexOf(valeur);
                  const marque = marque[indexabscode];
                  // determination de la touche appuiyer
                  ecran-textContent +- touche.innerHTML;
                  //ci haut on affiche la valeur à l'écran de la touche configurer en html
               
                
        }
    }
}
// ci dessous pour prevenir quand l'utilisateur à ecris une erreur :pour la gestion des erreur => element window: event error.
window.addEventListener('error'), (e) => {
    alert('Une erreur est survenue dans votre calcule : + (e).message');
}






