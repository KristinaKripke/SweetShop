/// <reference types="cypress" />
import BasketPage from '../pages/basketPage';
import { BasketPageSelectors } from '../components/basketPageComponents';

describe('Basket page', () => {
    const basketPage = new BasketPage();
    beforeEach(() => {
        basketPage.visit();
    });

    it('Should have title and description', () => {
        cy.get(basketPage.title).should('be.visible').and('contain.text', 'Your Basket');
        cy.get(basketPage.description).should('be.visible');
    });
    it('Should have Billing address and Payment sections', () => {
        cy.get(BasketPageSelectors.billingSection).should('be.visible').and('contain.text', 'Billing address');
        cy.get(BasketPageSelectors.paymentSection).should('be.visible').and('contain.text', 'Payment');
    });
    it('Should display total price', () => {
        cy.get(BasketPageSelectors.total).should('be.visible');
    });
    it('Delivery options radio buttons should be displayed', () => {
        cy.get(BasketPageSelectors.radioCollect).should('be.visible');
        cy.get(BasketPageSelectors.radioStandard).should('be.visible');
    });
    it('Promo code input field should be displayed', () => {
        cy.get(BasketPageSelectors.promoCode).should('be.visible');
    });
    it('Should have Continue to checkout button', () => {
        cy.get(BasketPageSelectors.checkoutButton).should('be.visible');
    });
});