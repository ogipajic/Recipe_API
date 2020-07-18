$(document).ready(function() {
    console.log("Lets Eat!");
});

var authKey = "ac032b7765msh7b7ea8d251892bbp18630ejsnfccfef5696ae";

var ingredient = "";
var numRecipes = 0;

var queryURLBase = "https://tasty.p.rapidapi.com/recipes/list?"