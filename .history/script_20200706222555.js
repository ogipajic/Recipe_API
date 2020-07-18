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
    
// javascript/jQuery snippet of the code below
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
    
    
 // node.js code snippet   
    var unirest = require("unirest");

var req = unirest("GET", "https://tasty.p.rapidapi.com/recipes/detail");

req.query({
	"id": "5586"
});

req.headers({
	"x-rapidapi-host": "tasty.p.rapidapi.com",
	"x-rapidapi-key": "ac032b7765msh7b7ea8d251892bbp18630ejsnfccfef5696ae",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});
















    
    
    
    
    







