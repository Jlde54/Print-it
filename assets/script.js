const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

// ***********************************
// Ajout des listeners sur les flèches
// ***********************************
// Flèche gauche
// ************* 
// Récupération de l'élément .arrow_left
const arrowLeft = document.querySelector(".arrow_left");
// Ajout du listener
arrowLeft.addEventListener("Click", function () {
	// console.log pour tester le fonctionnement du listener
	console.log("Flèche gauche cliquée")
});

// Flèche droite
// ************* 
// Récupération de l'élément .arrow_right
const arrowRight = document.querySelector(".arrow_right");
// Ajout du listener
arrowRight.addEventListener("Click", function () {
	// console.log pour tester le fonctionnement du listener
	console.log("Flèche droite cliquée")
});

// *********************************
// Ajout des bullet points au slider
// *********************************
for (let i = 0; i < slides.lenght; i++) {
	// Récupération de l'élément .dots
	const divDots = document.querySelector(".dots");
	// Création de la balise <i>
	const bulletPoint = document.createElement("i");
	// Ajout des classes à la balise <i>
	bulletPoint.classList = "fa-regular fa-circle-small dot";
	// Rattachement de la balise <i> à l'élément .dots
	divDots.appendChild(bulletPoint);
};
