

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

  startDateTime = new Date(
    dd + " " + month[mm] + " " + yyyy + " " + start + ":00"
  );

  console.log(startDateTime);

  const diff = startDateTime - today; // in ms

  console.log("diff (ms): ", diff);

  var msec = diff;
  var hour = String(Math.floor(msec / 1000 / 60 / 60)).padStart(2, "0");
  msec -= hour * 1000 * 60 * 60;
  var min = String(Math.floor(msec / 1000 / 60)).padStart(2, "0");
  msec -= min * 1000 * 60;
  var sec = String(Math.floor(msec / 1000)).padStart(2, "0");
  msec -= sec * 1000;

  console.log(today);
  console.log(hour, min, sec);
  
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

start = "18:00"
updateClock();
