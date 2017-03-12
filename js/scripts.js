
if ("repeat" in String.prototype) { // jeśli metoda repeat istnieje w String.prototype
	console.log("metoda repeat istnieje w String.prototype dlatego tworzę nową metodę dla String.protorype, która działa jak repeat"); // pokaż console.log z podanym tekstem

	 String.prototype.repeatt = function(count) { // przypisz do String.prototype metodę repeatt jako funkcję dla podanej wartości "count"

 		var text = ""; // zmienna tekst odpowiada pustemu polu, w które będziemy wpisywać tekst

 		for (i=0; i < count; i++) { // dla indexu zaczynajacego się od 0, mniejszego od wartości "count", będziemy zwiększać index o 1

 			text += this; //text będzie powtórzony tyle razy jaką wartość "count" podaliśmy
 		}

 		return text;		// zwracamy nasz text przekształcony przez for.
	};

	console.log("przykład ".repeatt(3)); // wyświetlamy w console.log nasz tekst z nową metodą repeatt.
		
	// document.getElementById("output").innerHTML = "hej ".repeatt(5);	
}