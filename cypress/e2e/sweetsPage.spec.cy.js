/// <reference types="cypress" />
import SweetsPage from '../pages/sweetsPage';

describe('Sweets page', () => {
    const sweetsPage = new SweetsPage();
    beforeEach(() => {
        sweetsPage.visit();
    });

    it('Should have Browse sweets title', () => {
        cy.get(sweetsPage.selector.title).should('be.visible');
    });
    it('Should have cards with picture, title, description, price and add to basket button', () => {
        cy.get(sweetsPage.selector.card).each(($card) => {
            cy.wrap($card).find(sweetsPage.selector.cardImg).should('be.visible');
            cy.wrap($card).find(sweetsPage.selector.cardTitle).should('be.visible');
            cy.wrap($card).find(sweetsPage.selector.cardText).should('be.visible');
            cy.wrap($card).find(sweetsPage.selector.cardPrice).should('be.visible');
            cy.wrap($card).find(sweetsPage.selector.cardFooter).should('be.visible');
        });
    });
    it('Should add product to basket', () => {
        sweetsPage.addToBasket();
        cy.get(sweetsPage.selector.itemsInBasket).should('be.visible').and('contain.text', '1');
    });

});