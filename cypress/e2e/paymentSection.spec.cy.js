/// <reference types="cypress" />
import PaymentPage from '../pages/paymentSection';

describe('Payment section', () => {
    const paymentPage = new PaymentPage();
    beforeEach(() => {
        paymentPage.visit();
    });

    it('Should have Name on card input field', () => {
        cy.get(paymentPage.selector.nameOnCard).should('be.visible');
    });
    it('Should have Credit card number input field', () => {
        cy.get(paymentPage.selector.cardNumber).should('be.visible');
    });
    it('Should have Expiration input field', () => {
        cy.get(paymentPage.selector.expiration).should('be.visible');
    });
    it('Should have CVV input field', () => {
        cy.get(paymentPage.selector.cvv).should('be.visible');
    });
});