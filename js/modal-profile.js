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
	fullName.textContent = "G magazine";
	webSite.textContent += "gmagazine.co/";
	eMail.textContent += "me@gmagazine.co";
	hobbies.textContent += "Culture, Photography, Travel, Style";
	description.textContent += "Hey folks, G magazine is a really cool paper about stuff. We love pictures of unknow places that leaves you breathless, lifestyle articles, and news. Check us out !";

	fullName.insertBefore(fullNameT, fullName.firstChild);
	webSite.insertBefore(webSiteT, webSite.firstChild);
	eMail.insertBefore(eMailT, eMail.firstChild);
	hobbies.insertBefore(hobbiesT, hobbies.firstChild);
	description.insertBefore(descriptionT, description.firstChild);

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