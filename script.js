const encryptBtn = document.getElementById("encryptBtn");
const copyBtn = document.getElementById("copyBtn");
let text = document.getElementById("textToEncrypt");
let finalText = document.getElementById("encryptedText");

function rot13(str) {
	let arr = [];
	const upperStr = str.toString().toUpperCase();
	for (let i=0; i<str.length; i++) {
		let letterCharCode = upperStr.charCodeAt(i);
		if (letterCharCode >= 78 && letterCharCode <= 90) {
			letterCharCode += 19;
		} else if (letterCharCode >=65 && letterCharCode <= 77) {
			letterCharCode += 13;
		}
		let letter = String.fromCharCode(letterCharCode);
		arr.push(letter);
	}
	const str2 = arr.join("").toUpperCase();
	return str2;
}

function encrypt() {
	let text = document.getElementById("textToEncrypt").value;
	console.log(text);
	let strText = text.toString();
	let newText = rot13(strText);
	finalText.innerHTML = newText;
}

text.addEventListener("keypress", (event) => {
	if (event.which === 13) {
		encrypt();
	}
}, true);

encryptBtn.addEventListener("click", encrypt, true);

// copyBtn.addEventListener("click", (event) => {
// 	alert("Hola");
// 	let textToCopy = finalText.innerHTML;
	
// 	try {
// 		textToCopy.focus();
// 		textToCopy.select();
// 		console.log(textToCopy);
// 		return document.execCommand("copy");
// 	} catch (err) {
// 		console.warn("Copy to clipboard failed.", err);
// 		return false;
// 	}
// }, true);