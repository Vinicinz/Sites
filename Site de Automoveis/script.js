function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        document.getElementById("location").innerHTML = "Geolocalização não é suportada pelo seu navegador.";
    }
}

function showPosition(position) {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    latlon = new google.maps.LatLng(lat, lon)
    mapholder = document.getElementById('mapholder')
    mapholder.style.height = '250px';
    mapholder.style.width = '500px';

    var myOptions = {
        center: latlon, zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false,
        navigationControlOptions: { style: google.maps.NavigationControlStyle.SMALL }
    };

    var map = new google.maps.Map(document.getElementById("mapholder"), myOptions);
    var marker = new google.maps.Marker({ position: latlon, map: map, title: "Você está Aqui!" });
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            document.getElementById("location").innerHTML = "Usuário negou a solicitação de geolocalização.";
            break;
        case error.POSITION_UNAVAILABLE:
            document.getElementById("location").innerHTML = "As informações de localização não estão disponíveis.";
            break;
        case error.TIMEOUT:
            document.getElementById("location").innerHTML = "A solicitação para obter a localização expirou.";
            break;
        case error.UNKNOWN_ERROR:
            document.getElementById("location").innerHTML = "Ocorreu um erro desconhecido.";
            break;
    }
}
