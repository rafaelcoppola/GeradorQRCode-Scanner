
//Scanner QRCode
document.addEventListener("DOMContentLoaded", event => {
  let scanner = new Instascan.Scanner({ video: document.getElementById('preview') });
  Instascan.Camera.getCameras().then(cameras => {
    scanner.camera = cameras[cameras.length - 1];
    scanner.start();
  }).catch(e => console.error(e));
  
  scanner.addListener('scan', content => {
    document.getElementById('scaner').innerHTML = content;
    
  });
});

function enviar() {
  alert("funcionou")
}

//Geolocalization
if (navigator.geolocation) {
  console.log('Geolocation is supported!');
}
else {
  console.log('Geolocation is not supported for this Browser/OS.');
}
window.onload = function() {
  var startPos;
  var geoOptions = {
    
    maximumAge: 5 * 60 * 1000,
  }

  var geoSuccess = function(position) {
    startPos = position;
    document.getElementById('startLat').innerHTML = startPos.coords.latitude;
    document.getElementById('startLon').innerHTML = startPos.coords.longitude;
  };

  var geoError = function(error) {
    console.log('Error occurred. Error code: ' + error.code);
    // error.code can be:
    //   0: unknown error
    //   1: permission denied
    //   2: position unavailable (error response from location provider)
    //   3: timed out
  };

  navigator.geolocation.getCurrentPosition(geoSuccess, geoError, geoOptions);
};
