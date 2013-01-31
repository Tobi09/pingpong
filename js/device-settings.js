var deviceReady = false;
function init() {
	console.log("init();");
    document.addEventListener("deviceready", function () {
    deviceReady = true;
    }, false);

    window.setTimeout(function () {
        if (!deviceReady) {
            alert("Error: Phonegap did not initialize.  Demo will not run correctly.");
            console.log("Error: Phonegap did not initialize.  Demo will not run correctly.");
        } else {
			alert("Phonegap did initialize. Demo will run correctly.");
            console.log("Phonegap did initialize. Demo not run correctly.");
			delete init;
		}
    }, 1000);
}

