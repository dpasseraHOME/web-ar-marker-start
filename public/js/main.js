var gn;
var marker;
var debugText;
var isMarkerFound = false;
var isMarkerVisible = false;
var doUseGyro = false;

function init() {
	console.log("# init");

    initGyro();

    debugText = document.getElementById('debugText');

    marker = document.getElementById('marker');
    marker.addEventListener('markerVisible', handleMarkerVisible);
}

function initGyro() {
    gn = new GyroNorm();

    gn.init().then(function() {
        gn.start(function(data){
            debugText.innerHTML = data.do.alpha + " : " + data.do.beta + " : " + data.do.gamma + " : " + data.do.absolute;
        })
    }).catch(function(e){
        alert('DeviceOrientation or DeviceMotion is not supported by the browser or device');
    }); 
}

function handleMarkerVisible(e) {
    console.log('* handleMarkerVisible');
    
    marker.removeEventListener('markerVisible', handleMarkerVisible);
    
    if(!isMarkerFound) {
        isMarkerFound = true;
        isMarkerVisible = true;
    }

    if(isMarkerVisible) {
        doUseGyro = false;
        marker.addEventListener('markerNotVisible', handleMarkerNotVisible);
        marker.removeEventListener('markerTick', handleMarkerTick);
    }
}

function handleMarkerNotVisible(e) {
    console.log('* handleMarkerNotVisible');

    if(isMarkerFound) {
        doUseGyro = true;
        marker.removeEventListener('markerNotVisible', handleMarkerNotVisible);
        marker.addEventListener('markerVisible', handleMarkerVisible);
        marker.addEventListener('markerTick', handleMarkerTick);
    }
}

function handleMarkerTick(e) {
    // use gyro to position camera or model
    // console.log('.');
}