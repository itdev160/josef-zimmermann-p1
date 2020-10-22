
    function initMap(){
        var options = {
         zoom:10,
            center:{lat:43.0389, lng:-87.9065}
        }

        var map = new
        google.maps.Map(document.getElementById('map'), options);
    
        addMarker({coords:{lat:43.0613, lng:-87.8737},
            content:'<h1>Bradford Beach</h1><img src="images/bradfordbeach.jpg" width="380" height="200">'
        });
        addMarker({coords:{lat:43.0902, lng:-87.8739},
            content:'<h1>Atwater Beach</h1><img src="images/atwaterbeach.jpg" width="380" height="200">'
        });
        addMarker({coords:{lat:42.9089, lng:-87.8412},
            content:'<h1>Grant Park Beach</h1><img src="images/grantparkbeach.jpg" width="450" height="200">'
        });
        addMarker({coords:{lat:42.9955, lng:-87.8816},
            content:'<h1>South Shore Beach</h1><img src="images/southshorebeach.jpg" width="450" height="250">'
        });

        function addMarker(props){
            var marker = new google.maps.Marker({
                position:props.coords,
                map:map,
                icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
            });

                if(props.content){
                    var infoWindow = new google.maps.InfoWindow({
                        content: props.content,
                });

                marker.addListener('click', function(){
                    infoWindow.open(map, marker);
                });
            }
        }   
    }



