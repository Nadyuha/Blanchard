ymaps.ready(init);
    function init(){
        var myMap = new ymaps.Map("map", {
            center: [55.758468, 37.601088],//[55.75896456895514,37.602839999999986]
            zoom: 14
        });


var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
  iconLayout: 'default#image',
  iconImageHref: 'img/EllipseMap.svg',
  iconImageSize: [20, 20],
  iconImageOffset: [-2.8, -40]
});

myMap.geoObjects.add(myPlacemark);
myMap.controls.remove('zoomControl');
myMap.controls.remove('rulerControl');
myMap.controls.remove('geolocationControl');
myMap.controls.remove('searchControl');
myMap.controls.remove('routeButtonControl');
myMap.controls.remove('trafficControl');
myMap.controls.remove('typeSelector');
myMap.controls.remove('fullscreenControl');
myMap.controls.remove('routeEditor');
myMap.behaviors.disable('scrollZoom');
}
