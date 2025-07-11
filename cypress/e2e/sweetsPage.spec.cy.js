/// <reference types="cypress" />
import SweetsPage from '../pages/sweetsPage';
import { SweetsPageSelectors } from '../components/sweetsPageComponents';

describe('Sweets page', () => {
    const sweetsPage = new SweetsPage();
    beforeEach(() => {
        sweetsPage.visit();
    });

    it('Should have Browse sweets title', () => {
        cy.get(SweetsPageSelectors.title).should('be.visible');
    });
    it('Should have cards with picture, title, description, price and add to basket button', () => {
        cy.get(SweetsPageSelectors.card).each(($card) => {
            cy.wrap($card).find(SweetsPageSelectors.cardImg).should('be.visible');
            cy.wrap($card).find(SweetsPageSelectors.cardTitle).should('be.visible');
            cy.wrap($card).find(SweetsPageSelectors.cardText).should('be.visible');
            cy.wrap($card).find(SweetsPageSelectors.cardPrice).should('be.visible');
            cy.wrap($card).find(SweetsPageSelectors.cardFooter).should('be.visible');
        });
    });
    it('Should add product to basket', () => {
        sweetsPage.addToBasket();
        cy.get(SweetsPageSelectors.itemsInBasket).should('be.visible').and('contain.text', '1');
    });

});