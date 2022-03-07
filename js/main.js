//first function
var akan = function (y, m, d, g) {
  // array use
  var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  var maleNames = [
    "Kwasi",
    "Kudwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame",
  ];
  var d = new Date(y, --m, d);
  if (g === "Female") {
    return d && femaleNames[d.getDay()];
  } else {
    return d && maleNames[d.getDay()];
  }
};

// Jquery library
$(document).ready(function () {
  $("form#form").submit(function (event) {
    event.preventDefault();
    var y = parseInt($("#year").val());
    var m = parseInt($("#month").val());
    var d = parseInt($("#date").val());
    var g = $("input:radio[name=gender]:checked").val();
    var result = akan(y, m, d, g);

    // inbuilt function for quick output
    alert("Your akan name is: " + result);

    // clears form also page reset
    document.getElementById("form").reset();
  });
});
