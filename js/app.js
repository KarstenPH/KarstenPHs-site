// Element.prototype.children returns DOMList which is not an Array
// Arrays have a forEach method/function but DOMList does not
// alternative way of Array.from is [...document.body.children] aka spread
// no longer needed, wrote it directly to the html file
// Array.from(document.body.children).forEach((a, i) => {
// 	a.style.setProperty("--delay", (i + 1) / 10 + 0.5 + "s");
// });

// we use this for browser support
// notice how i did not use an arrow function (()=>{})
// or used addEventListener, this is because onload is very old
// arrow functions started existing in 2015/2016
window.onload = function () {
	// delay so that website fully loads
	// if we do not delay the alert will stop the page from loading
	setTimeout(function () {
		alert("Website is WIP!!!");
	}, 1000);
};
