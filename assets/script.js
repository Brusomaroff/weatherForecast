let weather = {
    "apiKey": "b576240786ddb6fa3d66609978aeb3a3",
    fetchweather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
             + city 
             + "&units=imperial&appid="
             + this.apiKey 
        )
        .then((Response) => Response.json())
        .then((data) => this.displayweather(data));
    },
    displayweather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = "Current weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+ icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°F";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + " mph";
    },
    search: function () {
        this.fetchweather(document.querySelector(".search-bar").value);
    }
};

let futureWeather = {
    "apiKey": "b576240786ddb6fa3d66609978aeb3a3",
    fetchfutureWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/forecast?q="
             + city 
             + "&units=imperial&appid="
             + this.apiKey 
        )
        .then((Response) => Response.json())
        .then((data) => this.displayfutureWeather(data));
    },
    displayfutureWeather: function(data) {
        const date = data.list[3].dt_txt;
        const { icon, description } = data.list[3].weather[0];
        const { temp, humidity } = data.list[3].main;
        const { speed } = data.list[3].wind;
        //console.log(icon,description,temp,humidity,speed)
        document.querySelector(".date1").innerText = date;
        document.querySelector(".icon1").src = "https://openweathermap.org/img/wn/"+ icon + ".png";
        document.querySelector(".description1").innerText = description;
        document.querySelector(".temp1").innerText = temp + "°F";
        document.querySelector(".humidity1").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind1").innerText = "Wind speed: " + speed + " mph";
    },
    search: function () {
        this.fetchfutureWeather(document.querySelector(".search-bar").value);
    }
};

let futureWeather2 = {
    "apiKey": "b576240786ddb6fa3d66609978aeb3a3",
    fetchfutureWeather2: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/forecast?q="
             + city 
             + "&units=imperial&appid="
             + this.apiKey 
        )
        .then((Response) => Response.json())
        .then((data) => this.displayfutureWeather2(data));
    },
    displayfutureWeather2: function(data) {
        const date = data.list[11].dt_txt;
        const { icon, description } = data.list[11].weather[0];
        const { temp, humidity } = data.list[11].main;
        const { speed } = data.list[11].wind;
        //console.log(icon,description,temp,humidity,speed)
        document.querySelector(".date2").innerText = date;
        document.querySelector(".icon2").src = "https://openweathermap.org/img/wn/"+ icon + ".png";
        document.querySelector(".description2").innerText = description;
        document.querySelector(".temp2").innerText = temp + "°F";
        document.querySelector(".humidity2").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind2").innerText = "Wind speed: " + speed + " mph";
    },
    search: function () {
        this.fetchfutureWeather2(document.querySelector(".search-bar").value);
    }
};

let futureWeather3 = {
    "apiKey": "b576240786ddb6fa3d66609978aeb3a3",
    fetchfutureWeather3: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/forecast?q="
             + city 
             + "&units=imperial&appid="
             + this.apiKey 
        )
        .then((Response) => Response.json())
        .then((data) => this.displayfutureWeather3(data));
    },
    displayfutureWeather3: function(data) {
        const date = data.list[19].dt_txt;
        const { icon, description } = data.list[19].weather[0];
        const { temp, humidity } = data.list[19].main;
        const { speed } = data.list[19].wind;
        //console.log(icon,description,temp,humidity,speed)
        document.querySelector(".date3").innerText = date;
        document.querySelector(".icon3").src = "https://openweathermap.org/img/wn/"+ icon + ".png";
        document.querySelector(".description3").innerText = description;
        document.querySelector(".temp3").innerText = temp + "°F";
        document.querySelector(".humidity3").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind3").innerText = "Wind speed: " + speed + " mph";
    },
    search: function () {
        this.fetchfutureWeather3(document.querySelector(".search-bar").value);
    }
};

let futureWeather4 = {
    "apiKey": "b576240786ddb6fa3d66609978aeb3a3",
    fetchfutureWeather4: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/forecast?q="
             + city 
             + "&units=imperial&appid="
             + this.apiKey 
        )
        .then((Response) => Response.json())
        .then((data) => this.displayfutureWeather4(data));
    },
    displayfutureWeather4: function(data) {
        const date = data.list[27].dt_txt;
        const { icon, description } = data.list[27].weather[0];
        const { temp, humidity } = data.list[27].main;
        const { speed } = data.list[27].wind;
        //console.log(icon,description,temp,humidity,speed)
        document.querySelector(".date4").innerText = date;
        document.querySelector(".icon4").src = "https://openweathermap.org/img/wn/"+ icon + ".png";
        document.querySelector(".description4").innerText = description;
        document.querySelector(".temp4").innerText = temp + "°F";
        document.querySelector(".humidity4").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind4").innerText = "Wind speed: " + speed + " mph";
    },
    search: function () {
        this.fetchfutureWeather4(document.querySelector(".search-bar").value);
    }
};

let futureWeather5 = {
    "apiKey": "b576240786ddb6fa3d66609978aeb3a3",
    fetchfutureWeather5: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/forecast?q="
             + city 
             + "&units=imperial&appid="
             + this.apiKey 
        )
        .then((Response) => Response.json())
        .then((data) => this.displayfutureWeather5(data));
    },
    displayfutureWeather5: function(data) {
        const date = data.list[35].dt_txt;
        const { icon, description } = data.list[35].weather[0];
        const { temp, humidity } = data.list[35].main;
        const { speed } = data.list[35].wind;
        //console.log(icon,description,temp,humidity,speed)
        document.querySelector(".date5").innerText = date;
        document.querySelector(".icon5").src = "https://openweathermap.org/img/wn/"+ icon + ".png";
        document.querySelector(".description5").innerText = description;
        document.querySelector(".temp5").innerText = temp + "°F";
        document.querySelector(".humidity5").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind5").innerText = "Wind speed: " + speed + " mph";
    },
    search: function () {
        this.fetchfutureWeather5(document.querySelector(".search-bar").value);
    }
};

document
.querySelector(".search button")
.addEventListener("click", function () {
    weather.search();
    futureWeather.search();
    futureWeather2.search();
    futureWeather3.search();
    futureWeather4.search();
    futureWeather5.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();
        futureWeather.search();
        futureWeather2.search();
        futureWeather3.search();
        futureWeather4.search();
        futureWeather5.search();
    }
});

weather.fetchweather("Orlando")
futureWeather.fetchfutureWeather("Orlando")
futureWeather2.fetchfutureWeather2("Orlando")
futureWeather3.fetchfutureWeather3("Orlando")
futureWeather4.fetchfutureWeather4("Orlando")
futureWeather5.fetchfutureWeather5("Orlando")