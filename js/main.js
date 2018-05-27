(function(window, document) {
	var i;
	var gallery = document.getElementsByClassName('gallery');
	function showPhoto() {
		document.gallery.src = this.src;
		document.gallery.classList.remove('hide');
		document.getElementById('imageDescription').innerHTML = this.alt;
	}
	for(i=0; i<gallery.length; i++) {
		gallery[i].addEventListener('click', showPhoto);
	}
})(window, document);