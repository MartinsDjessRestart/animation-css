// selection du paragraphe
const btn = document.querySelector('.para');

// Sélection de tous les paragraphes pour faire une boucle et les modifier 
const paras = document.querySelectorAll('.para');

// Ecoute du click sur le boutton 
btn.addEventListener('click', function() {
	// application du transition de couleur lorsqu'on appuit sur le boutton
	btn.style.backgroundColor = 'rgb(0, 158, 124)';

	// changement de la couleur de transion en une couleur finale grâce à un delai
	setTimeout(function() {
    // creation d'une boucle à i=0 qui parcourt toute la constante paras 
		for (let i = 0; i < paras.length; i++) {
			// changement du texte, dans l'html initiale du paragraphe en un nouveau texte pour indiquer que le changement à eu lieu
			paras[i].innerHTML = 'Couleur de fond modifiée !';
			// application de la couleur du fond final
			paras[i].style.backgroundColor = 'rgb(6, 72, 58)';
		}
  // delai de la transition de couleur en millisecondes
	}, 950);
});

// Reinitialisation de l'animation
// selection de l' id boutton
const resetBtn = document.getElementById("btn");
resetBtn.addEventListener('click', function() {
  for (let i = 0; i < paras.length; i++) {
    // réinitialisation de la couleur de base
    paras[i].style.backgroundColor = '';
    // Réinitialisation du texte de base
    paras[i].innerHTML = 'Cliquez ici pour changer la couleur de fond !';
  }
});














  
  
