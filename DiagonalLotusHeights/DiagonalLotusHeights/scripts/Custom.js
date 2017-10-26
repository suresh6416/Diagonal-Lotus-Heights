
        function initMap() {
            var uluru = { lat: 17.7348583, lng: 83.31618189999995 };
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 4,
                center: uluru
            });
            var marker = new google.maps.Marker({
                position: uluru,
                map: map
            });
        }
 