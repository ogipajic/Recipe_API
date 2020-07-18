$(document).ready(function() {
    console.log("Lets Eat!");
});


// Search Parameters

var title = null;
var thumbnailURL = null;
var ingredient = null;
var credits = null;
var measurements = null;

//Functions



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
	updatePage(response);

	document.getElementById
});

















