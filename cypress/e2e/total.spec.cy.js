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
        cy.get(totalSelectors.numberOfItems).invoke('text').should('eq', '3');
    });
});
