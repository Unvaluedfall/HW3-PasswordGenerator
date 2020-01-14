window.onload=function(){
    var submitButton = document.getElementById("submitButton");
    submitButton.addEventListener("click", passwordGeneration)

    // var specialCharCheck = document.getElementById("specialCheck");
    // specialCharCheck.onclick("#")


    
}

var passwordLengthQuestionInt, specialCharQuestion, numberCharQuestion, lowercaseCharQuestion, uppercaseCharQuestion, passwordLengthQuestion;








/**
 * 
 */
function passwordGeneration(){
    
    askingTheQuestions();     
}

/**
 * @returns passwordLengthQuestionInt
 * @returns specialCharQuestion
 * @returns numberCharQuestion 
 * @returns lowercaseCharQuestion
 * @returns uppercaseCharQuestion
 */
function askingTheQuestions(){
        
    passwordLengthQuestion = prompt("How many characters would you like the password?");
    var passwordLengthQuestionInt = parseInt(passwordLengthQuestion);
    
    if(passwordLengthQuestionInt < 8 || passwordLengthQuestionInt > 128){
        
        alert("Please select a number that between 8 - 128")
        
        askingTheQuestions();
    }
    
    if(passwordLengthQuestionInt > 8 || passwordLengthQuestionInt < 128){
        
        specialCharQuestion = confirm("Do you want special characters?");
        numberCharQuestion = confirm("Do you want numbers?");
        lowercaseCharQuestion = confirm("Do you want lowercase?");
        uppercaseCharQuestion = confirm("Do you want uppercase?");
        
        console.log(specialCharQuestion);
        
        if(specialCharQuestion === false && numberCharQuestion === false && lowercaseCharQuestion === false && uppercaseCharQuestion === false){
            alert("Please select at least one option!");
            // askingTheQuestions();
        }
    }
    
    return creatingPassword(passwordLengthQuestionInt, specialCharQuestion, numberCharQuestion, lowercaseCharQuestion, uppercaseCharQuestion);
}

/**
 * 
 * @param {*} passwordLengthQuestionInt 
 * @param {*} specialCharQuestion 
 * @param {*} numberCharQuestion 
 * @param {*} lowercaseCharQuestion 
 * @param {*} uppercaseCharQuestion 
 */
function creatingPassword(passwordLengthQuestionInt, specialCharQuestion, numberCharQuestion, lowercaseCharQuestion, uppercaseCharQuestion){

console.log(specialCharQuestion)
console.log(numberCharQuestion)
console.log(lowercaseCharQuestion)
console.log(uppercaseCharQuestion)

var charObject = {  
    specialChar:"!#$%,&()*+-./:;<=>?@[\\]^_`{|}~'",
    numberChar:"0123456789",
    lowercaseChar:"abcdefghijklmnopqrstuvwxyz",
    uppercaseChar:"ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}

var allChars = charObject.specialChar + charObject.numberChar + charObject.uppercaseChar + charObject.lowercaseChar;

var tempPasswordArray = Array(passwordLengthQuestionInt);
tempPasswordArray[0] = charObject.specialChar;
tempPasswordArray[1] = charObject.numberChar;
tempPasswordArray[2] = charObject.lowercaseChar;
tempPasswordArray[3] = charObject.uppercaseChar;
tempPasswordArray = tempPasswordArray.fill(allChars);

console.log(tempPasswordArray)

return shuffleArray(tempPasswordArray.map(function(x){return x [Math.floor(Math.random() * x.length)]}))
}

/**
 * 
 * @param {*} tempPasswordArray 
 */
function shuffleArray(tempPasswordArray) {
    for (var i = tempPasswordArray.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = tempPasswordArray[i];
      tempPasswordArray[i] = tempPasswordArray[j];
      tempPasswordArray[j] = temp;
    }
    console.log(tempPasswordArray)
    return tempPasswordArray;
  }                                    

