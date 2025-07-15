/// <reference types="cypress" />
import BasketPage from '../pages/basketPage';

describe('Basket page', () => {
    const basketPage = new BasketPage();
    beforeEach(() => {
        basketPage.visit();
    });

    it('Should have title and description', () => {
        cy.get(basketPage.selector.title).should('be.visible').and('contain.text', 'Your Basket');
        cy.get(basketPage.selector.description).should('be.visible');
    });
    it('Should have Billing address and Payment sections', () => {
        cy.get(basketPage.selector.billingSection).should('be.visible').and('contain.text', 'Billing address');
        cy.get(basketPage.selector.paymentSection).should('be.visible').and('contain.text', 'Payment');
    });
    it('Should display total price', () => {
        cy.get(basketPage.selector.total).should('be.visible');
    });
    it('Delivery options radio buttons should be displayed', () => {
        cy.get(basketPage.selector.radioCollect).should('be.visible');
        cy.get(basketPage.selector.radioStandard).should('be.visible');
    });
    it('Promo code input field should be displayed', () => {
        cy.get(basketPage.selector.promoCode).should('be.visible');
    });
    it('Should have Continue to checkout button', () => {
        cy.get(basketPage.selector.checkoutButton).should('be.visible');
    }); 
});