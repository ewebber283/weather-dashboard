const cityFormEl = document.querySelector('#city-form')
const cityInputEl = document.querySelector('#city')
const cityContainerEl = document.querySelector('#cities-container')
const citySearchTerm = document.querySelector('#city-search-term')

 /*getCities = (city) => {
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityInputEl.value + '&appid=61f172bd2a4837729bfd40bf2e1005cb&units=imperial'
    fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {
            console.log(data);
        })
    })
} */

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
