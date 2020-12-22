$(document).ready(function() {
  // get location from user's IP address
  $.getJSON("https://ipinfo.io", function(info) {
    var locString = info.loc.split(", ");
    var latitude = parseFloat(locString[0]);
    var longitude = parseFloat(locString[0]);
    $("#location").html(
      info.city + ", " + info.region + ", " + info.country
    );
    $("#clientip").html(
      info.ip
    );

    // get weather using OpenWeatherMap API
    $.getJSON(
      "https://api.openweathermap.org/data/2.5/weather?lat=" +
        latitude +
        "&lon=" +
        longitude +
        "&units=metric&APPID=c9d1024b1304071dddfa30661e69da3d",
      function(data) {
        var windSpeedkmh = Math.round(data.wind.speed * 3.6);
        var Celsius = Math.round(data.main.temp);
        var iconId = data.weather[0].icon;
        var weatherURL = "https://openweathermap.org/img/w/" + iconId + ".png";

        var iconImg = "<img src='" + weatherURL + "'>";
        $("#sky-image").html(iconImg);
        $("#weather-id").html(data.weather[0].description);

        $("#temperature").html(Celsius);
        $("#toFahrenheit").click(function() {
          $("#temperature").html(Math.round(9 / 5 * Celsius + 32));
          $("#wind-speed").html(Math.round(windSpeedkmh * 0.621) + " mph");
        });

        $("#wind-speed").html(windSpeedkmh + " km/h");
        $("#humidity").html(data.main.humidity + " %");
      }
    );
  });
});
