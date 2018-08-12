
var arraymarkes ;
var generalkey;

var idgeneral=0;
var objh;

  var map;
var markers = [];

var vnodep="";
var vnodelat="";
var vnodelng="";
var vnodelnguser="";
var vnodelatuser="";



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



unavesmensaje();




var arrnode2=[];



function unavesmensaje()
{

//var c=String(cedu);
//var cl= String(celu);child("user").

  firebase.database().ref().child("coordenadas").
  once('value').then(function(snapshot) {
    var username = (snapshot.val() && snapshot.val().username) 
    || 'Anonymous';
    // ...
    //alert(  snapshot.val());
    mi=snapshot.val();
   // alert(cedu+"  ced celu"+celu);
var s=mi;// firebase.database().ref().child("user");
generalkey=snapshot.key;
general=s;
//console.log("un "+generalkey);
objh=Object.keys(mi);
idgeneral=0;
for (var indice in objh) {
arrnode2.push(idgeneral,objh[indice]);
idgeneral=idgeneral+1;
//console.log("Objectdfdkeys(s) "+Object.keys(s));
//console.log("ind'" + indice + "un  " + objh[indice]);


}


setTimeout(function(){ console.log(general.dos.lat); }, 5000);

for (var indi in arrnode2) {
arrnode2.push(idgeneral,objh[indice]);
//console.log("Objectdfdkeys(s) "+Object.keys(s));
console.log( "fi " + arrnode2[indi]);
console.log( "idgeneral " + idgeneral);

}/*
for (var i=1 ; i<=idgeneral;i=i+1){

//console.log("s "+ Object.keys(arrnode2));
console.log("s "+ arrnode2[i]);
}*/

 
   // document.getElementById("idcumplimiento").innerHTML = snapshot.val();
  });


}




var idx=0;


function myFunction2(){

  unavesmensaje();
initMap();
andridmarker(222, map) ;
eventoonclimaker(markerand);

  for (var ids in general ){

    console.log("laattsi   "+general[ids].lat);
  }
}

    function initMap() {
        var uluru = {lat: 4.657883333333333, lng: -74.06214833333334};
       map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
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
        });/*
        var marker = new google.maps.Marker({
          position: uluru,
          map: map,
           title: 'Hello World!',
            draggable: true

        });*/
//arraymarkes.push();idx
idx=0;
 var image="https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/32/Map-Marker-Marker-Inside-Chartreuse.png";
for (var id in general) {
  if(general[id].activo=="a"){
          var marker = new google.maps.Marker({
            position:{lat:general[id].lat, lng:general[id].lng},
          //  icon: icons[feature.type].icon,
            map: map,
            title:objh[idx],
            name:general[id].name,
            idnodefirebase:objh[idx],
            icon: image,

            activom:"b",
               animation: google.maps.Animation.DROP
          });


idx=idx+1;
//arraymarkes.push(marker);
console.log("for  "+generalkey[id]);

 markers.push(marker);

marker.addListener('click', function(e) {
    map.setZoom(13);
    map.setCenter(this.getPosition());
   // alert(this.title);
    console.log("name "+this.name);
     console.log("titulo "+this.idnodefirebase);
    //this.setVisible(false);
    this.activom="b";
    //clearMarkers(markesmas);
    console.log(this.activom);

firebase.database().ref().child("coordenadas").child(String(this.idnodefirebase)).child("activo").set(this.activom);
   this.activom="a";
for(var  vm in markers){
  if(markers[vm].activom=="b"){
markers[vm].setVisible(false);

}
}

  });



}// if

       }//for








     

      }

      function visiblemark(){


      }


function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}

https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/32/Map-Marker-Marker-Outside-Azure.png
 var markerand ;
 var imaandroidiconmaker="https://cdn2.iconfinder.com/data/icons/color-svg-vector-icons-2/512/map_marker_base-32.png";
function andridmarker(location, map) {
  // Add the marker at the clicked location, and add the next-available label
  // from the array of alphabetical characters.
   markerand = new google.maps.Marker({
    position: {lat: 4.897883333333333, lng: -74.06214833333334},
   map: map,
   icon:imaandroidiconmaker,
   title:"android",
           

  });
}

function eventoonclimaker(mark){
  mark.addListener('click', function(e) {
    map.setZoom(13);
    map.setCenter(this.getPosition());
   // alert(this.title);
    console.log("name "+this.title);
    // console.log("titulo "+this.idnodefirebase);
    //this.setVisible(false);
   //// this.activom="a";
    //clearMarkers(markesmas);
    console.log("lat "+this.getPosition());



  });

}
