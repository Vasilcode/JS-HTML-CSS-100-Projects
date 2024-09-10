//close-btn
const close = document.getElementById('close');
//open-btn
const open = document.getElementById('open');
//modal
const modal = document.getElementById('modal');

open.addEventListener('click', () => {
	modal.style.display = 'block';
});

close.addEventListener('click', () => {
	modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
	e.target === modal ? (modal.style.display = 'none') : false;
});
