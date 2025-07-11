/// <reference types="cypress" />
import { LoginPageSelectors } from "../components/loginPageComponents";

class LoginPage {
    visit() {
        cy.visit('/login');
    };

    validLogin() {
        cy.get(LoginPageSelectors.emailInput).type('test@user.com');
        cy.get(LoginPageSelectors.passwordInput).type('password123');
        cy.get(LoginPageSelectors.button).click();
    };
};

export default LoginPage;