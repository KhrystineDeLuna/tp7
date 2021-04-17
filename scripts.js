window.onload = function() {
  document.querySelector("#recipeName").style.fontSize = "2.75em";
};

// recipe name click function //
browniebites = document.querySelector("#recipeName");
recipeName.onclick = function() {
  browniebites.classList.toggle("clicked");
};


// DOM element addition //
x = document.getElementById("enjoy");
x.innerHTML = "Stay tuned to this space for other righteous treats!";
x.style.fontSize = '1.75em';
x.style.fontFamily = 'Seymour One';
x.style.textAlign = 'center';


/* dissapearing lists */
c1 = document.querySelector("#column1");
c1.onclick = function() {
  c1.classList.toggle("clicked");
};

c2 = document.querySelector("#column2");
c2.onclick = function() {
  c2.classList.toggle("clicked");
};

c3 = document.querySelector("#column3");
c3.onclick = function() {
  c3.classList.toggle("clicked");
};

// --------------------------------- Tiny Project 6 ----------------------------------------------------------------// 

// generic AJAX function to load fromFile into object with ID whereTo
function loadFileInto(fromFile, whereTo) {

	// creating a new XMLHttpRequest object
	ajax = new XMLHttpRequest();

	// defines the GET/POST method, source, and async value of the AJAX object
	ajax.open("GET", fromFile, true);

	// prepares code to do something in response to the AJAX request
	ajax.onreadystatechange = function() {
		
			if ((this.readyState == 4) && (this.status == 200)) {
				document.getElementById(whereTo).innerHTML = this.responseText;
				
			} else if ((this.readyState == 4) && (this.status != 200)) {
				console.log("Error: " + this.responseText);
				
			}
		
	} // end ajax.onreadystatechange

	// now that everything is set, initiate request
	ajax.send();

}

window.onload = function() {
	
	loadFileInto("ingredients.html", "column1");
	
	loadFileInto("equipment.html", "column2");
	
	loadFileInto("directions.html", "column3");
	
};