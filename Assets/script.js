$(document).ready(function() {
  $("#submitWeather").on("click", function() {
    var city = $("#city").val();

    if (city !== "") {
      const queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&units=imperial" +
      "&appid=166a433c57516f51dfab1f7edaed8413"
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response);
  
        const display = $("#requestedTemp");
        const newerDiv = $("<div>").css({"border": "solid 4px darkgrey", "margin-top":"10px", "margin-bottom":"10px", "padding-left": "5px"})
        const cityName = $("<h4>").text(response.name + "," +response.sys.country )
        const temp = $("<p>").text("Temperature: " + response.main.temp)
        const huminity = $("<p>").text("Humidity: " + response.main.humidity)
        const windSpeed = $("<p>").text("Wind speed: " + response.wind.speed + "mph")
        newerDiv.append(cityName, temp, huminity, windSpeed)
        display.prepend(newerDiv)



        $("#city").val('');

      });
    } else {
      $("#error").html("field cannot be empty");
    }
  });
  

});


