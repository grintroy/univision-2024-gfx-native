webcg.on("data", (data) => {});

webcg.on("play", () => {
	$("#actsVid").trigger("play");
	$("main").removeClass("hidden");
	$("#actsVid").removeClass("hidden");
});

webcg.on("stop", () => {
	$("main").addClass("hidden");
	$("#actsVid").addClass("hidden");
});
