$(document).ready(function() {
	console.log("Lets Eat!");
});

var authKey = "ac032b7765msh7b7ea8d251892bbp18630ejsnfccfef5696ae";

var queryIngredient = "";
var numResults = 0;
var title = "";
var summary = "";
var extendedIngredients = "";
var sourceURL = "";

var queryURLBase = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=" + authKey;

var recipeCounter = 0;

// functions

function runQuery(numRecipes, queryURL) {
	$.ajax({
		url: queryURL,
		method: "GET",
	}).done(function(recipeData) {

		for (var i = 0; i < recipeData.response.docs.length; i++){
			console.log(recipeData.response.docs[1].headline.main);

			var wellSection = $('<div>');
			wellSection.addClass("well");
			wellSection.attr('id', 'articleWell-' + i);
			$('#wellSection').append(wellSection);

			$("articleWell-" + i).append("<h3> recipeData.response.docs[i].headline.main </h3>");

		}
		;
		console.log(queryURL);
		console.log(numRecipes);
		console.log(recipeData);
	})
}

$("#run-search").on("click", function(event) {
	event.preventDefault();	

	clear();

	$.ajax({
		url: queryURL,
		method: "GET",
	}).then(updatePage);

	

	

	
})
	var settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=",
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
			"x-rapidapi-key": "ac032b7765msh7b7ea8d251892bbp18630ejsnfccfef5696ae"
		}
	}
	
	$.ajax(settings).done(function (response) {
		console.log(response);
	});

	

