
function naming() {

  var CC = parseInt(document.getElementById("century").value);
  var YY = parseInt(document.getElementById("year").value);
  var MM = parseInt(document.getElementById("month").value);
  var DD = parseInt(document.getElementById("date").value);

  var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Sartuday"];
  var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];


  if (CC.value == "" || YY.value == "" || MM.value == "" || DD.value == "") {
    alert("Blank Values not Allowed");
  }

  var gender = document.querySelector('input[name="gender"]:checked').value;
  var Calculation = parseInt( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )%7;
  // console.log(dayOfTheWeek);
  // return (Math.round(dayOfTheWeek));
  if (gender === "male") {
    if (Calculation === 0) {
      alert("You were born on: " + day[0]);
      alert("Your Akan name is: " + maleNames[0]);
    } else if (Calculation === 1) {
      alert("You were born on: " + day[1]);
      alert("Your Akan name is: " + maleNames[1]);
    } else if (Calculation === 2) {
      alert("You were born on: " + day[2]);
      alert("Your Akan name is: " + maleNames[2]);
    } else if (Calculation === 3) {
      alert("You were born on: " + day[3]);
      alert("Your Akan name is: " + maleNames[3]);
    } else if (Calculation === 4) {
      alert("You were born on: " + day[4]);
      alert("Your Akan name is: " + maleNames[4]);
    } else if (Calculation=== 5) {
      alert("You were born on: " + day[5]);
      alert("Your Akan name is: " + maleNames[5]);
    } else if (Calculation === 6) {
      alert("You were born on: " + day[6]);
      alert("Your Akan name is: " + maleNames[6]);
    }

  } else {
    if (Calculation === 0) {
      alert("You were born on: " + day[0]);
      alert("Your Akan name is: " + femaleNames[0]);
    } else if (Calculation === 1) {
      alert("You were born on: " + day[1]);
      alert("Your Akan name is: " + femaleNames[1]);
    } else if (Calculation === 2) {
      alert("You were born on: " + day[2]);
      alert("Your Akan name is: " + femaleNames[2]);
    } else if (Calculation=== 3) {
      alert("You were born on: " + day[3]);
      alert("Your Akan name is: " + femaleNames[3]);
    } else if (Calculation === 4) {
      alert("You were born on: " + day[4]);
      alert("Your Akan name is: " + femaleNames[4]);
    } else if (Calculation === 5) {
      alert("You were born on: " + day[5]);
      alert("Your Akan name is: " + femaleNames[5]);
    } else if (Calculation === 6) {
      alert("You were born on: " + day[6]);
      alert("Your Akan name is: " + femaleNames[6]);
    }
  }
}

function validate() {

  var CC = document.getElementById("century");
  var YY = document.getElementById("year");
  var MM = document.getElementById("month");
  var DD = document.getElementById("date");
  

  if ((CC.value == "") || (YY.value == "") || (MM.value == "") || (DD.value == "")) {
    // alert("Value needed!")
  }
  if ((MM.value <= 0) || (MM.value > 12)) {
    alert("Invalid Month")
  }
  if ((DD.value <= 0) || (DD.value > 31)) {
    alert("Invalid Date")
  }
  else {
    naming()
  }
}
