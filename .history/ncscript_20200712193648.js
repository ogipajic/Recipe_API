$(document).ready(function() {
	console.log("Lets Eat!");
});

var numRecipes = "";
var instructions = "";
var thumbnailURL = "";
var ingredient = "";
var name = "";
	
var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://tasty.p.rapidapi.com/recipes/list?tags=",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "tasty.p.rapidapi.com",
		"x-rapidapi-key": "ac032b7765msh7b7ea8d251892bbp18630ejsnfccfef5696ae"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});
		
		
		
		
		
		
		
		
		
		
		
		
	
	
	
	
	
	
	



	

	
