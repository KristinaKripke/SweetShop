/// <reference types="cypress" />
import { LoginPageSelectors } from "../components/loginPageComponents";

class LoginPage {
    visit() {
        cy.visit('/login');
    };

    validLogin() {
        cy.get(LoginPageSelectors.emailInput).type('test@user.com');
        cy.get(LoginPageSelectors.passwordInput).type('password123');
        cy.get(LoginPageSelectors.submit).click();
    };
    loginWithoutEmail() {
        cy.get(LoginPageSelectors.passwordInput).type('password123');
        cy.get(LoginPageSelectors.submit).click();
    };
    loginWithoutPassword() {
        cy.get(LoginPageSelectors.emailInput).type('test@email.com');
        cy.get(LoginPageSelectors.submit).click();
    };
    loginInvalidEmailFormat() {
        cy.get(LoginPageSelectors.emailInput).type('testemail.com');
        cy.get(LoginPageSelectors.passwordInput).type('password123');
        cy.get(LoginPageSelectors.submit).click();
    };
};

export default LoginPage;