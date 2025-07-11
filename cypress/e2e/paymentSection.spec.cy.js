/// <reference types="cypress" />
import PaymentPage from '../pages/paymentSection';
import { paymentSectionSelectors } from '../components/paymentSectionComponents';

describe('Payment section', () => {
    const paymentPage = new PaymentPage();
    beforeEach(() => {
        paymentPage.visit();
    });

    it('Should have Name on card input field', () => {
        cy.get(paymentSectionSelectors.nameOnCard).should('be.visible');
    });
    it('Should have Credit card number input field', () => {
        cy.get(paymentSectionSelectors.cardNumber).should('be.visible');
    });
    it('Should have Expiration input field', () => {
        cy.get(paymentSectionSelectors.expiration).should('be.visible');
    });
    it('Should have CVV input field', () => {
        cy.get(paymentSectionSelectors.cvv).should('be.visible');
    });
});