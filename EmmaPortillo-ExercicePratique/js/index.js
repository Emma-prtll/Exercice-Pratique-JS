	// // Animer l'affichage du contenu de la section About
	// function showmore() {
	//   var $var1 = document.getElementById('aboutText');
	//   if ($var1.style.height === 220) {
	//     $var1.toggle({
	//       "height": "60px"
	//     });
	//     this.text('+');
	//   } else {
	//     $var1.toggle({
	//       "height": "auto"
	//     });
	//     this.text('-');
	//   }
	// }


	// GALLERIE D'IMAGE DU PORTFOLIO

	//Créeation de la variable small afin de savoir si le texte est affiché en petit ou non (hidden ou block)
	let small = true

	function showMore(){
		let aboutText = document.getElementById(`aboutText`)
		
		//Si small est true, donc l'affichage petit, le display change en block pour afficher tout le texte et le hauteur du container s'adapte. Le + devient un - et la variable small devient false pour quelle ne rentre plus dans cette partie de la condition.
		if(small){
			console.log(`la`)
			aboutText.style.display = `block`
			aboutText.style.height = `auto`

			document.getElementById(`showMore`).textContent = `-`

			small = !small
		//On revient à l'état initial en cachant le texte qui dépasse, la taille du container à 60px, le - redevient un + et le small redevient true pour rerentrer dans la première partie de la condition
		} else{
			console.log(`do`)
			aboutText.style.display = `hidden`
			aboutText.style.height = `60px`

			document.getElementById(`showMore`).textContent = `+`

			small = true
		}


	}

	// Afficher la lightbox avec l'image ciblée
	function lightbox(element){

		//Récupère la source de l'image ciblée
		let img = element.nextElementSibling
		let imgSrc = img.src

		// Met à jour la source de la grande image 
		document.querySelector('#big-img').src = imgSrc


	    document.getElementById('lightbox').style.display = 'block'

		document.body.style.overflow = 'hidden'

	}

	// Fermer la lightbox lorsque l'on clique dessus
	document.getElementById('lightbox').addEventListener('click', function() {
		// display hidden devient none pour ne plus apparaitre
		document.getElementById('lightbox').style.display = 'none';
		// L'overflow devient auto pour denouveau pouvoir scroller
		document.body.style.overflow = 'auto';

	})



// FORMULAIRE DE CONTACTE

//input
let inputNom = document.querySelector(`#nom`)
let inputPrenom = document.querySelector(`#prenom`)
let inputAge = document.querySelector(`#age`)
let inputEmail = document.querySelector(`#email`)

//RegEx 
let checkNom = /^[A-Za-z]+$/
let checkPrenom =  /^[A-Za-z]*$/
let checkAge = /^[0-9]+$/
let checkEmail = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/
// let checkEmail = /^[a-z0-9][a-z0-9._-]+.[a-z]{2.4}$/

// Fonction de vérification
function checkInput(exp, input) {
    const value = input.value.trim();

    if (exp.test(value)) {
        input.style.border = "2px solid green";
        return true;
    } else if (value === "") {
        input.style.border = "2px solid black";
        return false;
    } else {
        input.style.border = "2px solid red";
        return false;
    }
}

// Validation en temps réel
inputEmail.addEventListener("input", () => checkInput(checkEmail, inputEmail));
inputNom.addEventListener("input", () => checkInput(checkNom, inputNom));
inputPrenom.addEventListener("input", () => checkInput(checkPrenom, inputPrenom));
inputAge.addEventListener("input", () => checkInput(checkAge, inputAge));


function formValidation(){


	// Validation au clic sur le bouton "Submit"
	let form = document.getElementById(`form`)
	form.addEventListener("submit", function (event) {
		//event.preventDefault(); // Empêche le rechargement de la page

		const emailIsOk = checkInput(checkEmail, inputEmail);
		const nomIsOk = checkInput(checkNom, inputNom);
		const prenomIsOk = checkInput(checkPrenom, inputPrenom);
		const ageIsOk = checkInput(checkAge, inputAge);

		if (emailIsOk && nomIsOk && prenomIsOk && ageIsOk) {
			document.getElementById(`hidden`).style.display = `block`
		} else {
			alert("Merci de remplir tous les champs correctement !");
			event.preventDefault(); // Empêche le rechargement de la page

		}
	});

}




// Liste des expressions régulières nécessaires
	// var nom = /^[A-Za-z]+$/,
	//   prenom = /^[A-Za-z]*$/,
	//   age = /^[0-9]+$/,
	//   mail = /^[a-z0-9][a-z0-9._-]+.[a-z]{2.4}$/;

	// Test la validité d'un champ une fois que l'on change le focus sur un autre élément
	// document.getElementsByTagName('input').addEventListener('blur', function() {
	//   if (!value) {
	//     this.style.border = 'red 1px solid';
	//   } else {
	//     this.style.border = 'lightgreen 1px solid';
	//   }
	// });

	// function formValidation(){

	// }