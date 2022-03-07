// Using Array to represent the Akan Names reference list
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var maleNames = ["Kwasi", "Kudwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

/*
// Function to generate Akan Name
var akanGenerate = function(yearOfBirth, monthOfBirth, dateOfBirth, gender){
//Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7

        var d = 
}

*/

// Implement Jquery "$(document).ready(function(){});" to prevent script from running before DOM loads completely
$(document).ready(function() {
    $("form#form").submit(function(event) {
        event.preventDefault();
        var yearOfBirth = parseInt($("#year").val());
        var monthOfBirth = parseInt($("#month").val());
        var dateOfBirth = parseInt($("#date").val());
        var gender = $("input:radio[name=gender]:checked").val();
        var akanName = akanGenerate(yearOfBirth, monthOfBirth, dateOfBirth, gender);

        // Quick test on output
        alert("Your akan name is: Afua ");

        // Clears Form for new input
        document.getElementById("form").reset();
    });
});


