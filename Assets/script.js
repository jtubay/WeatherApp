//prepares everything
$(document).ready(function() {
  //onclick
  $("#submitWeather").on("click", function() {
    //sets up the date
    let d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth() + 1;
    let day = d.getDate();
    let CurrentDate = `${month}/${day}/${year}`;

    //takes the city requested from the user input
    var city = $("#city").val();

    //makes sure search input is not empty
    if (city !== "") {
      const queryURL =
        "http://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=imperial" +
        "&appid=166a433c57516f51dfab1f7edaed8413";
      //ajax request
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response);
        //creates and displays info for requested city
        const display = $("#requestedTemp");
        const newerDiv = $("<div>").css({
          border: "solid 4px darkgrey",
          "margin-top": "10px",
          "margin-bottom": "10px",
          "padding-left": "5px"
        });
        const weatherIcon = $("<img>").attr(
          "src",
          "http://openweathermap.org/img/wn/" +
            response.weather[0].icon +
            ".png"
        );
        const cityName = $("<h4>").text(
          response.name + "," + response.sys.country
        );
        const currentD = $("<h6>").text(CurrentDate);
        const temp = $("<p>").text("Temperature: " + response.main.temp);
        const completeTemp = temp.append(weatherIcon);
        const huminity = $("<p>").text("Humidity: " + response.main.humidity);
        const windSpeed = $("<p>").text(
          "Wind speed: " + response.wind.speed + "mph"
        );

        newerDiv.append(cityName, currentD, completeTemp, huminity, windSpeed);
        display.prepend(newerDiv);

        //clears out the city name on the search input field
        $("#city").val("");
      });
    } else {
      //returns error if user leaves search city empty
      $("#error").html("field cannot be empty");
    }
  });
});
