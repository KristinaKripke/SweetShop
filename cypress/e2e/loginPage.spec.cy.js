/// <reference types="cypress" />
import LoginPage from '../pages/loginPage';

describe('Login page', () => {
    const loginPage = new LoginPage();
    beforeEach(() => {
        loginPage.visit();
    });

    it('Should have title Login and description', () => {
        cy.get(loginPage.selector.title).should('be.visible').and('contain.text', 'Login');
        cy.get(loginPage.selector.description).should('be.visible');
    });
    it('Should have email input field', () => {
        cy.get(loginPage.selector.emailInput).should('be.visible');
        cy.get(loginPage.selector.passwordInput).should('be.visible');
    });
    it('Should have social media icons', () => {
        cy.get(loginPage.selector.socials).should('be.visible');
    });
    it('Should login user with valid details', () => {
        loginPage.validLogin();
        cy.get(loginPage.selector.loginSuccess).should('be.visible');
    });
    it('Should display error message when email field is left empty', () => {
        loginPage.loginWithoutEmail();
        cy.get(loginPage.selector.enterEmailMsg).should('be.visible');
    });
    it('Should display error message when password field is left empty', () => {
        loginPage.loginWithoutPassword();
        cy.get(loginPage.selector.enterPassMsg).should('be.visible');
    });
    it('Should display error message when email is invalid', () => {
        loginPage.loginInvalidEmailFormat();
        cy.get(loginPage.selector.enterEmailMsg).should('be.visible');
    });
});