"use strict";
const MIN_PASSWORD_LENGTH = 8;
function checkLength(event) {
    console.log(event);
    // console.log("valeur saisie:" + event.target.value);
    const pSize = document.querySelector(".size");
    if (event.target.value.length >= MIN_PASSWORD_LENGTH) {
        pSize.classList.replace("error", "ok");
        return true;
    }
    pSize.classList.replace("ok", "error");
    return false;
}

function checkContainsDigit(event) {
    const regex = /\d/;
    const pNum = document.querySelector(".num");
    if (regex.test(event.target.value)) {
        pNum.classList.replace("error", "ok");
        return true;
    }
    pNum.classList.replace("ok", "error");
    return false;
}
function checkContainsUppercase(event) {
    const regesMajus = /[A-Z]/;
    const pMajus = document.querySelector(".majus");
    if (regesMajus.test(event.target.value)) {
        pMajus.classList.replace("error", "ok");
        return true;
    }
    pMajus.classList.replace("ok", "error");
    return false;
}

function checkFormConstraints(event) {
    let hasDigits = checkContainsDigit(event);
    let hasUppercase = checkContainsUppercase(event);
    let isLongEnough = checkLength(event);
    if (hasDigits && hasUppercase && isLongEnough) {
        document.querySelector("#sub").removeAttribute("disabled");
        return true;
    }
    document.querySelector("#sub").setAttribute("disabled", "disabled");
    return false;
}

function main() {
    const field = document.querySelector("#password");
    // field.addEventListener("input", checkContainsDigit);
    // field.addEventListener("input", checkContainsUppercase);
    // field.addEventListener("input", checkLength);
    field.addEventListener("input", checkFormConstraints);
}

window.addEventListener("load", main);
