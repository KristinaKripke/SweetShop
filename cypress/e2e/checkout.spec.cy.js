/// <reference types="cypress" />
import BasketPage from '../pages/basketPage';
import { checkoutSelectors } from '../components/checkoutComponents';
import CheckoutForm from '../pages/checkout';

describe('Checkout billing form', () => {
    const checkoutForm = new CheckoutForm();
    beforeEach(() => {
        checkoutForm.visit();
    });

    it('Should throw error message "Valid first name is required"', () => {
        checkoutForm.fillFormWithoutFirstName();
        cy.get(checkoutSelectors.invalid).should('contain.text', 'Valid first name is required.');
    });
    it('Should throw error message "Valid last name is required"', () => {
        checkoutForm.fillFormWithoutLastName();
        cy.get(checkoutSelectors.invalid).should('contain.text', 'Valid last name is required.');
    });
    it('Should throw error message "Please enter a valid email address for shipping updates"', () => {
        checkoutForm.fillFormWithoutLastName();
        cy.get(checkoutSelectors.invalid).should('contain.text', 'Please enter a valid email address for shipping updates.');
    });
        it('Should throw error message "Please enter your shipping address"', () => {
        checkoutForm.fillFormWithoutLastName();
        cy.get(checkoutSelectors.invalid).should('contain.text', 'Please enter your shipping address.');
    });
});