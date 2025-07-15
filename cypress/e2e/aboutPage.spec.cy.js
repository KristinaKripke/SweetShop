/// <reference types="cypress" />
import AboutPage from '../pages/aboutPage';

describe('Home page', () => {
    const aboutPage = new AboutPage();
    beforeEach(() => {
        aboutPage.visit();
    });

    it('Should have title', () => {
        cy.get(aboutPage.selector.title).should('be.visible').and('contain.text', 'Sweet Shop Project');
    });
    it('Should have description text', () => {
        cy.get(aboutPage.selector.description).should('be.visible');
    });
    it('Should have a banner that matches 2018', () => {
        cy.get(aboutPage.selector.bannerText).should('be.visible').and('contain.text', 'Sweet Shop Project 2018');
    });
});