/// <reference types="cypress" />

class LoginPage {
    selector = {
        title: 'h1.display-3',
        description: 'p.lead',
        emailInput: 'input[type="email"]',
        passwordInput: 'input[type="password"]',
        socials: '.social',
        loginSuccess: 'h1.display-3',
        submit: '.btn.btn-primary',
        enterEmailMsg: '.invalid-email',
        enterPassMsg: '.invalid-password'
    }

    visit() {
        cy.visit('/login');
    };

    validLogin() {
        cy.get(this.selector.emailInput).type('test@user.com');
        cy.get(this.selector.passwordInput).type('password123');
        cy.get(this.selector.submit).click();
    };
    loginWithoutEmail() {
        cy.get(this.selector.passwordInput).type('password123');
        cy.get(this.selector.submit).click();
    };
    loginWithoutPassword() {
        cy.get(this.selector.emailInput).type('test@email.com');
        cy.get(this.selector.submit).click();
    };
    loginInvalidEmailFormat() {
        cy.get(this.selector.emailInput).type('testemail.com');
        cy.get(this.selector.passwordInput).type('password123');
        cy.get(this.selector.submit).click();
    };
};

export default LoginPage;