var gn;
var marker;

function init() {
	console.log("# init");

    // AFRAME.registerComponent('play-on-scan', {
    //     init: function () {
    //         var el = this.el;
    //         el.sceneEl.addEventListener('markerFound', function () {
    //             //el.setAttribute('animation-mixer', {clip: '*', loop: 'once'}); el.emit('ar-ready');
    //         });
    //     }
    //  });

    marker = document.getElementById('marker');

    marker.addEventListener('markerFound', handleMarkerFound);
}

function initGyro() {
    gn = new GyroNorm();

    gn.init().then(function() {
        gn.start(function(data){
            // debugText.innerHTML = data.do.alpha + " : " + data.do.beta + " : " + data.do.gamma + " : " + data.do.absolute;
        })
    }).catch(function(e){
        alert('DeviceOrientation or DeviceMotion is not supported by the browser or device');
    }); 
}

function handleMarkerFound(e) {
    console.log('* handleMarkerFound');
    marker.removeEventListener('markerFound', handleMarkerFound);
}