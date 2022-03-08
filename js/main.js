var akanGenerate = function (y, m, d, g) {
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

  /*
  // Get century
  var centuryInput = y * 0.01; // convert to decimal
  var century = Math.trunct(centuryInput); // remove decimal part you remain with century

  // Get year
  var yearInput = y * 0.01; // convert to decimal
  var yearPart = yearInput % 1; // get remainder
  var year = yearPart * 100; //gives whole number

  // day of the week
  // Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
  var dayOfTheWeek = Math.round(
    (century / 4 - 2 * century - 1 + (5 * year) / 4 + (26 * (m + 1)) / 10 + d) %
      7
  );
*/

  var d = new Date(y, --m, d);
  if (g === "Female") {
    return d && femaleNames[d.getDay()];
  } else {
    return d && maleNames[d.getDay()];
  }
};

// Made use of Jquery for easier fetch of data from the radio input: gender information
$(document).ready(function () {
  $("form#form").submit(function (event) {
    event.preventDefault();

    // Fetching user input and assign to variables
    var y = parseInt($("#year").val());
    var m = parseInt($("#month").val());
    var d = parseInt($("#date").val());
    var g = $("input:radio[name=gender]:checked").val();

    // Generating Akan name
    var akanName = akanGenerate(y, m, d, g);
    alert("You my friend your Akan name is:  " + akanName);

    //Clears form for fresh input
    document.getElementById("form").reset();
  });
});
