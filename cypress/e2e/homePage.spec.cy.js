/// <reference types="cypress" />
import HomePage from '../pages/homePage';
import { HomePageSelectors } from '../components/homePageComponents';

describe('Home page', () => {
    const homePage = new HomePage();
    beforeEach(() => {
        homePage.visit();
    });

    it('Should display expected title', () => {
        cy.get(HomePageSelectors.title).should('contain.text', 'Welcome to the sweet shop!');
    });
    it('Should have Browse sweets button', () => {
        cy.get(HomePageSelectors.button).should('be.visible');
    });
    it('Button navigates to Sweets page', () => {
        homePage.clickButton();
        cy.url().should('include', '/sweets');
        cy.get('h1').should('contain.text', 'Browse sweets');
    });
    it('Should have Our most popular choice of retro sweets section', () => {
        cy.get(HomePageSelectors.retroSection).should('contain.text', 'Our most popular choice of retro sweets.');
        cy.get(HomePageSelectors.sweetsCard).should('be.visible');
    });
    it('Should have Sale banner', () => {
        cy.get(HomePageSelectors.saleBanner).should('be.visible');
    });
});