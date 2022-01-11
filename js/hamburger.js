

const checkbox = document.getElementById('hamburger-checkbox');

const navLinks = document.querySelectorAll(".link-item");
	[...navLinks].forEach(navLink => {
			navLink.addEventListener('click', () => {
     checkbox.click();
	});
})

