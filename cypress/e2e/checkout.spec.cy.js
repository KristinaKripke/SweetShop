/// <reference types="cypress" />
import CheckoutForm from '../pages/checkout';

describe('Checkout billing form', () => {
    const checkoutForm = new CheckoutForm();
    beforeEach(() => {
        checkoutForm.visit();
    });

    it('Should throw error message "Valid first name is required"', () => {
        checkoutForm.fillFormWithoutFirstName();
        cy.get(checkoutForm.selector.invalid).should('contain.text', 'Valid first name is required.');
    });
    it('Should throw error message "Valid last name is required"', () => {
        checkoutForm.fillFormWithoutLastName();
        cy.get(checkoutForm.selector.invalid).should('contain.text', 'Valid last name is required.');
    });
    it('Should throw error message "Please enter a valid email address for shipping updates"', () => {
        checkoutForm.fillFormWithoutEmail();
        cy.get(checkoutForm.selector.invalid).should('contain.text', 'Please enter a valid email address for shipping updates.');
    });
    it('Should throw error message "Please enter your shipping address"', () => {
        checkoutForm.fillFormWithoutAddress();
        cy.get(checkoutForm.selector.invalid).should('contain.text', 'Please enter your shipping address.');
    });
    it('Should throw error message "Please select a valid country"', () => {
        checkoutForm.fillFormWithoutCountry();
        cy.get(checkoutForm.selector.invalid).should('contain.text', 'Please select a valid country.');
    });
    it('Should throw error message "Please provide a valid state"', () => {
        checkoutForm.fillFormWithoutCity();
        cy.get(checkoutForm.selector.invalid).should('contain.text', 'Please provide a valid state.');
    });
    it('Should throw error message "Zip code required"', () => {
        checkoutForm.fillFormWithoutZip();
        cy.get(checkoutForm.selector.invalid).should('contain.text', 'Zip code required.');
    });
    it('Should throw error message "Please enter a valid email address for shipping updates"', () => {
        checkoutForm.fillFormWithInvalidEmail();
        cy.get(checkoutForm.selector.invalid).should('contain.text', 'Please enter a valid email address for shipping updates.');
    });
});