var menu = document.querySelector(".header__menu");
const list = document.querySelector(".list");
var menuIcon = document.querySelector(".menu-icon");
var closeIcon = document.querySelector(".menu-close");
menu.addEventListener("click", () => {
	list.classList.toggle("show");

	if (list.classList.contains("show")) {
		menuIcon.style.display = "none";
		closeIcon.style.display = "inline-block";
	} else {
		menuIcon.style.display = "inline-block";
		closeIcon.style.display = "none";
	}
});
