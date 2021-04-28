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


// --------------------------------- Tiny Project 7 ----------------------------------------------------------------// 

// object constructor for Recipe prototype
function Recipe(recipeName, imageURL, contributorName, ingredientFilename, equipmentFilename, directionsFilename) {
	this.name = recipeName;
	this.imgsrc = imageURL;
	this.contributor = contributorName;
	this.ingFile = ingredientFilename;
	this.equipFile = equipmentFilename;
	this.dirFile = directionsFilename;
	
	// update the screen with this object's recipe information
	this.displayRecipe = function() {
		
		// update the recipe title
		document.querySelector("#titleBanner h1").innerHTML = this.name;
		
		// update the recipe contributor
		document.querySelector("#titleBanner h3").innerHTML = "Contributed by: " + this.contributor;
		
		// update the image
		document.querySelector("#titleBanner").style.backgroundImage = "url(" + this.imgsrc + ")";
		
		// update the 3 columns of information
		loadFileInto(this.ingFile, "ingredients");
		loadFileInto(this.equipFile, "equipment");
		loadFileInto(this.dirFile, "directions");
		
	}
	
}

// my original recipe  https://www.allrecipes.com/recipe/228273/righteous-raspberry-brownies/ 
RighteousRaspberryBrownies = new Recipe(
  "Righteous Raspberry Brownies",
  "https://images.unsplash.com/photo-1577003833619-76bbd7f82948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "Khrystine Raymond",
  "ingredients.html",
  "equipment.html",
  "directions.html"
);

// second recipe  https://www.allrecipes.com/recipe/214488/lemon-chicken-piccata/ 
LemonChickenPicatta = new Recipe( 
  "Lemon Chicken Piccata",
  "https://images.unsplash.com/photo-1558574869-8c0caa518dd4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1651&q=80",
  "Sophie Dutton",
  "piccata-ingredients.html",
  "picatta-equipment.html",
  "picatta-directions.html"
);

// third recipe  https://www.foodnetwork.com/recipes/alton-brown/homemade-soft-pretzels-recipe-1948242 
SoftPretzels = new Recipe(
  "Soft Pretzels", 
  "https://kzorn355.com/tp4/images/pretzel.jpg",
  "Kristine Zorn", 
  "pretzels-ingredients.html", 
  "pretzels-equipment.html", 
  "pretzels-directions.html",
);

