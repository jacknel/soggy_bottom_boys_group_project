// // FETCH "COCKTAIL RECIPE" API
const drinkInput = document.getElementById("search-drink");
const drinkForm = document.getElementById("drinkForm");

const cocktailRecipe = (drinkInput) => {
  const URL = `https://the-cocktail-db.p.rapidapi.com/search.php?s=${drinkInput}`;
  const optionsDrink = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "3d36bbf348msh6d60b8e2f12876dp106ce1jsn2c433989fdc0",
      "X-RapidAPI-Host": "the-cocktail-db.p.rapidapi.com",
    },
  };
  const cocktailInfo = fetch(URL, optionsDrink);
  cocktailInfo
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log(response.drinks);
      const drinkArray = response.drinks;

      for (let i = 0; i < 5; i++) {
        let drinkRecipe = drinkArray[i];
        let drinkCardColumn = document.getElementById("drinkCard-column");

        let htmlStringDrink = `<div class="card light-green lighten-1">
            <div class="card-image" id="cocktailName"> 
            <img src="${drinkRecipe.strDrinkThumb}"/>
            <span class="card-title"></span>
			</div>
			<div id="card-info"  class="card-content white-text">
                    <span class="card-title">${drinkRecipe.strDrink}</span>
                    
					<div class="divider"></div>
					
					<ul>
					<h6>Ingrediants</h6>
					<li>${drinkRecipe.strIngredient1}</li>
					<li>${drinkRecipe.strIngredient2}</li>
					<li>${drinkRecipe.strIngredient3}</li>
					<li>${drinkRecipe.strIngredient4}</li>
					<li>${drinkRecipe.strIngredient5}</li>
					</ul>
				
					<p>Glass Type: ${drinkRecipe.strGlass}</p>
					
					<div class="divider"></div>
					<div class="col">
                    <h6>Instructions</h6>
					<p>${drinkRecipe.strInstructions}</p>
					</div>



					<div  class="right-align">
                		<button class="btn waves-effect waves-light saveDrinkBtn" type="submit" name="action">Save
                    		<i class="material-icons right">save</i>
                		</button>
                	</div>

            </div>
			
        </div>`;
        drinkCardColumn.innerHTML += htmlStringDrink;

        var savedrinkBtn = document.querySelectorAll(".saveDrinkBtn");
        savedrinkBtn.forEach((element) => {
          element.addEventListener("click", function (event) {
            console.log($(event.target));
            event.preventDefault();
            var valueDrink = $(event.target).parent().siblings()[0].textContent;
            console.log($(event.target).parent().siblings()[0].textContent);
            var keyDrink = "SavedDrinkRecipie";
            localStorage.setItem(keyDrink, valueDrink);
          });
        });
      }
    });
};

drinkForm.addEventListener("submit", function (event) {
  event.preventDefault();
  event.stopPropagation();
  console.log(drinkInput.value);
  cocktailRecipe(drinkInput.value);
});

// //Clear
//  $("#clearBtn").click(function(event) {
//     event.preventDefault;
//     $("").val("");
//     localStorage.clear();
// });
