/// <reference types="cypress" />
import { checkoutSelectors } from "../components/checkoutComponents";

class CheckoutForm {
    visit() {
        cy.visit('/basket');
    };

    fillFormWithoutFirstName() {
        cy.get(checkoutSelectors.lastName).eq(1).type('Rasa');
        cy.get(checkoutSelectors.email).type('test@email.com');
        cy.get(checkoutSelectors.address).type('Rasytes 11');
        cy.get(checkoutSelectors.country).select('United Kingdom');
        cy.get(checkoutSelectors.city).select('Bristol');
        cy.get(checkoutSelectors.zip).type('1234');
        cy.get(checkoutSelectors.cardName).type('Rasa Rasyte');
        cy.get(checkoutSelectors.cardNumber).type('645362749763');
        cy.get(checkoutSelectors.expiration).type('22/04/25');
        cy.get(checkoutSelectors.cvv).type('234');
        cy.get(checkoutSelectors.submit).click();
    };

    fillFormWithoutLastName() {
        cy.get(checkoutSelectors.firstName).eq(0).type('Rasa');
        cy.get(checkoutSelectors.email).type('test@email.com');
        cy.get(checkoutSelectors.address).type('Rasytes 11');
        cy.get(checkoutSelectors.country).select('United Kingdom');
        cy.get(checkoutSelectors.city).select('Bristol');
        cy.get(checkoutSelectors.zip).type('1234');
        cy.get(checkoutSelectors.cardName).type('Rasa Rasyte');
        cy.get(checkoutSelectors.cardNumber).type('645362749763');
        cy.get(checkoutSelectors.expiration).type('22/04/25');
        cy.get(checkoutSelectors.cvv).type('234');
        cy.get(checkoutSelectors.submit).click();
    };

    fillFormWithoutEmail() {
        cy.get(checkoutSelectors.firstName).eq(0).type('Rasa');
        cy.get(checkoutSelectors.lastName).eq(1).type('Rasyte');
        cy.get(checkoutSelectors.address).type('Rasytes 11');
        cy.get(checkoutSelectors.country).select('United Kingdom');
        cy.get(checkoutSelectors.city).select('Bristol');
        cy.get(checkoutSelectors.zip).type('1234');
        cy.get(checkoutSelectors.cardName).type('Rasa Rasyte');
        cy.get(checkoutSelectors.cardNumber).type('645362749763');
        cy.get(checkoutSelectors.expiration).type('22/04/25');
        cy.get(checkoutSelectors.cvv).type('234');
        cy.get(checkoutSelectors.submit).click();
    };

        fillFormWithoutAddress() {
        cy.get(checkoutSelectors.firstName).eq(0).type('Rasa');
        cy.get(checkoutSelectors.lastName).eq(1).type('Rasyte');
        cy.get(checkoutSelectors.email).type('test@email.com');
        cy.get(checkoutSelectors.country).select('United Kingdom');
        cy.get(checkoutSelectors.city).select('Bristol');
        cy.get(checkoutSelectors.zip).type('1234');
        cy.get(checkoutSelectors.cardName).type('Rasa Rasyte');
        cy.get(checkoutSelectors.cardNumber).type('645362749763');
        cy.get(checkoutSelectors.expiration).type('22/04/25');
        cy.get(checkoutSelectors.cvv).type('234');
        cy.get(checkoutSelectors.submit).click();
    };
};

export default CheckoutForm;