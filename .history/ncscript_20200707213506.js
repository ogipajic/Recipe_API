$(document).ready(function() {
    console.log("Lets Eat!");
});

var authKey = "ac032b7765msh7b7ea8d251892bbp18630ejsnfccfef5696ae";

// Search Parameters
var ingredient = "";
var numRecipes = 0;

// URL Base
var queryURLBase = "https://tasty.p.rapidapi.com/recipes/list?api-key=" + authKey;

//Variable to track number of recipes
var recipeCounter = 0;

//Functions

function runQuery(numRecipes, queryURL) {
    $.ajax({url: queryURL, method: "GET"})
    .done(function(recipeData) {           // Save all parameters in recipe data
        console.log(recipeData);
    });
    
}


$('#searchBtn').on('click', function () {
    runQuery(10, "https://tasty.p.rapidapi.com/recipes/list?api-key=ac032b7765msh7b7ea8d251892bbp18630ejsnfccfef5696ae"); // Run query - give me 10 recipes 

    return false; // Prevent from going to a new page
})

