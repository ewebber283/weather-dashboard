const cityFormEl = document.querySelector('#city-form')
const cityInputEl = document.querySelector('#city')

getCities = (city) => {
    const singleApiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=61f172bd2a4837729bfd40bf2e1005cb&units=imperial'
    const fiveDayApiUrl ='https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=61f172bd2a4837729bfd40bf2e1005cb&units=imperial' 
    fetch(singleApiUrl).then(function(response) {
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

getFiveDay = (city) => {
    const fiveDayApiUrl ='https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=61f172bd2a4837729bfd40bf2e1005cb&units=imperial' 
    fetch(fiveDayApiUrl).then(function(response) {
        response.json().then(function(data) {
            console.log(data);
            $('#fiveDay').html("<h5>5-Day Forecast:</h5>").append("<div class=\"row\">");
           
            for(let i = 0;i<5;i++) {
                const fiveCardTitle = $('<h3>').addClass('card-title').text(data.city.name);
                const fiveIcon = $("<img>").attr("src", "https://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png");
                const fiveCard = $('<div>').addClass('card')
                const fiveCardBody = $('<div>').addClass('card-body');
        
        
                const fiveTemp = $("<p>").addClass("card-text").text("Temperature: " + data.list[i].main.temp + "°F");
                const fiveHumidity = $("<p>").addClass("card-text").text("Humidity: " + data.list[i].main.humidity + "%");
                const fiveWindSpeed = $("<p>").addClass("card-text").text("Wind Speed: " + data.list[i].wind.speed + " MPH");
                const fiveColumn = $('<div>').addClass('')

                fiveColumn.append(fiveCard.append(fiveCardBody.append(fiveCardTitle,fiveIcon,fiveTemp,fiveHumidity,fiveWindSpeed)));
                $('#fiveDay .row').append(fiveColumn);
            }
        })
    })
} 

formSubmitHandler = (event) => {
    event.preventDefault();

    const city = cityInputEl.value.trim();

    if(city) {
        getCities(city)
        getFiveDay(city)
        cityInputEl.value = '';
    } else {
        alert('Please Enter the Name of a City!')
    }
}


cityFormEl.addEventListener('click', formSubmitHandler); 
