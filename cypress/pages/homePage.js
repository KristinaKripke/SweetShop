/// <reference types="cypress" />

class HomePage {
    selector = {
        title: 'h1.display-3',
        button: 'a.btn.sweets',
        retroSection: 'span.lead',
        sweetsCard: 'div.card',
        saleBanner: 'div.advertising'
    }

    visit() {
        cy.visit('/');
    };
    clickButton() {
        cy.get(this.selector.button).click();
    };
};

export default HomePage;