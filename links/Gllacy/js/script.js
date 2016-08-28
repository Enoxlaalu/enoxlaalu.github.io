var form = document.querySelector(".modal-window");
var button = document.querySelector(".btn-address");
var cross = form.querySelector(".modal-close");
var overlay = document.querySelector(".modal-overlay");
var names = form.querySelector("[id=name]");

button.addEventListener("click", function(e) {
	event.preventDefault();
	form.classList.add("modal-window-show");
	overlay.classList.add("modal-overlay-show");
	names.focus();
});

cross.addEventListener("click", function(e) {
	event.preventDefault();
	form.classList.remove("modal-window-show");
	overlay.classList.remove("modal-overlay-show");
});

window.addEventListener("keydown", function(e) {
	if (event.keyCode === 27) {
		if (form.classList.contains("modal-window-show" || "modal-overlay-show")) {
			form.classList.remove("modal-window-show");
			overlay.classList.remove("modal-overlay-show");
		}
	}
});

overlay.addEventListener("click", function(e) {
	event.preventDefault;
	form.classList.remove("modal-window-show");
	overlay.classList.remove("modal-overlay-show");
})