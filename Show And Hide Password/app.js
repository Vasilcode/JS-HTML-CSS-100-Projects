//input
const input = document.querySelector('input');
//eye
const eye = document.querySelector('#eye-icon');

eye.addEventListener('click', () => {
	if (input.type === 'password') {
		input.type = 'text';
	} else {
		input.type = 'password';
	}
});
