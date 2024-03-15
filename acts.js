webcg.on('data', function(data) {

  switch (data.state) {
    case "start":
      $("main").removeClass("hidden");
      $("#actsVid").trigger("play");
      break;
    case "stop":
      $("main").addClass("hidden");
      break;
    default:

  }
});
