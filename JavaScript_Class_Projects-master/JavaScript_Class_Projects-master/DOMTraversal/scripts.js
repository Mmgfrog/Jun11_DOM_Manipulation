let fluffyBunny = document.querySelector('.paragraph');
let listUl = document.querySelector('ul');

fluffyBunny.addEventListener('mouseover', () => {
	fluffyBunny.textContent = fluffyBunny.textContent.toUpperCase();
});
fluffyBunny.addEventListener('mouseout', () => {
	fluffyBunny.textContent = fluffyBunny.textContent.toLowerCase();
});

listUl.addEventListener('click', (event) => {
	if(event.target.tagName == 'BUTTON'){
		if(event.target.className == 'up'){
			let li = event.target.parentNode;
			let prevli = li.previousElementSibling;
			let ul = li.parentNode;
			ul.insertBefore(li, prevli);
		}
	}
});