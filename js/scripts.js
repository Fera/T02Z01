
if ("repeat" in String.prototype) {
	console.log("metoda repeat istnieje w String.prototype");

	 String.prototype.repeatt = function(count) { 

	 		var text = "";

	 		for (i=0; i < count; i++) {

	 			text += this;
	 		}

	 		return text;
		
	};
		
	document.getElementById("output").innerHTML = "hej ".repeatt(5);
	
}