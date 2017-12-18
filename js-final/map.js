var weather;
var baseUrl = 'http://api.openweathermap.org/data/2.5/weather?q=';
var city = 'Seoul';
var apiKey = '&appid=7d67c82d98a4fb38fc21fcba4f064a7a';
var metric = '&units=metric';
var inputCity;



function initMap() {
    
    var seoul = { lat : 37.566535, lng : 126.977969};
    
    var choices = {
        zoom : 2,
        center : seoul
    }
    
    var myMap = new google.maps.Map(document.getElementById('map'), choices);
    
//    google.maps.event.addListener(myMap, 'click', function(event) {
//        addMarker({coords : event.latLng});
//    });
    
    var markers = [
        {
            coords : {lat : 37.566535, lng : 126.977969},
            content : 
            '<h3>Seoul</h3><button id="submit" onclick="weatherModal()">View Weather</button>'
        },
        {
            coords: {lat : 40.736995, lng : -73.992221},
            iconImg : 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
            content : '<h3>New York</h3><button id="submit" onclick="weatherModal()">View Weather</button>'
        },
        {
            coords: {lat : 48.856614, lng : 2.352222},
            content : '<h3>Paris</h3><button id="submit" onclick="weatherModal()">View Weather</button>'
        },
        {
            coords: {lat : 51.507351, lng : -0.127758},
            content : '<h3>London</h3><button id="submit" onclick="weatherModal()">View Weather</button>'
        },
        {
            coords: {lat : 39.904200, lng : 116.407396},
            content : '<h3>Beijing</h3><button id="submit" onclick="weatherModal()">View Weather</button>'
        },
        {
            coords: {lat : 31.945367, lng : 35.928372},
            content : '<h3>Amman</h3><button id="submit" onclick="weatherModal()">View Weather</button>'
        },
        {
            coords: {lat : 33.312806, lng : 44.361488},
            content : '<h3>Baghdad</h3><button id="submit" onclick="weatherModal()">View Weather</button>'
        },
        {
            coords: {lat : 41.008238, lng : 28.978359},
            content : '<h3>Istanbul</h3><button id="submit" onclick="weatherModal()">View Weather</button>'
        },
        {
            coords: {lat : 30.044420, lng : 31.235712},
            content : '<h3>Cairo</h3><button id="submit" onclick="weatherModal()">View Weather</button>'
        },
        {
            coords: {lat : 31.768319, lng : 35.213710},
            content : '<h3>Jerusalem</h3><button id="submit" onclick="weatherModal()">View Weather</button>'
        },
        {
            coords: {lat : 41.299496, lng : 69.240073},
            content : '<h3>Tashkent</h3><button id="submit" onclick="weatherModal()">View Weather</button>'
        },
        {
            coords: {lat : 31.628871, lng : 65.737175},
            content : '<h3>Kandahar</h3><button id="submit" onclick="weatherModal()">View Weather</button>'
        },
        {
            coords: {lat : 13.367097, lng : 103.844813},
            content : '<h3>Siemreab</h3><button id="submit" onclick="weatherModal()">View Weather</button>'
        },
        {
            coords: {lat : 13.756331, lng : 100.501765},
            content : '<h3>Bangkok</h3><button id="submit" onclick="weatherModal()">View Weather</button>'
        },
        {
            coords: {lat : 35.689487, lng : 139.691706},
            content : '<h3>Tokyo</h3><button id="submit" onclick="weatherModal()">View Weather</button>'
        },
        {
            coords: {lat : 34.052234, lng : -118.243685},
            content : '<h3>Los Angeles</h3><button id="submit" onclick="weatherModal()">View Weather</button>'
        },
        {
            coords: {lat : 36.169941, lng : -115.139830},
            content : '<h3>Las Vegas</h3><button id="submit" onclick="weatherModal()">View Weather</button>'
        },
        {
            coords: {lat : 37.774929, lng : -122.419416},
            content : '<h3>San Francisco</h3><button id="submit" onclick="weatherModal()">View Weather</button>'
        },
        {
            coords: {lat : 27.717245, lng : 85.323960},
            content : '<h3>Kathmandu</h3><button id="submit" onclick="weatherModal()">View Weather</button>'
        }
    ];
    
    var seoul = markers[0];
    console.log(seoul);
    
    for (var i = 0; i < markers.length; i++) {
        addMarker(markers[i]);
    }
        
    function addMarker(props) {
        var myMarker = new google.maps.Marker({
            position : props.coords,
            clickable : true,
            draggable : true,
            animation: google.maps.Animation.DROP,
            map : myMap
//            icon : props.iconImg
        });
        
        if (props.iconImg) {
            myMarker.setIcon(props.iconImg);
        }
        
        myMarker.info = new google.maps.InfoWindow({
            content : props.content
        });
//            myMarker.addListener('click', openPop);
        google.maps.event.addListener(myMarker, 'click', function() {
            myMarker.info.open(myMap, myMarker);
        });  
    }  
}


function weatherModal() {
    $('.modal').css('display', 'block')
}

function closeModal() {
    $('.modal').css('display', 'none')
}

function setup() {
    var canvas = createCanvas(10, 10);
    canvas.position(-1000,-1000);
    
//    var canvas = createCanvas(656, 354);
//    canvas.parent('modal-content');
//    background(255, 0, 200);
    
    var button = select('#submit');
    button.mousePressed(weatherCity);
    
    inputCity = select('#city');
    
}

function weatherCity() {
    var url = baseUrl + inputCity.value() + apiKey + metric;
    loadJSON(url, getData);
}

function getData(data) {
    console.log(data);
    weather = data;
}

function draw() {
    
    if (weather) {
        
        var mainW = weather.weather[0].main;
        var description = weather.weather[0].description;
        var temp = weather.main.temp;
        var humidity = weather.main.humidity;
        var wind = weather.wind.speed;
        var cloud = weather.clouds.all;
        var icon = weather.weather[0].icon;
        
        $('#weatherMain').text(mainW);
        $('#desc').text(description);
        $('.weatherTemp').text(temp);
        $('.weatherHumid').text(humidity);
        $('.weatherWind').text(wind);
        $('.weatherCloud').text(cloud);
        $('#weatherIcon').html("<img src='http://openweathermap.org/img/w/" + icon + ".png' />");
    
        $('#modal-content').css('background-image', 'url(assets/' + mainW + '.png)');
    }

}


    