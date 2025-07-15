/// <reference types="cypress" />
import HomePage from '../pages/homePage';

describe('Home page', () => {
    const homePage = new HomePage();
    beforeEach(() => {
        homePage.visit();
    });

    it('Should display expected title', () => {
        cy.get(homePage.selector.title).should('contain.text', 'Welcome to the sweet shop!');
    });
    it('Should have Browse sweets button', () => {
        cy.get(homePage.selector.button).should('be.visible');
    });
    it('Button navigates to Sweets page', () => {
        homePage.clickButton();
        cy.url().should('include', '/sweets');
        cy.get('h1').should('contain.text', 'Browse sweets');
    });
    it('Should have Our most popular choice of retro sweets section', () => {
        cy.get(homePage.selector.retroSection).should('contain.text', 'Our most popular choice of retro sweets.');
        cy.get(homePage.selector.sweetsCard).should('be.visible');
    });
    it('Should have Sale banner', () => {
        cy.get(homePage.selector.saleBanner).should('be.visible');
    });
});