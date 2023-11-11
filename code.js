BACKGROUND_IMAGE = "https://videohive.img.customer.envatousercontent.com/ac68974a-c1cc-47a0-aa4a-627595ffe4aa/video_preview/video_preview_0000.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=ef3c952937a3b4b07a2393e13ce8a1ad"

let password = document.querySelector("#password")
let confirmPassword = document.querySelector("#confirmPassword")

let getPasswordValidity = () => {
    alert(password.value)
    if (confirmPassword.value == "") {confirmPassword.setCustomValidity("Please confirm your password")}
    else if (password.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity("Passwords don't match, please try again.")
    }
    else if (confirmPassword.value == password.value) {confirmPassword.setCustomValidity("")}
}

password.addEventListener('change',getPasswordValidity)
confirmPassword.addEventListener('change',getPasswordValidity)

