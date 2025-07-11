/// <reference types="cypress" />
import AboutPage from '../pages/aboutPage';
import { AboutPageSelectors } from '../components/aboutPageComponents';

describe('Home page', () => {
    const aboutPage = new AboutPage();
    beforeEach(() => {
        aboutPage.visit();
    });

    it('Should have title', () => {
        cy.get(AboutPageSelectors.title).should('be.visible').and('contain.text', 'Sweet Shop Project');
    });
    it('Should have description text', () => {
        cy.get(AboutPageSelectors.description).should('be.visible');
    });
    it('Should have a banner that matches 2018', () => {
        cy.get(AboutPageSelectors.bannerText).should('be.visible').and('contain.text', 'Sweet Shop Project 2018');
    });
});