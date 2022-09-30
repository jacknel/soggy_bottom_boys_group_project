// FETCH "FOOD RECIPE" API
const foodRecipe = (food) => {
    const URL = `https://edamam-recipe-search.p.rapidapi.com/search?q=${food}`
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
    .then(response => console.log(response))
}

foodRecipe('pizza')



