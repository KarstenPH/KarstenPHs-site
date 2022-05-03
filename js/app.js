// Element.prototype.children returns DOMList which is not an Array
// Arrays have a forEach method/function but DOMList does not
// alternative way of Array.from is [...document.body.children] aka spread
// no longer needed, wrote it directly to the html file
// Array.from(document.body.children).forEach((a, i) => {
// 	a.style.setProperty("--delay", (i + 1) / 10 + 0.5 + "s");
// });

alert("Website is WIP!!!");
