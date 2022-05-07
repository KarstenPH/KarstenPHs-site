function redirectToLegacy() {
	var url = "https://karstenph.github.io/legacy/";
	try {
		// if the user was redirected before, let's not force the user lol
		if (!localStorage.getItem("redirected")) {
			localStorage.setItem("redirected", true);
			url = window.location.origin + "/legacy/";
			window.location.href = "/legacy";
		}
	} catch (e) {
		// if JS redirect doesn't work, we show popup
		alert("please use the legacy version of this website!\n" + url);
	}
}

// this tests if everything works fine, if not redirect to legacy
// if the user was redirected before, we will not force it...
if (!localStorage.getItem("redirected")) {
	try {
		var string = "this is a test...";
		localStorage.setItem("test", string);
		var test = localStorage.getItem("test");
		if (test != string) throw Error("localStorage doesn't work...");
		if (!window.location || !window.location.href || !window.location.origin) throw Error("no href!");
		ready();
	} catch (e) {
		redirectToLegacy(e);
	}
}

// Element.prototype.children returns DOMList which is not an Array
// Arrays have a forEach method/function but DOMList does not
// alternative way of Array.from is [...document.body.children] aka spread
// no longer needed, wrote it directly to the html file
// Array.from(document.body.children).forEach((a, i) => {
// 	a.style.setProperty("--delay", (i + 1) / 10 + 0.5 + "s");
// });

function ready() {
	try {
		// we use this for browser support
		// notice how i did not use an arrow function (()=>{})
		// or used addEventListener, this is because onload is very old
		// arrow functions started existing in 2015/2016
		window.onload = function () {
			// delay so that website fully loads
			// if we do not delay the alert will stop the page from loading
			setTimeout(init, 1000);
		};

		function init() {
			// this part is used to check if the user is using forced darkmode
			// if the function exists
			if (window.getComputedStyle) {
				try {
					var el = document.createElement("div");
					var style = el.style;
					style.display = "none";
					style.backgroundColor = "canvas";
					style.colorScheme = "light";
					el.innerText = "hewo";
					document.documentElement.appendChild(el);
					if (getComputedStyle(el).backgroundColor != "rgb(255, 255, 255)") {
						alert(
							"please disable force dark mode for this website\ni know you hate light mode but this website is already in dark mode.  There should be instructions on your browser's help page on how to disable it for a specific site. If not, then RIP"
						);
						// forced darkmode mega cringe
					}

					el.remove();
				} catch (e) {
					console.error("forced dark mode check failed", e);
				}
			}
		}
	} catch (e) {
		// if the functions on top fail, we redirect
		redirectToLegacy();
	}
}
