$(document).ready(function() {
	console.log("Lets Eat!");
});

var numRecipes = "";
var instructions = "";
var thumbnailURL = "";
var ingredient = "";
var credits = "";

	for (var i=0; i < numRecipes; i++)
		title = recipeObj.items.result[i].title;
		credits = recipeObj.items.result[i].credits;
		ingredient = recipeObj.items.result[i].ingredient;

		var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://tasty.p.rapidapi.com/recipes/list?tags=under_30_minutes&q=kale&from=0&sizes=20",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "tasty.p.rapidapi.com",
		"x-rapidapi-key": "ac032b7765msh7b7ea8d251892bbp18630ejsnfccfef5696ae"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);

	document.getElementById
});