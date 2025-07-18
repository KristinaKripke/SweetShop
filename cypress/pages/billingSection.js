/// <reference types="cypress" />

class BillingPage {
    selector = {
        firstName: "label[for='firstName']",
        lastName: "label[for='lastName']",
        email: "label[for='email']",
        address: "label[for='address']",
        address2: "label[for='address2']",
        country: "label[for='country']",
        city: "label[for='state']",
        zip: "label[for='zip']"
    }

    visit() {
        cy.visit('/basket');
    };
};

export default BillingPage;