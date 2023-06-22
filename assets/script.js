let currentSlideIndex = 0;
const divDots = document.querySelector(".dots");
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

// Flèche gauche
// ************* 
const arrowLeft = document.querySelector(".arrow_left");
arrowLeft.addEventListener("click", goToPreviousSlide);

// Flèche droite
// ************* 
const arrowRight = document.querySelector(".arrow_right");
arrowRight.addEventListener("click", goToNextSlide);

// Ajout des bullet points au slider
// *********************************
for (let i = 0; i < slides.length; i++) {
	const bulletPoint = document.createElement("i");
	bulletPoint.classList = "fa-regular fa-circle-small dot";
	if (i == 0) {
		bulletPoint.classList.add("dot_selected")
	};
	divDots.appendChild(bulletPoint);
};

// Fonctions
//**********
function displayImage(currentSlideIndex) {
	// changer le bullet point actif
	resetAllDots()
	const bullets = divDots.querySelectorAll('.dot')
	const bullet = bullets[currentSlideIndex]
	bullet.classList.add('dot_selected')
	//changer l'image
	const bannerImg = document.querySelector(".banner-img")
	bannerImg.src = "./assets/images/slideshow/" + slides[currentSlideIndex].image
	//changer le texte correspondant à l'image
	const bannerP = document.querySelector("#banner p")
	bannerP.innerHTML = slides[currentSlideIndex].tagLine
};

function goToNextSlide() {
	console.log("Flèche droite cliquée")
	currentSlideIndex = currentSlideIndex + 1
	if (currentSlideIndex >= slides.length) {
		currentSlideIndex = 0
	};
	displayImage(currentSlideIndex)
};

function goToPreviousSlide() {
	console.log("Flèche gauche cliquée")
	currentSlideIndex = currentSlideIndex - 1
	if (currentSlideIndex < 0) {
		currentSlideIndex = 3
	};
	displayImage(currentSlideIndex)
};

function resetAllDots() {
	divDots.querySelectorAll(".dot").forEach(dot => {
		dot.classList.remove('dot_selected')
	})
}
