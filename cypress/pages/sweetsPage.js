/// <reference types="cypress" />

class SweetsPage {
    selector = {
        title: 'h1.display-3',
        card: 'div.card',
        cardImg: '.card-img.top',
        cardTitle: '.card-title',
        cardText: '.card-text',
        cardPrice: '.text-muted',
        cardFooter: '.card-footer',
        addToCartButton: '.addItem',
        itemsInBasket: '.badge-success'
    }

    visit() {
        cy.visit('/sweets');
    };
    addToBasket() {
        cy.get(this.selector.addToCartButton).first().click();
    }
};

export default SweetsPage;