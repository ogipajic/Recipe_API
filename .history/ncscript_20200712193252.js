$(document).ready(function() {
	console.log("Lets Eat!");
});

var numRecipes = "";
var instructions = "";
var thumbnailURL = "";
var ingredient = "";
var name = "";
var slug = '';
	
		var settings = {
			"async": true,
			"crossDomain": true,
			"url": "https://edamam-recipe-search.p.rapidapi.com/search?q=",
			"method": "GET",
			"headers": {
				"x-rapidapi-host": "edamam-recipe-search.p.rapidapi.com",
				"x-rapidapi-key": "ac032b7765msh7b7ea8d251892bbp18630ejsnfccfef5696ae"
			}
		}
		
		$.ajax(settings).done(function (response) {
			console.log(response);
		});	
	
	
	
	
	
	
	



	

	
