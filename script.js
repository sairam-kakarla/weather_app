$(document).ready(function(){
    $("#get-weather").submit(function(event){
        performSearch(event);
    });

});
function performSearch(event){
    var request;
    event.preventDefault();
    request=$.ajax({
        url: 'https://api.openweathermap.org/data/2.5/weather',
        type: "GET",
        data: {
             q: $("#city").val(),
             appid: 'fccee81c8b1c5cdb78f01e80c743d7b9',
             units: 'metric'
        } 
    });
    request.done(function(response){
     formatSearch(response);   
    })
}

function formatSearch(jsonObject){
    var city=jsonObject.name;
    var city_weather=jsonObject.weather[0].main;
    var city_temp=jsonObject.main.temp;
    var pressure=jsonObject.main.pressure;
    var humidity=jsonObject.main.humidity;
    var sunrise=new Date(jsonObject.sys.sunrise*1000);
    var sunset=new Date(jsonObject.sys.sunset*1000);

    $("#city-name").text("City: "+city);
    $("#city-weather").text("Weather: " +city_weather);
    $("#city-temp").html("Average Temp: "+city_temp+" &deg C");
    $("#pressure").text("Pressure: "+pressure+" hPa");
    $("#humidity").text("Humidity: "+humidity+" %");
    $("#sunrise").text("Sunrise: "+sunrise.getHours()+":"+sunrise.getMinutes()+":"+sunrise.getSeconds()+" GMT+0530 (India Standard Time)")
    $("#sunset").text("Sunset: "+sunset.getHours()+":"+sunset.getMinutes()+":"+sunset.getSeconds()+" GMT+0530 (India Standard Time)");
    
}