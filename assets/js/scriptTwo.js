// FETCH "COCKTAIL RECIPE" API
cocktailRecipe = (alcohol) => {
     const URL = `https://the-cocktail-db.p.rapidapi.com/search.php?s=${alcohol}`
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
        .then(response => console.log(response))
}

    cocktailRecipe('vodka')