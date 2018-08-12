
//3.377176, -73.495287


 config = {
    apiKey: "AIzaSyDOfLv_05Bt6C2JRnD3UhfH7c2LrY6NfbE",
    authDomain: "porbarfirebase.firebaseapp.com",
    databaseURL: "https://porbarfirebase.firebaseio.com",
    projectId: "porbarfirebase",
    storageBucket: "porbarfirebase.appspot.com",
    messagingSenderId: "393018993566"
  };
  firebase.initializeApp(config);



var general;

var nodeusersit="usertsit";

traerdef(nodeusersit);






function traerdef(stnode){ 
  firebase.database().ref().child(String(stnode)).
  once('value').then(function(snapshot) {
    var username = (snapshot.val() && snapshot.val().username) 
    || 'Anonymous';  general=snapshot.val();//generalkey=snapshot.key;
  });

}
//4.646993, -74.153212
var varemail="";
var varpass="";
var miname="";
var varcarlat=0;
var varcarlng=0;

var lemail="";
var lpass="";

//setTimeout(login, 2000);
function getidvalor(stl){
return document.getElementById(String(stl)).value;

}

function escribep(latcar,lngcar){
    var d = new Date();
document.getElementById("idp").innerHTML = "lat car: "+latcar +" "+" lng car: "+lngcar +" Colombia "+d ;

}
function login(){
console.log(general); 

lemail=getidvalor("idemail");
lpass=getidvalor("idpass");
for(var i in general){
    if(general[i].email==lemail&&general[i].pass==lpass){
    
varcarlat=parseFloat(general[i].lat);
varcarlng=parseFloat(general[i].lng);

  document.getElementById("idlog").style.display = "none";
  document.getElementById("map").style.display = "flex";
  document.getElementById("idp").style.display = "flex";
//varcarlat=4.646993;
//varcarlng=-74.153212;
initMap3();
escribep(varcarlat,varcarlng);
}
    else{
        //alert("pas o email erroneo");
    }
}


}






    function initMap3() {
        var uluru = {lat: 4.657883333333333, lng: -74.06214833333334};
       map = new google.maps.Map(document.getElementById('map'), {
          zoom: 9,
          center: uluru,
          styles:[

{
        "featureType": "landscape.natural",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#e0efef"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#c0e8e8"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.medical",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.place_of_worship",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.school",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.sports_complex",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
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
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": 700
            }
        ]
    },
    {
        "featureType": "transit.station.bus",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#7dcdcd"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#44b8db"
            }
        ]
    }

          ]
        });


 var image="https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/32/Map-Marker-Marker-Inside-Chartreuse.png";
//4.646993, -74.153212
          var marker = new google.maps.Marker({
            position:{lat:varcarlat, lng:varcarlng},
         
            map: map,
            title:"ttt",
            name:"general[id].name",
            idnodefirebase:"objh[idx]",
            icon: image,

            activom:"b",
               animation: google.maps.Animation.DROP
          });




 








     

      }




      function subirlatylong(lv,npadre,nhijo1,nhijo2){

        
firebase.database().ref().
child(String(npadre)).child(String(nhijo1)).child(String(nhijo2)).set(lv);
      }

     // subirlatylong(1111111,"usertsit","dos","lat");
     // subirlatylong(999,"usertsit","dos","lng");