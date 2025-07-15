/// <reference types="cypress" />
import TotalPage from '../pages/total';

describe('Total section', () => {
    const totalPage = new TotalPage();
    beforeEach(() => {
        totalPage.visit();
    });
    it('Should add correct number of items to basket', () => {
        totalPage.addItems();
        cy.get(totalPage.selector.numberOfItems).invoke('text').should('eq', '4');
    });
    it('Should have the correct price', () => {
        totalPage.addItems();
        cy.get(totalPage.selector.totalPrice).should('be.visible').and('contain.text', '£3.70');
    });
    it('Should have correct price with shipping', () => {
        totalPage.addShipping();
        cy.get(totalPage.selector.totalPrice).should('contain.text', '£5.69');
    });
    it('Should remove an item', () => {
        totalPage.deleteItem();
        cy.get(totalPage.selector.numberOfItems).should('contain.text', '3');
    });
    it('Should select Standard shipping', () => {
        cy.get(totalPage.selector.radioStandard).click({force: true});
        cy.get(totalPage.selector.radioStandard).should('be.checked');
    });
    it('Should select Collect', () => {
        cy.get(totalPage.selector.radioCollect).click({force: true});
        cy.get(totalPage.selector.radioCollect).should('be.checked');
    });
    it('Should not accept the promo code', () => {
        totalPage.promoCode();
        cy.get(totalPage.selector.totalPrice).should('contain.text', '£3.70');
    });
    it('Should empty basket', () => {
        totalPage.addItems();
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Are you sure you want to empty your basket?');
            return true;
        });
        cy.get(totalPage.selector.emptyBasket).click();
        cy.get(totalPage.selector.numberOfItems).should('contain.text', '0');
    });
});
