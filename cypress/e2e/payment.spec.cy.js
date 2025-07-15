/// <reference types="cypress" />
import PaymentForm from '../pages/payment';

describe('Payment form', () => {
    const paymentForm = new PaymentForm();
    beforeEach(() => {
        paymentForm.visit();
    });

    it('Should return error message "Name on card is required"', () => {
        paymentForm.fillFormWithoutCardName();
        cy.get(paymentForm.selector.invalid).should('contain.text', 'Name on card is required');
    });
    it('Should return error message "Credit card number is required"', () => {
        paymentForm.fillFormWithoutCardNumber();
        cy.get(paymentForm.selector.invalid).should('contain.text', 'Credit card number is required');
    });
    it('Should return error message "Expiration date required"', () => {
        paymentForm.fillFormWithoutExpiration();
        cy.get(paymentForm.selector.invalid).should('contain.text', 'Expiration date required');
    });
    it('Should return error message "Security code required"', () => {
        paymentForm.fillFormWithoutCvv();
        cy.get(paymentForm.selector.invalid).should('contain.text', 'Security code required');
    });
});