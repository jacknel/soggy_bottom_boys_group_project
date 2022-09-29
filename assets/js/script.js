
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c7285d3659msh3dd7c4d20367162p17ebc9jsn9122b7f2e83c',
		'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
	}
};



const hotelListing = (city) => {
    const URL = `https://hotels4.p.rapidapi.com/locations/v2/search?query=${city}&locale=en_US&currency=USD`
    const hotelInfo = fetch(URL, options)
    hotelInfo.then(response => {
    return response.json();
    })
    .then(response => console.log(response))
}

hotelListing('Dallas')
