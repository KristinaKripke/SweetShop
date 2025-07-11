/// <reference types="cypress" />
import LoginPage from '../pages/loginPage';
import { LoginPageSelectors } from '../components/loginPageComponents';

describe('Login page', () => {
    const loginPage = new LoginPage();
    beforeEach(() => {
        loginPage.visit();
    });

    it('Should have title Login and description', () => {
        cy.get(LoginPageSelectors.title).should('be.visible').and('contain.text', 'Login');
        cy.get(LoginPageSelectors.description).should('be.visible');
    });
    it('Should have email input field', () => {
        cy.get(LoginPageSelectors.emailInput).should('be.visible');
        cy.get(LoginPageSelectors.passwordInput).should('be.visible');
    });
    it('Should have social media icons', () => {
        cy.get(LoginPageSelectors.socials).should('be.visible');
    });
    it('Should login user with valid details', () => {
        loginPage.validLogin();
        cy.get(LoginPageSelectors.loginSuccess).should('be.visible');
    });
    it('Should display error message when email field is left empty', () => {
        loginPage.loginWithoutEmail();
        cy.get(LoginPageSelectors.enterEmailMsg).should('be.visible');
    });
    it('Should display error message when password field is left empty', () => {
        loginPage.loginWithoutPassword();
        cy.get(LoginPageSelectors.enterPassMsg).should('be.visible');
    });
    it('Should display error message when email is invalid', () => {
        loginPage.loginInvalidEmailFormat();
        cy.get(LoginPageSelectors.enterEmailMsg).should('be.visible');
    });
});