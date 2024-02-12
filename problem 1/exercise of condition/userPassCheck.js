function userPasswordCheck(username, password) {
    let validUserName = 'rial03@';
    let validPassword = 'rial360#';
    if (validUserName === username && validPassword === password) {
        let valid = 'Log in Successful';
        return valid;
    }
    else {
        let invalid = "Invalid username or password. Please try again.";
        return invalid;
    }

}
let userInput = 'rial03@';
let userPassword = 'rial360#';
let result = userPasswordCheck(userInput, userPassword);
console.log(result);