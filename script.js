
let inputField = document.getElementById('text-input');
let outputField = document.getElementById('output');
// let text_input = input_box.value;

// console.log(inputField)

function isPalindrome () {
    let textInput = inputField.value;

    // removeSpecialCharacters(textInput)
    let text = textInput.replace(/[^a-zA-Z0-9\s]/g, '');

    // console.log(textInput)
    // console.log(text)

    for (let i = 0; i < text.length; i++) {
        if (text[i] != text[text.length - 1 - i]) {
            console.log("not a palindrome")
            outputField.innerHTML = `<p id="output"><span>${textInput}</span> is not a palindrome.</p>`
            return false
        }
    }

    console.log("Palindrome")
    outputField.innerHTML = `<p id="output"><span>${textInput}</span> is a palindrome.</p>`
    return true
}

// function removeSpecialCharacters (text) {
//     let specialCharacters = "!@#$%^&*()_+-={}[]|\\;:'\",.<>/?";

//     for (let i = 0; i < text.length; i++) {
//         console.log(text[i])

//         if (specialCharacters.includes(text[i])) {
//             console.log("special character")
//             text.replace(text[i], '')

//             console.log("text now", text)
//         }
//     }
// }