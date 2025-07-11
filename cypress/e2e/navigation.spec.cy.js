/// <reference types="cypress" />
import Navigation from '../pages/navigation';
import { navigationSelectors } from '../components/navigationComponents';

describe('Navigation', () => {
    const navigation = new Navigation();
    beforeEach(() => {
        navigation.visit();
    });

    it('Should navigate from home page to Sweets page', () => {
        cy.contains(navigationSelectors.sweets, 'Sweets').click();
        cy.url().should('include', '/sweets');
        cy.get('h1').should('be.visible').and('contain.text', 'Browse sweets');
    });
});