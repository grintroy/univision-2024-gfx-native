webcg.on("data", function (data) {
	document.querySelector("#primary").innerHTML = data.primary
		? data.primary.text || data.primary
		: "";

	const secondary = document.querySelector("#secondary")
	if (!data.secondary) {
		secondary.hidden = true
	} else {
		secondary.hidden = false
		secondary.innerHTML = data.secondary;
	}
	
	const separator = document.querySelector("#separator")
	if (!data.separator) {
		separator.hidden = true
	} else {
		separator.hidden = false
		separator.innerHTML = data.separator;
	}

	const fontSize = data.fontSize
	? data.fontSize.text || data.fontSize
	: "26";
	document.querySelector(".votesBoxFace").style.fontSize = `${fontSize}pt`
});

webcg.on("play", () => {
	document.querySelector("#l3rdBox").classList.add("active");
	document.querySelector(".backgroundVid").play();
});

webcg.on("stop", () => {
	document.querySelector("#l3rdBox").classList.remove("active");
	document.querySelector(".backgroundVid").pause();
});
