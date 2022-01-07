// const checkbox = document.getElementById('hamburger-checkbox');
// const link1 = document.getElementById('link1');
// link1.addEventListener('click', () => {
//     checkbox.click();
// });

const checkbox = document.getElementById('hamburger-checkbox');

const navLinks = document.querySelectorAll(".link-item");
	[...navLinks].forEach(navLink => {
			navLink.addEventListener('click', () => {
     checkbox.click();
	});
})

