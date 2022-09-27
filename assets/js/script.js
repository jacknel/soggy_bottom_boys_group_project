
const apiKey = 'f760c7ee5a3ea340b8611f93e0d3414d'

//retreieve flight information

const getFlightInformation = (number) => {
    const URL = 'http://api.aviationstack.com/v1/flights'
    const FULL_URL = `${URL}?access_key=${apiKey}&flight_number=${number}&flight_status=active`
    const flightTracker = fetch(FULL_URL);
    flightTracker.then((response) => {
    return response.json();
    
    }).then(response => console.log(response))
}
getFlightInformation(1355)



