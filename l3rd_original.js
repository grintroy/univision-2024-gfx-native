
var judges = {
  1: {
    "name": "Abi Dykes",
    "role": "University of Oxford"
  },
  2: {
    "name": "Francesca Watson",
    "role": "University of Cardiff"
  },
  3: {
    "name": "Kate Armstrong",
    "role": "University for the Creative Arts"
  },
  4: {
    "name": "Amy Sheffield",
    "role": "University of Reading"
  },
  5: {
    "name": "Ella Foxhall",
    "role": "University of Southampton"
  },
  6: {
    "name": "Vivian Brooke",
    "role": "Academy of Contemporary Music"
  },
  7: {
    "name": "Alan Sutherland",
    "role": "University of Surrey"
  }
}


function clearL3rd() {
  $("#l3rdBox").removeClass("active");
}

webcg.on('data', function(data) {

  switch (data.state) {
    case "start":
      $("#name").html(data.name);
      $("#role").html(data.role);
      $("#l3rdBox").addClass("active");
      break;
    case "stop":
      $("#l3rdBox").removeClass("active");
      break;
    case "startJudge":
      let judge = data.judge;
      $("#name").html(judges[judge].name);
      $("#role").html(judges[judge].role);
      $("#l3rdBox").addClass("active");
      setTimeout(clearL3rd, 3000);
      break;
    case "quiz":
      $("#name").addClass("hidden");
      $("#role").addClass("hidden");
      $(".overlay").removeClass("hidden");
      $(".left").html(data.leftText+" "+data.left+"%");
      $(".right").html(data.rightText+" "+data.right+"%");
      $(".left").css("flex-basis", data.left+"%");
      $(".right").css("flex-basis", data.right+"%");
      break;
    default:

  }
});
