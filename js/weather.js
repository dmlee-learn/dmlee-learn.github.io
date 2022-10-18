//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
const weatherObject = {
    baseDiv:null
    , lat:0.0
    , lon:0.0
    , alt:0.0
    , API_KEY:'72d69fc428f8539245d7ce15f22552a2'
    , weather_url:''
    , userLang:navigator.language || navigator.userLanguage
    , langCode:'en'
    , init:(baseDiv) => {
        switch(weatherObject.userLang){
            case 'ko' : 
                weatherObject.langCode = 'kr'
            break;
        }
        weatherObject.baseDiv = document.querySelector(`#${baseDiv}`);
        navigator.geolocation.getCurrentPosition(weatherObject.geoSuccessCallback, weatherObject.geoErrorCallback);
    }

    , geoSuccessCallback:(GeolocationPosition) => {
        weatherObject.lat = GeolocationPosition.coords.latitude;
        weatherObject.lon = GeolocationPosition.coords.longitude;
        weatherObject.weather_url = `https://api.openweathermap.org/data/2.5/weather?lat=${weatherObject.lat}&lon=${weatherObject.lon}&appid=${weatherObject.API_KEY}&units=metric&lang=${weatherObject.langCode}`;
        weatherObject.getData(weatherObject.weather_url);
    }

    , geoErrorCallback:(geoDate) => {
        alert('No weather for you');
    }

    , getData:(url) => {
        fetch(url)
         //.then(response => response.json().then(data => console.log(data.name, data.weather[0].main)))
         .then(weatherObject.processingDate)
         .catch(weatherObject.catchGetData);
    }

    , processingDate:(data) => {
        data.json().then(data => {
            const citySpan = document.createElement('span');
            const weatherSpan = document.createElement('span');
            const tempSpan = document.createElement('span');

            var userLang = navigator.language || navigator.userLanguage;

            citySpan.innerText = weatherObject.getCityText(data.name);
            weatherSpan.innerText = data.weather[0].description;
            tempSpan.innerText = data.main.temp;

            weatherObject.baseDiv.appendChild(citySpan);
            weatherObject.baseDiv.appendChild(weatherSpan);
            weatherObject.baseDiv.appendChild(tempSpan);
        });
    }

    , catchGetData:(data) => {
        console.log(data);
    }

    , getCityText:(name) => {
        switch(weatherObject.userLang) {
            case 'ko':
                if('busan' === name.toLowerCase()) name = '부산';
                else if ('seoul' === name.toLowerCase()) name = '서울';
            break;
        }
        return name;
    }
};