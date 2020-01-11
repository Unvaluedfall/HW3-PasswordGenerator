
    var submitButton = document.getElementById("submitButton");
    submitButton.addEventListener("click", passwordGeneration)


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
    


    function passwordGeneration(){
        /**
         * Variables
         */
        
            
    askingTheQuestions();

        

}

function askingTheQuestions(){
        
    passwordLengthQuestion = prompt("How many characters would you like the password?");
    let passwordLengthQuestionInt = parseInt(passwordLengthQuestion);
        console.log(passwordLengthQuestion)
        console.log(passwordLengthQuestionInt)

        if(passwordLengthQuestionInt >= 8 || passwordLengthQuestionInt <= 128)



    // switch(passwordLengthQuestionInt){
    //         specialCharQuestion = confirm("Do you want special characters?");
    //         numberCharQuestion = confirm("Do you want numbers?");
    //         lowercaseCharQuestion = confirm("Do you want lowercase?");
    //         uppercaseCharQuestion = confirm("Do you want lowercase?");
    // break;
    //     case passwordLengthQuestionInt < 8 || passwordLengthQuestionInt > 128:
    //         alert("Please pick a number between 8 and 128");
    //         passwordLengthQuestion;           
    //     break;
    //     default:
    //         passwordLengthQuestion;
    //     break;
    //     } 
}




function creatingPassword(){
    emptyPasswordArray = []

}

