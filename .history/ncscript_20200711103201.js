$(document).ready(function() {
    console.log("Lets Eat!");
});


// Search Parameters
var summaryObj = {};
var title = null;
var thumbnailURL = null;
var ingredient = null;
var credits = null;
var measurements = null;

//Functions

fetch("https://tasty.p.rapidapi.com/recipes/list?q=spinach&from=0&sizes=20", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "tasty.p.rapidapi.com",
		"x-rapidapi-key": "ac032b7765msh7b7ea8d251892bbp18630ejsnfccfef5696ae"
	}
})
.then(response => {
	console.log(response);
	displayRecipes(response);
})
.catch(err => {
	console.log(err);
});

document.getElementById("getRecipe").addEventListener('click', displayRecipes);

function displayRecipes(obj) {
	document.getElementById("results_list").innerHTML = displayRecipes;
}

