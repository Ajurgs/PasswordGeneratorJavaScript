// Assignment Code

var modal = document.getElementById("passwordSpecs");
var generateBtn = document.querySelector("#generate");
var createBtn = document.querySelector("#makePassword");
var lengthSlider = document.getElementById("length");
var lengthValue = document.getElementById("value");

var characters = [
  document.querySelector("#lowercase"),
  document.querySelector("#uppercase"),
  document.querySelector("#numbers"),
  document.querySelector("#special"),
];
let lowerChar = "abcdefghijklmnopqrstuvwxyz";
let upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "0123456789";
let special = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
lengthSlider.oninput = function () {
  lengthValue.innerHTML = this.value;
};
// Add event listener to generate button
generateBtn.addEventListener("click", displayModal);
createBtn.addEventListener("click", writePassword);
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
// functions
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  // check to see if any character checkbox is checked
  if (!characters.every(allCheckedFalse)) {
    let usableChars = "";
    characters.forEach((set, index) => {
      if (set.checked == true) {
        switch (index) {
          case 0: {
            usableChars += lowerChar;
            break;
          }
          case 1: {
            usableChars += upperChar;
            break;
          }
          case 2: {
            usableChars += numbers;
            break;
          }
          case 3: {
            usableChars += special;
            break;
          }
        }
      }
    });
    console.log(usableChars);
    let password = "";
    console.log(typeof password);
    for (i = 0; i < lengthSlider.value; i++) {
      password += usableChars[Math.floor(Math.random() * usableChars.length)];
    }
    return password;
  } else {
    // if all not checked send an alert
    window.alert("Please select at least one character type.");
  }
}

function allCheckedFalse(input) {
  return input.checked == false;
}
