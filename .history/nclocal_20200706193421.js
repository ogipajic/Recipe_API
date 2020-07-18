// Tasty API key #1 - "List supported tags names for filtering in recipes/list API"

var unirest = require("unirest");

var req = unirest("GET", "https://tasty.p.rapidapi.com/tags/list");

req.headers({
	"x-rapidapi-host": "tasty.p.rapidapi.com",
	"x-rapidapi-key": "ac032b7765msh7b7ea8d251892bbp18630ejsnfccfef5696ae",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});

// Tasty API key #2 - "Get recipe detail, such as: ingredients, nutrition info, prep etc."

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

// Tasty API #3 - Not sure if we'll need this one or not. "List latest feeds about new food, recipes etc."

var unirest = require("unirest");

var req = unirest("GET", "https://tasty.p.rapidapi.com/feeds/list");

req.query({
	"size": "20",
	"timezone": "%2B0700",
	"vegetarian": "false",
	"from": "0"
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