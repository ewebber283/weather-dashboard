const cityFormEl = document.querySelector('#city-form')
const cityInputEl = document.querySelector('#city')

 getCities = (city) => {
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=61f172bd2a4837729bfd40bf2e1005cb&units=imperial'
    fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {
            console.log(data);
            //card elements
            const cardTitle = $('<h3>').addClass('card-title').text(data.name);
            const icon = $("<img>").attr("src", "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
            const card = $('<div>').addClass('card')
            const cardBody = $('<div>').addClass('card-body');
        
        // weather elements
            const temp = $("<p>").addClass("card-text").text("Temperature: " + data.main.temp + "°F");
            const humidity = $("<p>").addClass("card-text").text("Humidity: " + data.main.humidity + "%");
            const windSpeed = $("<p>").addClass("card-text").text("Wind Speed: " + data.wind.speed + " MPH");

            cardTitle.append(icon)
            cardBody.append(cardTitle, temp, humidity, windSpeed);
            card.append(cardBody);
            $('#cityName').append(card);
        })
    })
} 


formSubmitHandler = (event) => {
    event.preventDefault();

    const city = cityInputEl.value.trim();

    if(city) {
        getCities(city)
        cityInputEl.value = '';
    } else {
        alert('Please Enter the Name of a City!')
    }
}


cityFormEl.addEventListener('click', formSubmitHandler); 
