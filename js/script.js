document.body.addEventListener('click', function(el) {
	if(el.target.classList.contains('compartilhar')) {
		let targ = el.target.children[1];
		targ.classList.contains('displayNone') ? targ.classList.remove('displayNone') : targ.classList.add('displayNone');
	};
});

document.body.addEventListener('click', function(e) {
	e.target.classList.contains('amp-social-share') ? e.target.parentElement.classList.add('displayNone') : '';
});

document.querySelector('.asideMobileMenuEditoriasBtn').addEventListener('click', function() {
	let modal = document.querySelector('.asideMobileMenuEditoriasModal');
	let svg = document.querySelector('#asideMobileMenuEditoriasBtnSvg');
	if(modal.classList.contains('displayNone')) {
		modal.classList.remove('displayNone');
		svg.style.transform = 'rotateX(180deg)';
	} else {
		modal.classList.add('displayNone');
		svg.style.transform = 'rotateX(0deg)';
	};
});

document.querySelector('.hamburguerMenuBtn').addEventListener('click', function() {
	document.querySelector('.asideMobileMenu').style.left = '0';
});

document.querySelector('.asideMobileMenuCloseBtn').addEventListener('click', function() {
	document.querySelector('.asideMobileMenu').style.left = '-110%';
});