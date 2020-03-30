document.getElementById("generate").addEventListener("click", generatePassword);

function generator(length, numChecked, upperChecked, lowerChecked, specialChecked){
    var num = '0123456789';
    var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    var specialChar = '!@#$%^&*_-.,+=?/~';
    var password = "";
    var selected = "";
// generate a random character from (num, abcs, or specialChar) 
// to add to the generated password
    if (numChecked.checked===true) {
        selected += num;
    }
    if (upperChecked.checked===true) {
        selected += upperCase;
    }
    if (lowerChecked.checked===true) {
        selected += lowerCase;
    }
    if (specialChecked.checked===true) {
        selected += specialChar;
    }
    for(var i = 0; i< length; i++) { 
        password+=selected.charAt(Math.floor(Math.random()*selected.length)); 
        
    }
    
    console.log(password);
    document.getElementById("new").value = password;
    
}

function generatePassword() {
    var lowerChecked = document.getElementById("checkLowerCase");
    var specialChecked = document.getElementById("checkSpecial");
    var upperChecked = document.getElementById("checkUpperCase");
    var numChecked = document.getElementById("checkNumbers");
    var length = document.getElementById("length").value;
    console.log("generate password");
    console.log(length);
    console.log(numChecked.checked);
    
    generator(length, numChecked, upperChecked, lowerChecked, specialChecked);
}
