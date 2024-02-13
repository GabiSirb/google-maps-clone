const token = 'pk.eyJ1IjoiZ2FicmllbHNpcmIiLCJhIjoiY2xyOWZieDFmMDBmNjJrcnZ0NzB5bjJ0YiJ9.A37zj4N-0_SEjrFGFobGUA'



  navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {enableHighAccuracy: true})

function successLocation(position){
setupMap([position.coords.longitude, position.coords.latitude])
}

 function setupMap(center){
    mapboxgl.accessToken = token
    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: center, 
    zoom: 14, 
    });

    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav,);
    let directions = new MapboxDirections({
        accessToken: token,
      });
    
    
      map.addControl(directions, 'top-left')
 }

function errorLocation() {
    console.log("error")
}