var susp = document.getElementById('points');

function createProfile(e) {
	var body = document.getElementById('body');

	// création des éléments html
	var modalProfile = document.createElement('div');
	var closeBtn = document.createElement('span');

	var modalProfileContent = document.createElement('div');
	var head = document.createElement('div');

	var fullName = document.createElement('p');
	var fullNameT = document.createElement('span');
	var webSite = document.createElement('p');
	var webSiteT = document.createElement('span');
	var eMail = document.createElement('p');
	var eMailT = document.createElement('span');
	var hobbies = document.createElement('p');
	var hobbiesT = document.createElement('span');
	var description = document.createElement('p');
	var descriptionT = document.createElement('span');

	// ajout des attributs
	modalProfile.setAttribute('class', 'modal-picture');
	closeBtn.setAttribute('class', 'close');
	modalProfileContent.setAttribute('class', 'modal-profile-content');

	// ajout des textes
	closeBtn.textContent = "X";

	fullNameT.textContent = "Full Name: ";
	webSiteT.textContent = "Website URL: ";
	eMailT.textContent = "Email Address: ";
	hobbiesT.textContent = "Hobbies : ";
	descriptionT.textContent = "Description: ";



	// insertion dans le dom
	modalProfileContent.appendChild(head);

	fullName.appendChild(fullNameT);
	webSite.appendChild(webSiteT);
	eMail.appendChild(eMailT);
	hobbies.appendChild(hobbiesT);
	description.appendChild(descriptionT);

	// ajout des textes paragraphes
	fullName.appendTextNode("G magazine");
	webSite.textContent += "gmagazine.co/";
	eMail.textContent += "me@gmagazine.co";
	hobbies.textContent += "Culture, Photography, Travel, Style";
	description.textContent += "Hey folks, G magazine is a really cool paper about stuff. We love pictures of unknow places that leaves you breathless, lifestyle articles, and news. Check us out !";

	modalProfileContent.appendChild(fullName);
	modalProfileContent.appendChild(webSite);
	modalProfileContent.appendChild(eMail);
	modalProfileContent.appendChild(hobbies);
	modalProfileContent.appendChild(description);

	modalProfile.appendChild(closeBtn);
	modalProfile.appendChild(modalProfileContent);

	body.appendChild(modalProfile);

	// effacer du dom
	function closeModal(e){
		modalProfile.parentNode.removeChild(modalProfile);
	}

	closeBtn.addEventListener('click', closeModal);
}

susp.addEventListener('click', createProfile);
var img1 = document.getElementById('img1');

function createModal(e) {
	// création des nouveaux éléments html
	var modal = document.createElement('div');
	var modalContent = document.createElement('div');
	var closeBtn = document.createElement('span');
	var modalImage = document.createElement('div');
	var modalImageContainer = document.createElement('div');


	// création de la partie droite du modal **MCT**
	var modalContentText = document.createElement('div');
	var mctHead = document.createElement('div');
	var mctLike = document.createElement('div');
	var mctUserComment = document.createElement('div');
	var mctComments = document.createElement('div');
	var mctAddComment = document.createElement('div');

	var mctAvatar = document.createElement('img');
	var mctNameLink = document.createElement('a');
	var mctName = document.createElement('p');
	var mctSubscribe = document.createElement('button');

	var mctNumLike = document.createElement('p');
	var mctLikeCount = document.createElement('span');
	var mctDate = document.createElement('p');

	var mctNameLink2 = document.createElement('a');
	var mctName2 = document.createElement('p');
	var mctUserText = document.createElement('p');

	// toute la partie commentaires

	var mctLikeBtn = document.createElement('button');
	var mctLikeImg = document.createElement('i');
	var mctTextComment = document.createElement('input');

	// Les trois petits points (si on veut)

	// ajout des attributs et textes
	modal.setAttribute('class', 'modal-picture');
	modalContent.setAttribute('class', 'modal-picture-content');
	closeBtn.textContent = "x";
	closeBtn.setAttribute('class', 'close');

	// ajout des attributs et des textes **MCT**
	modalContentText.setAttribute('class', 'modalContentText');
	mctHead.setAttribute('class','modalContent-head');
	mctAvatar.setAttribute('src', 'img/gmag.jpg');
	mctAvatar.setAttribute('class', 'modal-avatar');
	mctName.textContent = "g";
	mctName2.textContent = "g";
	mctNameLink.setAttribute('href', '#');
	mctNameLink2.setAttribute('href', '#');
	mctSubscribe.textContent = "S'ABONNER";
	mctSubscribe.setAttribute('class', 'subscribe-btn');

	mctLike.setAttribute('class', 'mct-like');

	mctUserText.textContent = "Lorem ipsum dolor sic amet";

	mctTextComment.setAttribute('placeholder', 'Ajouter un commentaire...');






	// récupérer l'image
	var imgSrc = e.target.getAttribute('src');
	modalImage.style.backgroundImage = "url("+imgSrc+")";
	modalImage.setAttribute('class', 'modal-picture-image');

	// phase d'ajout **MCT**
	modalContentText.appendChild(mctHead);
	modalContentText.appendChild(mctLike);
	modalContentText.appendChild(mctUserComment);
	modalContentText.appendChild(mctComments);
	modalContentText.appendChild(mctAddComment);

	mctHead.appendChild(mctAvatar);
	mctHead.appendChild(mctNameLink);
	mctHead.appendChild(mctSubscribe);

	mctNameLink.appendChild(mctName);

	mctLike.appendChild(mctNumLike);
	mctLike.appendChild(mctDate);

	mctNumLike.appendChild(mctLikeCount);

	mctUserComment.appendChild(mctNameLink2);
	mctUserComment.appendChild(mctUserText);

	mctNameLink2.appendChild(mctName2);

	mctAddComment.appendChild(mctLikeBtn);
	mctAddComment.appendChild(mctTextComment);

	mctLikeBtn.appendChild(mctLikeImg);

	



	// phase d'ajout des éléments crées au document HTML
	modalImageContainer.appendChild(modalImage);
	modalContent.appendChild(modalImageContainer);
	modalContent.appendChild(modalContentText);
	modal.appendChild(modalContent);
	modal.appendChild(closeBtn);
	document.getElementById('body').appendChild(modal);
	//Quand l'utilisateur click en dehors de l'image, la fermer

	modal.addEventListener('click',function(event){
		if (event.target ==  modal) {
			modal.style.display = "none";
		}
	});

	//quand on clique sur la croix, le modal se ferme.
	closeBtn.addEventListener('click',function(){
		modal.style.display = "none";
	});
	
}


img1.addEventListener('click', createModal);


console.log('backgroundColor :' + $('.sabonner').css("background-color"));
$('#btn_sabonner').click(function () {
	 $(this).css("background-color","green");
	 console.log('backgroundColor :' + $('.sabonner').css("background-color"));

});
