var start;
var running = 0;
var loop;
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

function updateClock() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth()); //January is 0!
  var yyyy = today.getFullYear();

  startTime = dd + " " + month[mm] + " " + yyyy + " " + start + ":00 GMT";

  startUnix = Date.parse(startTime);

  diff = startUnix - today;
  var diffTime = new Date(diff);

  var hour = String(diffTime.getHours()).padStart(2, "0");
  var min = parseInt(String(diffTime.getMinutes()).padStart(2, "0")) + 30;
  var sec = String(diffTime.getSeconds()).padStart(2, "0");
  if (min > 59) {
    min -= 60;
  }
  if (min == 0 && sec < 5) {
    document.getElementById("countCont").innerHTML = "Starting Soon";
    running = 0;
    setTimeout(function () {
      //document.getElementById('countCont').classList.add("hidden");
    }, 5000);
    clearTimeout(loop);
  } else if (min == 0 && sec < 1) {
    document.getElementById("countCont").classList.add("hidden");
    clearTimeout(loop);
    running = 0;
  } else {
    document.getElementById("countCont").innerHTML =
      "Starting in " + min + ":" + sec;
  }

  if (running) {
    loop = setTimeout(function () {
      updateClock();
    }, 250);
  } else {
    console.log("stoped");
  }
}

webcg.on("data", (data) => {
  start = data.time ? data.time.text || data.time : "19:00";
  console.log("start: " + start)
});

webcg.on("play", () => {
  document.getElementById("countBody").classList.remove("hidden");
  if (!running) {
    running = 1;
    console.log("Calling Clock");
    updateClock();
  }
})

webcg.on("stop", () => {
  document.getElementById("countBody").classList.add("hidden");
  clearTimeout(loop);
  running = 0;
})