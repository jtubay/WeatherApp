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
        //$("#temp").text(response.main.temp)
        // var widget = show(response);
        // $("#show").html(widget)
        const display = $("#requestedTemp");
        const cityName = $("<h4>").text(response.name + "," +response.sys.country )
        display.append(cityName)



        $("#city").val('');

      });
    } else {
      $("#error").html("field cannot be empty");
    }
  });
  
  // function show(response) {
  //   return "<h2>Current Weather for "+ response.name+ ", " + response.sys.country + "</h2>" + "<h3><strong>Weather</strong>: "+ response.weather[0].main+"</h3>" + "<h3><strong>Description</strong>: "+ response.weather[0].description+"</h3>"+"<h3><strong>Temperature</strong>: "+response.main.temp+"</h3>"+"<h3><strong>Pressure</strong>: "+response.main.pressure+"</h3>"+"<h3><strong>Humidity</strong>: "+response.main.huminity+"</h3>"+ "<h3><strong>Wind Speed</strong>: " +response.wind.speed+ "</h3>" 
  // }
  
  
  // $("#secondBtn").on("click", function() {
  //     var queryURL  = "http://api.openweathermap.org/data/2.5/forecast/daily?q=London&units=metric&cnt=7&appid=166a433c57516f51dfab1f7edaed8413"

  //     $.ajax({
  //         url: queryURL,
  //         method: "GET"
  //     }).then(function(responseTwo){
  //         console.log(responseTwo)
  //     })
  // })

});


