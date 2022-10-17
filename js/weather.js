//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
const weatherObject = {
    baseDiv:null
    , lat:0.0
    , lon:0.0
    , alt:0.0
    , API_KEY:'72d69fc428f8539245d7ce15f22552a2'
    , weather_url:''
    , init:(baseDiv) => {
        weatherObject.baseDiv = baseDiv;        
        navigator.geolocation.getCurrentPosition(weatherObject.geoSuccessCallback, weatherObject.geoErrorCallback);
    }

    , geoSuccessCallback:(GeolocationPosition) => {
        weatherObject.lat = GeolocationPosition.coords.latitude;
        weatherObject.lon = GeolocationPosition.coords.longitude;
        weatherObject.weather_url = `https://api.openweathermap.org/data/2.5/weather?lat=${weatherObject.lat}&lon=${weatherObject.lon}&appid=${weatherObject.API_KEY}`;
        console.log(weatherObject.weather_url);
    }

    , geoErrorCallback:(geoDate) => {
        alert('No weather for you');
    }

    , getData:() => {
        let weatherData = fetch(weatherObject.weather_url);
        console.log(weatherData);
    }
};