Array.from(document.body.children).forEach((a, i) => {
	a.style.animationFillMode = "forwards";
	a.style.animation = `swoosh-left 0.5s ease ${(i + 1) / 10 + 0.5}s forwards`;
});
