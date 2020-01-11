
    var submitButton = document.getElementById("submitButton");
    submitButton.addEventListener("click", passwordGeneration, false)






function passwordGeneration(){
    /**
     * Variables
     */
    
    var specialCharQuestion = confirm("Do you want special characters?");
    var numberCharQuestion = confirm("Do you want numbers?");
    var lowercaseCharQuestion = confirm("Do you want lowercase?");
    var uppercaseCharQuestion = confirm("Do you want lowercase?");
    
    var passwordLengthQuestion = prompt("How many characters would you like the password?");
    
    
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
    passwordLengthQuestion    
    console.log(passwordLengthQuestion)  
    return passwordLengthQuestion 

}
