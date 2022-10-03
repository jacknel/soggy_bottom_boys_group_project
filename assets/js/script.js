// FETCH "FOOD RECIPE" API
const foodInput = document.getElementById('search-food');
const foodForm = document.getElementById('foodForm');


const foodRecipe = (foodInput) => {
    const URL = `https://edamam-recipe-search.p.rapidapi.com/search?q=${foodInput}`
    const optionsFood = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '3d36bbf348msh6d60b8e2f12876dp106ce1jsn2c433989fdc0',
            'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
        }
    };
    const recipeInfo = fetch(URL, optionsFood)
    recipeInfo.then(response => {
    return response.json();
    })
    .then(response => {
        console.log(response.hits)
        const recipeArray = response.hits
       
        for(let i=0; i<5; i++) {
            let recipe = recipeArray[i].recipe
            let cardColumn = document.getElementById('card-column')

            let htmlString = `<div class="card light-green lighten-1">
            <div id="item-01">
            <div class="card-image recipeName"> 
            <img src="${recipe.image}"/>
            <span class="card-title"></span>
            </div>
            </div>
            <div id="card-info"  class="card-content white-text">
                <span class="card-title">${recipe.label}</span>
                <div class="divider"></div>
             
                <div  id="url"><a href="${recipe.url}" target="_blank">Link to Recipe</a></div>
                
                <div class="divider"></div>
                <h6>Nutriton</h6>

                <p id="calories">Calories: ${Math.round(recipe.calories)}</p>
                <p>Total Fats: ${Math.round(recipe.digest[0].total)}g</p>
                <p>Protien: ${Math.round(recipe.digest[2].total)}g</p>
                <p>Carbs: ${Math.round(recipe.digest[1].total)}g</p>
                
                <div class="divider"></div>
                <div class="row" id="timerrow">
                  <div class="col">
                    <i class="small material-icons">access_time</i>
                  </div>
                  <div class="col">
                    <p id="foodTime">Prep time ${recipe.totalTime} min</p>
                  </div>
                 
                  
                 
                </div>
                <div class="right-align">
                <button class="btn waves-effect waves-light saveRecipeBtn" type="submit" name="action">Save
                    <i class="material-icons right">save</i>
                </button>
                </div>
            </div>
        </div>`

            cardColumn.innerHTML += htmlString                    

        };
        
    })
    
    $(document).click(".saveRecipeBtn",function (event) {
        event.preventDefault();        
        var value = $(event.target).parent().siblings()[0].textContent
        var key = "SavedFoodRecipie"
            localStorage.setItem(key,value);        
     });
}

foodForm.addEventListener("submit", function(event){
    event.preventDefault()
    event.stopPropagation()
    console.log(foodInput.value)
    foodRecipe(foodInput.value)
})


 
// //Clear 
//  $("#clearBtn").click(function(event) {
//     event.preventDefault;
//     $("").val("");
//     localStorage.clear();
// });






