// Assignment Code

var modal = document.getElementById("passwordSpecs");
var generateBtn = document.querySelector("#generate");

var lengthSlider = document.getElementById("length");
var lengthValue = document.getElementById("value");

lengthSlider.oninput = function () {
  lengthValue.innerHTML = this.value;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
// generateBtn.addEventListener("click", displayModal());

// show modal on click
generateBtn.onclick = function () {
  modal.style.display = "block";
};
// close modal on click off
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
function passwordCriteria() {}
function generatePassword() {}
