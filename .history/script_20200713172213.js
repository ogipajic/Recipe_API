/**
 * pulls information from the form and build the query URL
 * @returns {string} URL for Spoonacular API based on form inputs
 */

$(document).ready(function() {
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
    }
    // If a user provides a third ingredient

        var ingredient2 = $("ingredient-2").val().trim();
        if (parseInt(ingredient2)) {
            queryParams.ingredient;
        }  
    // If a user provides a fourth ingredient

            var ingredient3 = $("ingredient-3").val().trim();
            if (parseInt(ingredient3)) {
                queryParams.ingredient;            
            }
    }

/** * takes API data (JSON/object) and turns it into elements on the page
    * @param {object} recipeData - object containing recipe data
*/        
    function updatePage(recipeData) {
        var numRecipes = $("#recipe-count").val();
        console.log(recipeData);
        console.log("--------------------");

    for (var i = 0; i < numRecipes; i++) {
        // Get specific recipe info for our current index
        var recipe = recipeData.response.docs[i];

        // Increase the recipeCount (track recipe # - starting at 1)
        var recipeCount = i + 1;

        var $recipeList = $("<ul>");
        $recipeList.addClass("list-group");

        $("#recipe-section").append($recipeList);

        


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
    