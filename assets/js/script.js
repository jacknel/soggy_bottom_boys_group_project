// FETCH "FOOD RECIPE" API
const foodInput = document.getElementById('search-food');
const foodForm = document.getElementById('foodForm');

const foodIng = document.getElementById('foodIng');
const foodIngOne = document.getElementById('foodIngOne');
const foodIngTwo = document.getElementById('foodIngTwo');
const foodCal = document.getElementById('foodCal');
const foodTime = document.getElementById('foodTime');


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
        // foodIng.innerText = response.hits[0].recipe.ingredients[0].text
        // foodIngOne.innerText = response.hits[0].recipe.ingredients[1].text
        // foodIngTwo.innerText = response.hits[0].recipe.ingredients[2].text
        for(let i=0; i<5; i++) {
            let recipe = recipeArray[i].recipe
            let cardColumn = document.getElementById('card-column')

            let htmlString = `<div class="card light-green lighten-1">
            <div class="card-image"> 
            <img src="${recipe.image}"/>
            <span class="card-title"></span>
            </div>
            <div id="card-info"  class="card-content white-text">
                <span class="card-title">Recipe Name</span>
                <div id="foodIng"><p id="itemone"></p></div>
                <div id="foodIngOne"><p id="itemone"></p></div>
                <div id="foodIngTwo"><p id="itemone"></p></div>
                <p id="itemtwo foocCal">${Math.round(recipe.calories)} Calories</p>
                
                <div class="row" id="timerrow">
                  <div class="col">
                    <i class="small material-icons">access_time</i>
                  </div>
                  <div class="col">
                    <p id="foodTime">Prep time ${recipe.totalTime} min</p>
                  </div>
                </div>
                
            </div>
        </div>`

            cardColumn.innerHTML += htmlString 

        // foodIng.innerText = recipeObj.recipe.ingredients[0].text
        // foodIngOne.innerText = recipeObj.recipe.ingredients[1].text
        // foodIngTwo.innerText = recipeObj.recipe.ingredients[2].text
        // let imageEl = document.createElement("img")
        // imageEl.setAttribute('src',recipeObj.recipe.image)
        // let cardInfo = document.getElementById('card-info')
        // cardInfo.appendChild(imageEl)
        // console.log(response.hits)
        };
    })
}

foodForm.addEventListener("submit", function(event){
    event.preventDefault()
    event.stopPropagation()
    console.log(foodInput.value)
    foodRecipe(foodInput.value)

})






