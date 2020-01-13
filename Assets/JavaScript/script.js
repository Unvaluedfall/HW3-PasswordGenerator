
    var submitButton = document.getElementById("submitButton");
    submitButton.addEventListener("click", passwordGeneration)


    var passwordLengthQuestionInt, specialCharQuestion, numberCharQuestion, lowercaseCharQuestion, uppercaseCharQuestion, passwordLengthQuestion;
    
    
    
    


    
/**
 * 
 */
    function passwordGeneration(){
        /**
         * Variables
         */
        
            
    askingTheQuestions();
    
    creatingPassword(passwordLengthQuestionInt, specialCharQuestion, numberCharQuestion, lowercaseCharQuestion, uppercaseCharQuestion);
        
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
    
    return passwordLengthQuestionInt, specialCharQuestion, numberCharQuestion, lowercaseCharQuestion, uppercaseCharQuestion;
}



function randomIntMathRandom(n) {
    var x = Math.floor(Math.random() * n);
    if (x < 0 || x >= n)
        throw "Arithmetic exception";
    return x;
}



// Returns a random integer in the range [0, n) using a variety of methods.
function randomInt(n) {
    var x = randomIntMathRandom(n);
    x = (x + randomIntBrowserCrypto(n)) % n;
    return x;
}




/**
 * 
 * @param {*} passwordLengthQuestionInt 
 * @param {*} specialCharQuestion 
 * @param {*} numberCharQuestion 
 * @param {*} lowercaseCharQuestion 
 * @param {*} uppercaseCharQuestion 
 * @param {*} charObject 
 */
function creatingPassword(passwordLengthQuestionInt, specialCharQuestion, numberCharQuestion, lowercaseCharQuestion, uppercaseCharQuestion){
    var charObject = {  
        specialChar:["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~", "'"],
        numberChar:[0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        lowercaseChar:["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
        uppercaseChar:["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
}




    
    password = ""
    character = '';

    for(var i=0;i<charObject.specialChar.length;i++){
        console.log(charObject.specialChar[i]);//will give all the elements
  }
  


    while( password.length<passwordLengthQuestionInt) {
        
        for(var i=0;i<charObject.specialChar.length;i++){
            entity1 = Math.floor(Math.random() * charObject.specialChar[i] );
      }
        for(var i=0;i<charObject.numberChar.length;i++){
            entity2 = Math.floor(Math.random() * charObject.numberChar[i] );
      }
        for(var i=0;i<charObject.lowercaseChar.length;i++){
            entity3 = Math.floor(Math.random() * charObject.lowercaseChar[i]);
      }
        for(var i=0;i<charObject.uppercaseChar.length;i++){
            entity4 = Math.floor(Math.random() * charObject.uppercaseChar[i]);
      }
        
        character += charObject.specialChar[entity1];
        character += charObject.numberChar[entity2];
        character += charObject.lowercaseChar[entity3];
        character += charObject.uppercaseChar[entity4];
        
        password = character;
    }
    console.log(password)
    password=password.split('').sort(function(){return 0.5-Math.random()}).join('');
    return password

    // function generate(length = passwordLengthQuestionInt) {
    //     var result = "";
    //     for (var i = 0; i < length; i++) {
    //         result += charObject[randomIntMathRandom(charObject.length)];
    //     }
    //     document.getElementById("displayArea").document.write(result);
        
    //     console.log(result);

    //     return result;
    // }
    
    // generate();


    // if(specialCharQuestion === true){
    // }


    // for(var i = 0; i < passwordLengthQuestionInt;i++){
    


    //     for (i in charObject.specialChar) {
    //         emptyPasswordArray.push(randSpecial)
    //       }

    //       console.log(emptyPasswordArray)


    //     // if(specialCharQuestion === true){
    //     //     emptyPasswordArray.push(charObject.specialCharObj.specialChar[Math.floor(Math.random) * i of charObject.specialCharObj.specialChar[]])
    //     // }
        
    //     // if(numberCharQuestion === true){
    //     //     emptyPasswordArray.push(charObject.numberCharObj.numberChar[Math.floor(Math.random * charObject.numberCharObj.numberChar[i])])
    //     // }
        
    //     // if(uppercaseCharQuestion === true){
    //     //     emptyPasswordArray.push(charObject.uppercaseCharObj.uppercaseChar[Math.floor(Math.random * charObject.uppercaseCharObj.uppercaseChar[i])])
    //     // }
        
    //     // if(lowercaseCharQuestion === true){
    //     //     emptyPasswordArray.push(charObject.lowercaseCharObj.lowercaseChar[Math.floor(Math.random * charObject.lowercaseCharObj.lowercaseChar[i])])
    //     // }

    // }

    console.log(emptyPasswordArray);

    return emptyPasswordArray;
}

