// FETCH "COCKTAIL RECIPE" API
const drinkInput = document.getElementById('search-drink');
const drinkForm = document.getElementById('drinkForm');


// const drinkRecipe = (drinkInput) => {
//     console.log('this function was FIRED')
//     const URL = `https://the-cocktail-db.p.rapidapi.com/search.php?s=${drinkInput}`
//     const optionsDrink = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': '3d36bbf348msh6d60b8e2f12876dp106ce1jsn2c433989fdc0',
//             'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
//         }
//     };
//     fetch(URL, optionsDrink)
//         .then(response => {
//             return response.json();
//         })
//         .then(response => {
//             console.log(response)
//             console.log(response.hits)
//             const recipeArrayDrink = response.hits
//             // foodIng.innerText = response.hits[0].recipe.ingredients[0].text
//             // foodIngOne.innerText = response.hits[0].recipe.ingredients[1].text
//             // foodIngTwo.innerText = response.hits[0].recipe.ingredients[2].text
//             for(let i=0; i<5; i++) {
//                 let recipe = recipeArrayDrink[i].recipe
//                 let cardColumn = document.getElementById('card-column')

//                 let htmlString = `<div class="card light-green lighten-1">
//                 <div class="card-image"> 
//                 <img src="${recipe.image}"/>
//                 <span class="card-title"></span>
//                 </div>
//                 <div id="card-info"  class="card-content white-text">
//                     <span class="card-title">${recipe.label}</span>
//                     <div id="foodIng"><p id="itemone"></p></div>
//                     <div id="foodIngOne"><p id="itemone"></p></div>
//                     <div id="foodIngTwo"><p id="itemone"></p></div>
//                     <div  id="url"><a href="${recipe.url}" target="_blank">Link to Recipe</a></div>
//                     <p id="itemtwo foocCal">${Math.round(recipe.calories)} Calories</p>
                    
//                     <div class="row" id="timerrow">
//                     <div class="col">
//                         <i class="small material-icons">access_time</i>
//                     </div>
//                     <div class="col">
//                         <p id="foodTime">Prep time ${recipe.totalTime} min</p>
//                     </div>
//                     </div>
                    
//                     </div>
//                 </div>`

//                 cardColumn.innerHTML += htmlString 

//                 // foodIng.innerText = recipeObj.recipe.ingredients[0].text
//                 // foodIngOne.innerText = recipeObj.recipe.ingredients[1].text
//                 // foodIngTwo.innerText = recipeObj.recipe.ingredients[2].text
//                 // let imageEl = document.createElement("img")
//                 // imageEl.setAttribute('src',recipeObj.recipe.image)
//                 // let cardInfo = document.getElementById('card-info')
//                 // cardInfo.appendChild(imageEl)
//                 // console.log(response.hits)
//             };
//         })
// }

// drinkForm.addEventListener("submit", function(event){
//     event.preventDefault()
//     event.stopPropagation()
//     console.log(drinkInput.value)
//     drinkRecipe(drinkInput.value)

// })
// const foodInput = document.getElementById('search-food');
// const foodForm = document.getElementById('foodForm')

// const cocktailRecipe = (drinkInput) => {
//      const URL = `https://the-cocktail-db.p.rapidapi.com/search.php?s=${drinkInput}`
//      const optionsDrink = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': '3d36bbf348msh6d60b8e2f12876dp106ce1jsn2c433989fdc0',
//             'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
//         }
//     };
//     const cocktailInfo = fetch(URL, optionsDrink)
//     cocktailInfo.then(response => {
//     return response.json();
//     })
//         .then(response => console.log(response))
// }

// const drinkInput = document.getElementById("searchDrink").value;
// cocktailRecipe(drinkInput)


//const DrinksRecipe = (Drinksinput) => {
	//const URL = `https://the-cocktail-db.p.rapidapi.com/filter.php?i=${drinksinput}`
	//const optionsDrink = {
	//method: 'GET',
	//headers: {
	//	'X-RapidAPI-Key': '3d36bbf348msh6d60b8e2f12876dp106ce1jsn2c433989fdc0',
	//	'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
	//}
//};
//const DrinksInfo = fetch(URL, optionsFood)
//recipeInfo.then(response => {
//return response.json();
//})

fetch('https://the-cocktail-db.p.rapidapi.com/filter.php?i=Gin', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

	const recipeInfo = fetch(URL, optionsFood)
    DrinksInfo.then(response => {
    return response.json();
    });
