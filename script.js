// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", function () {
  Gen = generatePassword();
  document.getElementById("password").placeholder = Gen;
});

var Spec;
var Num;
var Upper;
var Lower;
var write;
var choice;
var password = [];

Special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", ";", ":", "'", ",", "<", ".", ">", "/", "?"];
number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
alphaL = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
alphaU = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function generatePassword() {

    write = parseInt(prompt("How many characters? Choose between 8 and 128"));

    if (!write) {
        alert("No value given");
    } 
    else if (write < 8 || write > 128) {

        write=parseInt(prompt("Password must be 8 to 128 in length"));
    }

    else {
        Spec = confirm("Contain special characters?");
        Num = confirm("Contain numbers?");
        Upper = confirm("Contain Uppercase letters?");
        Lower = confirm("Contain Lowercase letters?");
    };

    if (!Spec && !Num && !Upper && !Lower) {
        choice = alert("Must chose one");
    }
    if (Spec && Num && Upper && Lower) {

        choice = Special.concat(number, alphaL, alphaU);
    }
    else if (Spec && Num && Lower) {
        choice = Special.concat(number, alphaL);
    }
    else if (Spec && Num && Upper) {
      choice = Special.concat(number, alphaU);
    }
    else if (Spec && Lower && Upper) {
        choice = Special.concat(alphaL, alphaU);
    }
    else if (Num && Lower && Upper) {
        choice = number.concat(alphaL, alphaU);
    }
    else if (Spec && Num) {
        choice = Special.concat(number);
    } 
    else if (Spec && Lower) {
        choice = Special.concat(alphaL);
    } 
    else if (Spec && Upper) {
        choice = Special.concat(alphaU);
    }
    else if (Lower && Num) {
        choice = alphaL.concat(number);
    } 
    else if (Lower && Upper) {
        choice = alphaL.concat(alphaU);
    } 
    else if (Num && Upper) {
      choice = number.concat(alphaU);
    }
    else if (Spec) {
        choice = Special;
    }
    else if (Num) {
        choice = number;
    }
    else if (Lower) {
        choice = alphaL;
    }
    else if (Upper) {
        choice = alphaU;
    };

    for (var i = 0; i < write; i++) {
        var pickChoices = choice[Math.floor(Math.random() * choice.length)];
        password.push(pickChoices);
    }
  
    var Gen = password.join("");
    UserInput(Gen);
    return Gen;
    
    function UserInput(Gen) {
      document.getElementById("password").textContent = Gen;
  
  }
}


