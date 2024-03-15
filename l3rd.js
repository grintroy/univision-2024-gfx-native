webcg.on("data", function (data) {
  document.querySelector("#name").innerHTML = data.name
    ? data.name.text || data.name
    : "";
  document.querySelector("#role").innerHTML = data.role
    ? data.role.text || data.role
    : "";
});

webcg.on("play", () => {
  document.querySelector("#l3rdBox").classList.add("active");
});

webcg.on("stop", () => {
  document.querySelector("#l3rdBox").classList.remove("active");
});
