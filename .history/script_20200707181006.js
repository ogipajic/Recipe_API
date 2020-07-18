$(document).ready (function() {
});

$('button').on('click', function () {
    var ingredient = $(this).attr("ingredient");
    var queryURL = "https://tasty.p.rapidapi.com/recipes/detail/search?q=" +
        ingredient + "&api_key=ac032b7765msh7b7ea8d251892bbp18630ejsnfccfef5696ae";
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {

})
    
// javascript/jQuery snippet 
var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://tasty.p.rapidapi.com/recipes/detail?id=5586",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "tasty.p.rapidapi.com",
		"x-rapidapi-key": "ac032b7765msh7b7ea8d251892bbp18630ejsnfccfef5696ae"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});
    
    
















    
    
    
    
    







