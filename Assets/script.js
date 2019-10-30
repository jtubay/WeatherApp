$(document).ready(function() {
  $("#submitWeather").on("click", function() {
    var city = $("#city").val();

    if (city !== "") {
      $.ajax({
        url:
          "http://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=imperial" +
          "&appid=166a433c57516f51dfab1f7edaed8413",
        method: "GET"
      }).then(function(response) {
        console.log(response);
      });
    } else {
      $("#error").html("field cannot be empty");
    }
  });
});
