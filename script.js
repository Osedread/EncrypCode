function rot13(str) {
	
	
	var arr = [];
	var upperStr = str.toString().toUpperCase();
	
	for (var i=0; i<str.length; i++) {
		
		var letterCharCode = upperStr.charCodeAt(i);

		if (letterCharCode >= 78 && letterCharCode <= 90) {
			letterCharCode += 19;
		} else if (letterCharCode >=65 && letterCharCode <= 77) {
			letterCharCode += 13;
		}

		var letter = String.fromCharCode(letterCharCode);
		arr.push(letter);
		
	}

	var str2 = arr.join("").toUpperCase();

	return str2;
}

function encryptFn() {
	var text = document.getElementById("textToEncrypt").value;
	var strText = text.toString();
	var newText = rot13(strText);
	document.getElementById("encryptedText").innerHTML = newText;
}

