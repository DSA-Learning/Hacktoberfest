document.addEventListener("DOMContentLoaded", function() {
  var cityInput = $("#city");
  var cityButton = $("#button");

  function loadWeather() {
    var cityName = cityInput.val();
    var weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=metric&appid=dbe98c6eabaf54fa682fbca51cdedf80';
    $.ajax({
      url: weatherUrl
    }).done(function(response) {
      console.log(response)
      showWeather(response);

    }).fail(function(error) {
      alert("Enter a valid location")
    })
  }

  function loadPhoto() {
    var cityName = cityInput.val();

    var imageUrl = "https://pixabay.com/api/?key=6693953-e4507e0a76d195de0ac10cf8f&q=" + cityName + "&image_type=photo";
    $.ajax({
      url: imageUrl
    }).done(function(response) {
      console.log(response)
      showPhoto(response)
    }).fail(function(error) {
      console.log("Error")
    })
  }
  function showPhoto(response) {
    $(".cityPhoto").html("<img src=" + response.hits[Math.floor(Math.random() * response.hits.length)].webformatURL + "/>")

  }
  function showWeather(response) {
    var firstDiv = $(".firstDiv h1");
    firstDiv.text(response.name)
    var weatherIcon = $(".weatherIcon");
    var todayBg = $(".todayBox");
    if (response.weather[0].description == "broken clouds") {
      weatherIcon.html('<img id="theImg" src="images/cloudy.png" />')
      todayBg.css("background", "url('./images/fewclouds.png') no-repeat center/cover")
    } else if (response.weather[0].description == "scattered clouds") {
      weatherIcon.html('<img id="theImg" src="images/cloudy.png" />')
      todayBg.css("background", "url('./images/fewclouds.png') no-repeat center/cover")
    } else if (response.weather[0].description == "light intensity shower rain") {
      weatherIcon.html('<img id="theImg" src="images/storm.png" />')
      todayBg.css("background", "url('./images/rain.jpg') no-repeat center/cover")
    } else if (response.weather[0].description == "clear sky") {
      weatherIcon.html('<img id="theImg" src="images/sun.png" />')
      todayBg.css("background", "url('./images/sun.jpg') no-repeat center/cover")
    } else if (response.weather[0].description == "light rain") {
      weatherIcon.html('<img id="theImg" src="images/storm.png" />')
      todayBg.css("background", "url('./images/rain.jpg') no-repeat center/cover")
    } else if (response.weather[0].description == "few clouds") {
      weatherIcon.html('<img id="theImg" src="images/cloudy.png" />')
    } else if (response.weather[0].description == "mist") {
      weatherIcon.html('<img id="theImg" src="images/cloudy.png" />')
      todayBg.css("background", "url('./images/mist.jpg') no-repeat center/cover")
      firstDiv.css("color", "darkblue")
      todayBg.css("opacity", "0.8")
    } else if (response.weather[0].description == "fog") {
      weatherIcon.html('<img id="theImg" src="images/cloudy.png" />')
      todayBg.css("background", "url('./images/mist.jpg') no-repeat center/cover")
      firstDiv.css("color", "#404040")
      todayBg.css("opacity", "0.9")
    } else if (response.weather[0].description == "rain") {
      weatherIcon.html('<img id="theImg" src="images/cloudy.png" />')
      todayBg.css("background", "url('./images/rain.jpg') no-repeat center/cover")
    } else {
      console.log("brak obrazka")
    }
    var secondDiv = $(".secondDiv").css("fontSize", "30");
    secondDiv.text(Math.ceil(response.main.temp) + "°")
    var aboutbox = $(".aboutTitle")
    aboutbox.text(response.name)
    var weatherDesc = $(".weatherDescription")
    weatherDesc.html('<img id="theImg" src="./images/clouds.png" />' + response.weather[0].description)
    var hum = $(".humidity")
    hum.html('<img id="theImg" src="./images/sunicon.png" />' + response.main.humidity + " %")
    var wind = $(".wind")
    wind.html('<img id="theImg" src="./images/windy.png" />' + response.wind.speed + " m/s")
    var press = $(".pressure")
    press.html('<img id="theImg" src="./images/pressure.png" />' + response.main.pressure + " hPa")
  }
  cityButton.on("click", loadWeather);
  cityButton.on("click", loadPhoto);
  //      function viewWeather(elem) {
  //    for(var i = 0 ; i < elem; i++) {
  //        var li = $('<li>').text(elem.clouds);
  //        var h3 = $('<h3>').text(elem.name);
  //        addThis.append(li);
  //       addThis.append(h3);
  //    };
  //  }
  //    viewWeather();
})

/* MOBILE */
