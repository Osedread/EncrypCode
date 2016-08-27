t

//Lorem ipsum erecto
// 3


// Create an array with every value of the text.
var textInputArray = textInput.split("");
var textOutputArray = [];
// ["H", "o", "l", "a"]

// R -> textInputArray[2]





var pene = function () {
	
	for ( var i = 0; i < textInputArray.length; i++ ) {
		
		if ( textInputArray[i] == alphabet.indexOf(i) ) {
			var encryptedCharacter = alphabet[i+numberInput];
			textOutputArray.push(encryptedCharacter);
		} else {
			textOutputArray.push(textInputArray[i]);
		}
	}
};


	// Cogemos cada caracter del texto
	// var  originalCharacter = textInput.chartAt(i);




