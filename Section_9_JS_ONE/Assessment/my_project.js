// my project code
var firstName = prompt("What is your first name?");
var lastName = prompt("What is your last name?");
var age = prompt("How old are you?");
var height = prompt("How tall are you in centimeters?");
var petName = prompt("What is your pet's name?");

if (firstName[0].toUpperCase() == lastName[0].toUpperCase()) {
  if (age > 20 && age < 30) {
    if (height >= 170) {
      if (petName[petName.length - 1] == "y") {
        console.log("This is a secret message");
      }
    }
  }
}
alert("Hello " + firstName);
