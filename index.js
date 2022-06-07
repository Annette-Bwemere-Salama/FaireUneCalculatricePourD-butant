//console.log('hello_Annette Bwemere');
const touches = [... document.querySelectorAll('.bouton')];
const listeKeycode = touches.map(touches => touches.dataset.key);
console.log(listeKeycode);