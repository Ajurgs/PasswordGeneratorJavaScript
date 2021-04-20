// Assignment Code

var modal = document.getElementById("passwordSpecs");
var generateBtn = document.querySelector("#generate");
var createBtn = document.querySelector("#makePassword");
var lengthSlider = document.getElementById("length");
var lengthValue = document.getElementById("value");

const lowerChar = "abcdefghijklmnopqrstuvwxyz";
const upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const special = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
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
generateBtn.addEventListener("click", displayModal);
// show modal on click
function displayModal() {
  modal.style.display = "block";
}

// close modal on click off
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function generatePassword() {
  let password = [lengthValue];
  for (i = 0; i < lengthValue; i++) {
    password[i] = lowerChar[Math.floor(Math.random * lowerChar.length) + 1];
  }
}
