$(document).ready(function(){
    console.log("Lets Eat!");
});

function buildQueryURL() {
    var queryURL = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=";

    var queryParams = { "api-key": "ac032b7765msh7b7ea8d251892bbp18630ejsnfccfef5696ae"};

    queryParams.q = $("#main-ingredient").val().trim();

    //If user provides a second ingredient 
    var ingredient1 = $("ingredient-1").val().trim();

    if (parseInt(ingredient1)) {
        queryParams.ingredient;

        var ingredient2 = $("ingredient-2").val().trim();
        if (parseInt(ingredient2)) {
            queryParams.ingredient;
            
            var ingredient3 = $("ingredient-3").val().trim();
            if (parseInt(ingredient3)) {
                queryParams.ingredient;            
        
    }
}

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
    