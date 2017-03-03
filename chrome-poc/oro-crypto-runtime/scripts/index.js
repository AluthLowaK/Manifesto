'use strict';
var xhr = new XMLHttpRequest();
xhr.open("GET", "//api.oro.world/", true);
xhr.onreadystatechange = function() {
	if (xhr.readyState == 4) {
		console.log("ready");
	}
};
xhr.send();