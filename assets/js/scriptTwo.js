// // FETCH "COCKTAIL RECIPE" API
const drinkInput = document.getElementById('search-drink');
const drinkForm = document.getElementById('drinkForm');


const cocktailRecipe = (drinkInput) => {
	const URL = `https://the-cocktail-db.p.rapidapi.com/search.php?s=${drinkInput}`
	const optionsDrink = {
	   method: 'GET',
	   headers: {
		   'X-RapidAPI-Key': '3d36bbf348msh6d60b8e2f12876dp106ce1jsn2c433989fdc0',
		   'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
	   }
   };
   const cocktailInfo = fetch(URL, optionsDrink)
   cocktailInfo.then(response => {
   return response.json();
   })	   
.then(response => {
	console.log(response.drinks)
	const drinkArray = response.drinks

	for(let i=0; i<5; i++) {
		let drinkRecipe = drinkArray[i]
		let drinkCardColumn = document.getElementById('drinkCard-column')

		let htmlStringDrink = `<div class="card light-green lighten-1">
            <div class="card-image"> 
            <img src="${drinkRecipe.strDrinkThumb}"/>
            <span class="card-title"></span></div>
			<div id="card-info"  class="card-content white-text">
                    <span class="card-title">${drinkRecipe.strDrink}</span>
                    
					<h6>Ingrediants</h6>
					<p>${drinkRecipe.strIngredient1}</p>
					<p>${drinkRecipe.strIngredient2}</p>
					<p>${drinkRecipe.strIngredient3}</p>
					<p>${drinkRecipe.strIngredient4}</p>
					<p>${drinkRecipe.strIngredient5}</p>

					<p>Glass Type: ${drinkRecipe.strGlass}</p>
					
                  
                    <h6>Instructions</h6>
					<p>${drinkRecipe.strInstructions}</p>
					                                      
            </div>
      
        </div>`
		drinkCardColumn.innerHTML += htmlStringDrink
				};

	        })
		}			
		



drinkForm.addEventListener("submit", function(event){
    event.preventDefault()
    event.stopPropagation()
    console.log(drinkInput.value)
    cocktailRecipe(drinkInput.value)

})