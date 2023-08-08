"use strict;";
let pwdEl = document.querySelector("#pass");
let confirmEl = document.querySelector("#confirm");

function logSubmit(event) {
    console.log(`Form Submitted! Timestamp: ${event.timeStamp}`);
    event.preventDefault();

    // consigne: valider que le mot de passe et sa confirmation sont identiques

    // méthode 1:
    // if (pwdEl.value === confirmEl.value) {
    //     console.log("identique");
    // }

    // méthode 2:
    if (pwdEl.value.localeCompare(confirmEl.value) === 0) {
        console.log("identique");
        return true;
    }
    // par défaut, on embête que le formulaire est partie
    return false;
}

function pwdBtn() {
    let spanEl = document.querySelector(".icon");
    spanEl.addEventListener("mouseenter", (e) => {
        pwdEl.type = "text";
    });
    spanEl.addEventListener("mouseleave", (e) => {
        pwdEl.type = "password";
    });
}

function main() {
    console.log("début");
    document.querySelector("form").addEventListener("submit", logSubmit);
    pwdBtn();
    console.log("fin");
}
// window.addEventListener("load", main);
main();
