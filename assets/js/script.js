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
        foodIng.innerText = response.hits[0].recipe.ingredients[0].text
        foodIngOne.innerText = response.hits[0].recipe.ingredients[1].text
        foodIngTwo.innerText = response.hits[0].recipe.ingredients[2].text
        recipeArray.forEach(recipeObj => {
            console.log(response.hits)
        });
    })
}

foodForm.addEventListener("submit", function(event){
    event.preventDefault()
    event.stopPropagation()
    console.log(foodInput.value)
    foodRecipe(foodInput.value)

})






