const Zip = document.querySelector("#ZIP")
const Country = document.querySelector("#Country")
const Password = document.querySelector("#Password")
const Confirm_Password = document.querySelector("#Confirm_Password")

Zip.addEventListener("input", () => {
    if (!Zip.validity.valueMissing && (Zip.validity.tooLong || Zip.validity.tooShort)) {
        Zip.setCustomValidity("Zip Code must be 5 characters Long")
        Zip.classList.add("error")
    } else {
        Zip.classList.remove("error")
        Zip.setCustomValidity("")
    }
})

Country.addEventListener("input", () => {
    if (!Country.validity.valueMissing && Country.validity.patternMismatch) {
        Country.classList.add("error")
        Country.setCustomValidity("Please input a country")
    } else {
        Country.classList.remove("error")
        Country.setCustomValidity("")
    }
})

Password.addEventListener("input", () => {
    if (!Password.validity.valueMissing && Password.validity.patternMismatch) {
        Password.setCustomValidity("Minimum 8 characters, one uppercase and lowercase, one digit, one special")
        Password.classList.add("error")
    } else {
        Password.classList.remove("error")
        Password.setCustomValidity("")
    }
})

Confirm_Password.addEventListener("input", () => {
    if (!Confirm_Password.validity.valueMissing && Confirm_Password.validity.patternMismatch) {
        Confirm_Password.setCustomValidity("Minimum 8 Maximum 10 characters, one uppercase and lowercase, one digit, one special")
        Confirm_Password.classList.add("error")
    } else if (Password.value != Confirm_Password.value) {
        Password.classList.add("error")
        Confirm_Password.classList.add("error")
        Confirm_Password.setCustomValidity("Password Mismatch")
    } else {
        Password.classList.remove("error")
        Confirm_Password.classList.remove("error")
        Confirm_Password.setCustomValidity("")
    }
})