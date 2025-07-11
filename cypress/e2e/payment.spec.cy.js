/// <reference types="cypress" />
import PaymentForm from '../pages/payment';
import { paymentSelectors } from '../components/paymentComponents';

describe('Payment form', () => {
    const paymentForm = new PaymentForm();
    beforeEach(() => {
        paymentForm.visit();
    });

    it('Should return error message "Name on card is required"', () => {
        paymentForm.fillFormWithoutCardName();
        cy.get(paymentSelectors.invalid).should('contain.text', 'Name on card is required');
    });
    it('Should return error message "Credit card number is required"', () => {
        paymentForm.fillFormWithoutCardNumber();
        cy.get(paymentSelectors.invalid).should('contain.text', 'Credit card number is required');
    });
    it('Should return error message "Expiration date required"', () => {
        paymentForm.fillFormWithoutExpiration();
        cy.get(paymentSelectors.invalid).should('contain.text', 'Expiration date required');
    });
    it('Should return error message "Security code required"', () => {
        paymentForm.fillFormWithoutCvv();
        cy.get(paymentSelectors.invalid).should('contain.text', 'Security code required');
    });
});