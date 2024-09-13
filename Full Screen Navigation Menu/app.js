//Menu
const menu = document.querySelector('.menu');
//Links
const links = document.querySelectorAll('li');
//Highlight
const Highlight = document.querySelector('.highlight');
//Button
const Button = document.querySelector('.btn');

Button.addEventListener('click', function () {
	if (this.dataset.open === 'close') {
		menu.style.clipPath = 'circle(100% at 50% 50%)';
		this.dataset.open = 'open';
	} else {
		menu.style.clipPath = '';
		this.dataset.open = 'close';
		Highlight.style = '';
	}
});

links.forEach((links) => {
	links.addEventListener('mouseenter', function () {
		Highlight.style.left = this.offsetLeft + 'px';
		Highlight.style.width = this.offsetWidth + 'px';
		Highlight.style.top = this.offsetTop + 'px';
		Highlight.style.height = this.offsetHeight + 'px';
	});
});
