/// <reference types="cypress" />

class PaymentPage {
    selector = {
        nameOnCard: "label[for='cc-name']",
        cardNumber: "label[for='cc-number']",
        expiration: "label[for='cc-expiration']",
        cvv: "#cc-cvv"
    }

    visit() {
        cy.visit('/basket');
    };
};

export default PaymentPage;