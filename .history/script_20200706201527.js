$(document).ready (function() {
});

function buildQueryURL() {
    var queryURL = "https://tasty.p.rapidapi.com/recipes/detail";

    var queryParams = { "api-key": "ac032b7765msh7b7ea8d251892bbp18630ejsnfccfef5696ae" };

    queryParams.q = $("#ingredient")
        .val()
        .trim();  
    
        console.log("---------------\nURL: " + queryURL + "\n---------------");
console.log(queryURL + $.param(queryParams));
return queryURL + $.param(queryParams);
        
}