
var apiAddr = 'https://cors-anywhere.herokuapp.com/http://api.weatherstack.com/current?access_key=4950b33d03bcf1031a0cb8ec860de3fd&query=Paris';

function getValues(api){
    var req = new XMLHttpRequest();
    req.open('GET', api);
    req.responseType='json';
    req.send()
    return req;
}

var request = getValues(apiAddr);

var values = request.onload = function() {
    var n = request.response.location.name;
    var c = request.response.location.country;
    var r = request.response.location.region;
    var t =  request.response.location.localtime;
    var h = request.response.current.humidity;
    var temp = request.response.current.temperature;
    var i = request.response.current.weather_icons;
    return showValues(n, c, r, t, h, temp, i);
}

function showValues(name, country, region, time, humidity, temperature, img)
{
    document.getElementById('card-head').innerHTML= ('<img src="' + img + '">');
    document.getElementById('weather').innerHTML= ('humidity: ' + humidity + '<br>temperature: ' + temperature);
    document.getElementById('name').innerHTML= (name + ' ' + country + ' ' + region);
    document.getElementById('date').innerHTML= time;

}

