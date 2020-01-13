
    // var submitButton = document.getElementById("submitButton");
    // submitButton.addEventListener("click", passwordGeneration)


    var specialCharQuestion, numberCharQuestion, lowercaseCharQuestion, uppercaseCharQuestion, passwordLengthQuestion;
    
    
    var charObject = {
        specialCharObj: {  
            specialChar: ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~", "'"]
        },
        numberCharObj: {
            numberChar: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        },
        lowercaseCharObj: {
            lowercaseChar: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
        },
        uppercaseCharObj: {
            uppercaseChar: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
        }
    }
    
/**
 * 
 */
    function passwordGeneration(){
        /**
         * Variables
         */
        
            
    askingTheQuestions();
    
    creatingPassword(specialCharQuestion, numberCharQuestion, lowercaseCharQuestion, uppercaseCharQuestion, charObject);
        
}

/**
 * @returns passwordLengthQuestionInt
 * @returns specialCharQuestion
 * @returns numberCharQuestion 
 * @returns lowercaseCharQuestion
 * @returns uppercaseCharQuestion
 */
function askingTheQuestions(){
    
    do{
        
        passwordLengthQuestion = prompt("How many characters would you like the password?");
    
    } while(passwordLengthQuestion === true){
        
        let passwordLengthQuestionInt = parseInt(passwordLengthQuestion);
            console.log(passwordLengthQuestion)
            console.log(passwordLengthQuestionInt)
    
        if(passwordLengthQuestionInt < 8 || passwordLengthQuestionInt > 128){
            alert("Please select a number that between 8 - 128")
        }else{ 
            specialCharQuestion = confirm("Do you want special characters?");
            numberCharQuestion = confirm("Do you want numbers?");
            lowercaseCharQuestion = confirm("Do you want lowercase?");
            uppercaseCharQuestion = confirm("Do you want lowercase?");
    
           console.log(specialCharQuestion);
    
        } 
        
        if(specialCharQuestion === false && numberCharQuestion === false && lowercaseCharQuestion === false && uppercaseCharQuestion === false){
            alert("Please select at least one option!");
            askingTheQuestions();
        }
    
    
        return passwordLengthQuestionInt, specialCharQuestion, numberCharQuestion, lowercaseCharQuestion, uppercaseCharQuestion;
    }
    

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
function creatingPassword(passwordLengthQuestionInt, specialCharQuestion, numberCharQuestion, lowercaseCharQuestion, uppercaseCharQuestion, charObject){
    emptyPasswordArray = []

    for(var i = 0; i < passwordLengthQuestionInt;i++){
    
        if(specialCharQuestion === true){
            emptyPasswordArray.push(charObject.specialCharObj.specialChar[Math.floor(Math.random * charObject.specialCharObj.specialChar[i])])
        }
        
        if(numberCharQuestion === true){
            emptyPasswordArray.push(charObject.numberCharObj.numberChar[Math.floor(Math.random * charObject.numberCharObj.numberChar[i])])
        }
        
        if(uppercaseCharQuestion === true){
            emptyPasswordArray.push(charObject.uppercaseCharObj.uppercaseChar[Math.floor(Math.random * charObject.uppercaseCharObj.uppercaseChar[i])])
        }
        
        if(lowercaseCharQuestion === true){
            emptyPasswordArray.push(charObject.lowercaseCharObj.lowercaseChar[Math.floor(Math.random * charObject.lowercaseCharObj.lowercaseChar[i])])
        }

    }

    console.log(emptyPasswordArray);

    return emptyPasswordArray;
}

