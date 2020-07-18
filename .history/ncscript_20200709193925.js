$(document).ready(function() {
    console.log("Lets Eat!");
});


// Search Parameters
var ingredient = "";
var numRecipes = 0;


//Functions

var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://tasty.p.rapidapi.com/recipes/list?q=onion&from=0&sizes=20",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "tasty.p.rapidapi.com",
		"x-rapidapi-key": "ac032b7765msh7b7ea8d251892bbp18630ejsnfccfef5696ae"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});














