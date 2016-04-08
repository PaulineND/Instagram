function generateHover(id) {
	var targetElement = $(id);
	var iconHeart = document.createElement('i');
	var iconComment = document.createElement('i');
	var container = document.createElement('div');

	container.setAttribute('class', 'hover-img');
	iconHeart.setAttribute('class', 'fa fa-heart hover-icon');
	iconComment.setAttribute('class', 'fa fa-comment hover-icon');

	container.appendChild(iconHeart);
	container.appendChild(iconComment);

	targetElement.append(container);
}

function removeHover(id) {
	var targetElement = $(id);
	targetElement.remove(targetElement.firstChild);
}

$(document).ready(function() {
	$(".main-photos-container-photos").mouseenter(function() {
	 	generateHover($(this).attr("id")); 
	});
	$(".main-photos-container-photos").mouseout(function() {
	 	removeHover($(this).attr("id")); 
	});
})