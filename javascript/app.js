$(document).ready(function(){

    $("#news-slider").slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        //autoplay: true,
        autoplaySpeed: 4000,
    });

    $("#hero-slider").slick({
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });



});
var map;
function initMap() {
    let coordinates = {lat: 40.6605757, lng: -73.8962152};
    let location = {lat: 40.675947, lng: -73.902180};

    map = new google.maps.Map(document.getElementById('map'), 
    {
        center: coordinates,
        zoom: 13.0,
        styles:[
            {
              "featureType": "administrative.land_parcel",
              "elementType": "labels",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "poi.business",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "labels.text",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "road.arterial",
              "elementType": "labels",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "labels",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "road.local",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "road.local",
              "elementType": "labels",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            }
          ],
          
    });

    var marker = new google.maps.Marker({
        position: location,
        map: map,
        icon: "images/Pin.png",
      });

}
