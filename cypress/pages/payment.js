/// <reference types="cypress" />

class PaymentForm {
    selector = {
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

    visit() {
        cy.visit('/basket');
    };

    fillFormWithoutCardName() {
            cy.get(this.selector.firstName).eq(0).type('Rasa');
            cy.get(this.selector.lastName).eq(1).type('Rasyte');
            cy.get(this.selector.email).type('test@email.com');
            cy.get(this.selector.address).type('Rasytes 11');
            cy.get(this.selector.country).select('United Kingdom');
            cy.get(this.selector.city).select('Bristol');
            cy.get(this.selector.zip).type('1234');
            cy.get(this.selector.cardNumber).type('645362749763');
            cy.get(this.selector.expiration).type('22/04/25');
            cy.get(this.selector.cvv).type('234');
            cy.get(this.selector.submit).click();
        };

        fillFormWithoutCardNumber() {
            cy.get(this.selector.firstName).eq(0).type('Rasa');
            cy.get(this.selector.lastName).eq(1).type('Rasyte');
            cy.get(this.selector.email).type('test@email.com');
            cy.get(this.selector.address).type('Rasytes 11');
            cy.get(this.selector.country).select('United Kingdom');
            cy.get(this.selector.city).select('Bristol');
            cy.get(this.selector.zip).type('1234');
            cy.get(this.selector.cardName).type('Rasa Rasyte');
            cy.get(this.selector.expiration).type('22/04/25');
            cy.get(this.selector.cvv).type('234');
            cy.get(this.selector.submit).click();
        };

        fillFormWithoutExpiration() {
            cy.get(this.selector.firstName).eq(0).type('Rasa');
            cy.get(this.selector.lastName).eq(1).type('Rasyte');
            cy.get(this.selector.email).type('test@email.com');
            cy.get(this.selector.address).type('Rasytes 11');
            cy.get(this.selector.country).select('United Kingdom');
            cy.get(this.selector.city).select('Bristol');
            cy.get(this.selector.zip).type('1234');
            cy.get(this.selector.cardName).type('Rasa Rasyte');
            cy.get(this.selector.cardNumber).type('645362749763');
            cy.get(this.selector.cvv).type('234');
            cy.get(this.selector.submit).click();
        };

        fillFormWithoutCvv() {
            cy.get(this.selector.firstName).eq(0).type('Rasa');
            cy.get(this.selector.lastName).eq(1).type('Rasyte');
            cy.get(this.selector.email).type('test@email.com');
            cy.get(this.selector.address).type('Rasytes 11');
            cy.get(this.selector.country).select('United Kingdom');
            cy.get(this.selector.city).select('Bristol');
            cy.get(this.selector.zip).type('1234');
            cy.get(this.selector.cardName).type('Rasa Rasyte');
            cy.get(this.selector.cardNumber).type('645362749763');
            cy.get(this.selector.expiration).type('22/04/25');
            cy.get(this.selector.submit).click();
        };
};

export default PaymentForm;