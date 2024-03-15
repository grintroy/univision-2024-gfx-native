let globalFonts =
	'["Montserrat-Italic.ttf","Montserrat.ttf","Tisa Sans Pro Regular.ttf","libre-caslon-bold.otf","libre-caslon-italic.otf","libre-caslon-text.otf"]';
let fonts =
	'["Montserrat-Italic.ttf","Montserrat.ttf","Tisa Sans Pro Regular.ttf","libre-caslon-bold.otf","libre-caslon-italic.otf","libre-caslon-text.otf"]';
let images;
let content;
let currentProject = "Univision Heats 2024";
let currentVersion = 5;
let dataOptions = [];
let runWindow;
let settings;
const renderReadyEvent = new Event("renderReady");
let loaded = false;
let template = true;
const sitePath = "https://credits.chilton.tv/";

let projectJson;

async function loadJSON() {
	try {
		const response = await fetch("assets/js/json/credits.json");
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		return await response.json();
	} catch (error) {
		console.error("There was a problem fetching the JSON file:", error);
	}
}

async function loadProjectJson() {
	projectJson = await loadJSON();
}

loadProjectJson();

webcg.on("data", (data) => {
	const project = data.project ? data.project.text || data.project : "local";
	if (project == "local") {
		load(currentProject, currentVersion, projectJson).then(() => {
			window.dispatchEvent(renderReadyEvent);
		});
	} else {
		template = false;
		currentProject = project;
		fetch(`${sitePath}save?project=${project}`)
			.then((response) => response.json())
			.then((projectJson) => {
				load(currentProject, currentVersion, projectJson).then(() => {
					window.dispatchEvent(renderReadyEvent);
				});
			});
	}
});

webcg.on("play", () => {
	runCredits();
});

webcg.on("stop", async () => {
	$("#creditsCont").addClass("fadeOut");
	await sleep(2);
	$(".creditsSection").removeClass("active");
	$(".creditsSection").css("transition", "all 0s linear 0s");
	$(".creditsSection").css("top", 0);
	$("#creditsCont").removeClass("fadeOut");
});
