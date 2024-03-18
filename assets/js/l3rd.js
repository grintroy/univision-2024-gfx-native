webcg.on("data", function (data) {
	document.querySelector("#primary").innerHTML = data.primary
		? data.primary.text || data.primary
		: "";
	document.querySelector("#secondary").innerHTML = data.secondary
		? data.secondary.text || data.secondary
		: "";
	document.querySelector("#separator").innerHTML = data.separator
		? data.separator.text || data.separator
		: "";
});

webcg.on("play", () => {
	document.querySelector("#l3rdBox").classList.add("active");
	document.querySelector("video").play();
});

webcg.on("stop", () => {
	document.querySelector("#l3rdBox").classList.remove("active");
	document.querySelector("video").pause();
});
