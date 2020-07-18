$(document).ready(function () {
    console.log("Lets Eat!");
  });
  
  function updatePage(recipeData) {
    
    var numRecipes = $("#recipe-count").val();
    console.log(recipeData);
    
    for (let i = 0; i < numRecipes; i++) {
      
        // Get specific recipe info for our current index
      
        var recipe = recipeData.recipes[i];
      
        // Increase the recipeCount (track recipe # - starting at 1)
      
        var recipeCount = i + 1;
      
        // If the recipe has a title, log and append to recipeList
      
        var title = recipe.title;
      
        var recipeList =
        "<ul class='list-group'>" + " <li class='list-group-item recipeTitle'>";
      
        if (title) {
        console.log(title);
        
        recipeList +=
          "<span class='label label-primary'>" +
          recipeCount +
          ".  </span>" +
          title;
      }
      
      // If the recipe has a summary, log and append to recipeList
      
      var summary = recipe.summary;
      
      if (summary) {
        console.log(summary);
        recipeList += "<h5>" + summary + "</h5>";
      }
      
      // Log instructions, and append to document if it exists
      
      var instructions = recipe.instructions;
      
      if (instructions) {
        recipeList += "<h5>Section: " + instructions + "</h5>";
      }
      
      // Log ingredients
      
      var extendedIngredients = Object.values(recipe.extendedIngredients);
      
      if (extendedIngredients) {
        
        recipeList +=
          "<h5>" +
          "There are " +
          extendedIngredients.length +
          " extended ingredients. </h5>";
      }
      
      // Append and log URL
      
      var sourceURL = recipe.sourceUrl;
      
      if (sourceURL) {
        recipeList += "<a href='" + sourceURL + "'>" + sourceURL + "</a>";
      }
      $("#recipe-section").append(recipeList);
    }
  }

  function clear() {
      $("#recipe-section").empty();
  }

  // .on("click") function associated with the Search Button
  
  $("#run-search").on("click", function (event) {
    event.preventDefault();
    
    clear();
    
    var ingredient = $("#main-ingredient").val().trim();
    
    //If user provides a second ingredient
    
    var ingredient1 = $("#ingredient-2").val().trim();
    
    // If a user provides a third ingredient
    var ingredient2 = $("#ingredient-3").val().trim();
    
    // If a user provides a fourth ingredient
    
    var ingredient3 = $("#ingredient-4").val().trim();
    
    var tag =
      ingredient + "," + ingredient1 + "," + ingredient2 + "," + ingredient3;
    
      var settings = {
      async: true,
      crossDomain: true,
      url:
        "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=10&tags=" +
        tag,
      method: "GET",
      headers: {
        "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        "x-rapidapi-key": "ac032b7765msh7b7ea8d251892bbp18630ejsnfccfef5696ae",
      },
    };
    
    $.ajax(settings).done(function (response) {
      console.log(response);
      updatePage(response);
    });

    function newFunction() {
        document.getElementById("newForm").reset();
    }
  });
  
  
 
 
 
 
 
 
 
 