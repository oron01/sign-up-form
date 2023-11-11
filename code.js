BACKGROUND_IMAGE = "https://videohive.img.customer.envatousercontent.com/ac68974a-c1cc-47a0-aa4a-627595ffe4aa/video_preview/video_preview_0000.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=ef3c952937a3b4b07a2393e13ce8a1ad"

let fName = document.querySelector("#fName")
let lName = document.querySelector("#lName")
let email = document.querySelector("#email")
let telephone = document.querySelector("#telephoneNumber")
let password = document.querySelector("#password")
let confirmPassword = document.querySelector("#confirmPassword")

let errorMessages = {
    fName: "Please fill in your first name.",
    lName: "Please fill in your last name.",
    email: "Please fill in a valid email",
    telephone: "Please fill in a valid telephone number"
}

let getPasswordValidity = () => {
    if (confirmPassword.value == "") {confirmPassword.setCustomValidity("Please confirm your password")}
    else if (password.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity("Passwords don't match, please try again.")
    }
    else if (confirmPassword.value == password.value) {confirmPassword.setCustomValidity("")}
}

let setInputValidity = (input) => {
    switch (input.target) {
        case "fName":
            if (input.target.value == "") {input.value = errorMessages.fName}
            else {input.value = ""}
            break;
        case "lName":
            if (input.target.value == "") {input.value = errorMessages.lName}
            else {input.value = ""}
            break;
        case "email":
            if (input.target.value == "") {input.value = errorMessages.email}
            else {input.value = ""}
            break;
        case "telephoneNumber":
            if (input.target.value == "") {input.value = errorMessages.telephone}
            else {input.value = ""}
            break;
    }
}


fName.addEventListener('change',setInputValidity)
password.addEventListener('change',getPasswordValidity)
confirmPassword.addEventListener('change',getPasswordValidity)

