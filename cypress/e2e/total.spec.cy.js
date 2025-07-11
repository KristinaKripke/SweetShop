/// <reference types="cypress" />
import TotalPage from '../pages/total';
import { totalSelectors } from '../components/totalComponents';

describe('Total section', () => {
    const totalPage = new TotalPage();
    beforeEach(() => {
        totalPage.visit();
    });
    it('Should add correct number of items to basket', () => {
        totalPage.addItems();
        cy.get(totalSelectors.numberOfItems).invoke('text').should('eq', '4');
    });
    it('Should have the correct price', () => {
        totalPage.addItems();
        cy.get(totalSelectors.totalPrice).should('be.visible').and('contain.text', '£3.70');
    });
    it('Should have correct price with shipping', () => {
        totalPage.addShipping();
        cy.get(totalSelectors.totalPrice).should('contain.text', '£5.69');
    });
    it('Should remove an item', () => {
        totalPage.deleteItem();
        cy.get(totalSelectors.numberOfItems).should('contain.text', '3');
    });
    it('Should select Standard shipping', () => {
        cy.get(totalSelectors.radioStandard).click({force: true});
        cy.get(totalSelectors.radioStandard).should('be.checked');
    });
    it('Should select Collect', () => {
        cy.get(totalSelectors.radioCollect).click({force: true});
        cy.get(totalSelectors.radioCollect).should('be.checked');
    });
    it('Should not accept the promo code', () => {
        totalPage.promoCode();
        cy.get(totalSelectors.totalPrice).should('contain.text', '£3.70');
    });
});
