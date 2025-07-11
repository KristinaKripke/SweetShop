/// <reference types="cypress" />

export const checkoutSelectors = {
    firstName: "input#name",
    lastName: "input#name",
    email: "input#email",
    address: "input#address",
    address2: "input#address2",
    country: "select#country",
    city: "select#city",
    zip: "input#zip",
    cardName: "input#cc-name",
    cardNumber: "input#cc-number",
    expiration: "input#cc-expiration",
    cvv: "input#cc-cvv",
    submit: "button.btn-primary",
    invalid: ".invalid-feedback",

}