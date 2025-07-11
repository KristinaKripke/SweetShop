/// <reference types="cypress" />
import { paymentSelectors } from "../components/paymentComponents";

class PaymentForm {
    visit() {
        cy.visit('/basket');
    };

    fillFormWithoutCardName() {
            cy.get(paymentSelectors.firstName).eq(0).type('Rasa');
            cy.get(paymentSelectors.lastName).eq(1).type('Rasyte');
            cy.get(paymentSelectors.email).type('test@email.com');
            cy.get(paymentSelectors.address).type('Rasytes 11');
            cy.get(paymentSelectors.country).select('United Kingdom');
            cy.get(paymentSelectors.city).select('Bristol');
            cy.get(paymentSelectors.zip).type('1234');
            cy.get(paymentSelectors.cardNumber).type('645362749763');
            cy.get(paymentSelectors.expiration).type('22/04/25');
            cy.get(paymentSelectors.cvv).type('234');
            cy.get(paymentSelectors.submit).click();
        };

        fillFormWithoutCardNumber() {
            cy.get(paymentSelectors.firstName).eq(0).type('Rasa');
            cy.get(paymentSelectors.lastName).eq(1).type('Rasyte');
            cy.get(paymentSelectors.email).type('test@email.com');
            cy.get(paymentSelectors.address).type('Rasytes 11');
            cy.get(paymentSelectors.country).select('United Kingdom');
            cy.get(paymentSelectors.city).select('Bristol');
            cy.get(paymentSelectors.zip).type('1234');
            cy.get(paymentSelectors.cardName).type('Rasa Rasyte');
            cy.get(paymentSelectors.expiration).type('22/04/25');
            cy.get(paymentSelectors.cvv).type('234');
            cy.get(paymentSelectors.submit).click();
        };

        fillFormWithoutExpiration() {
            cy.get(paymentSelectors.firstName).eq(0).type('Rasa');
            cy.get(paymentSelectors.lastName).eq(1).type('Rasyte');
            cy.get(paymentSelectors.email).type('test@email.com');
            cy.get(paymentSelectors.address).type('Rasytes 11');
            cy.get(paymentSelectors.country).select('United Kingdom');
            cy.get(paymentSelectors.city).select('Bristol');
            cy.get(paymentSelectors.zip).type('1234');
            cy.get(paymentSelectors.cardName).type('Rasa Rasyte');
            cy.get(paymentSelectors.cardNumber).type('645362749763');
            cy.get(paymentSelectors.cvv).type('234');
            cy.get(paymentSelectors.submit).click();
        };

        fillFormWithoutCvv() {
            cy.get(paymentSelectors.firstName).eq(0).type('Rasa');
            cy.get(paymentSelectors.lastName).eq(1).type('Rasyte');
            cy.get(paymentSelectors.email).type('test@email.com');
            cy.get(paymentSelectors.address).type('Rasytes 11');
            cy.get(paymentSelectors.country).select('United Kingdom');
            cy.get(paymentSelectors.city).select('Bristol');
            cy.get(paymentSelectors.zip).type('1234');
            cy.get(paymentSelectors.cardName).type('Rasa Rasyte');
            cy.get(paymentSelectors.cardNumber).type('645362749763');
            cy.get(paymentSelectors.expiration).type('22/04/25');
            cy.get(paymentSelectors.submit).click();
        };
};

export default PaymentForm;