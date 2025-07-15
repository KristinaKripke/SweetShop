/// <reference types="cypress" />

class TotalPage {
    selector = {
        numberOfItems: ".badge-pill",
        totalPrice: "strong",
        radioStandard: "input[id='exampleRadios2']",
        radioCollect: "input[id='exampleRadios1']",
        deleteItem: "a.small",
        promoCode: "input[placeholder='Promo code']",
        promoBtn: "button.btn-secondary",
        emptyBasket: "a:contains('Empty Basket')"
    }

    visit() {
        cy.visit('/basket');
    };
    addItems() {
        cy.get('.navbar-brand').click({multiple: true});
        cy.get('.addItem').eq(0).click({multiple: true});
        cy.get('.addItem').eq(1).click({multiple: true});
        cy.get('.addItem').eq(2).click({multiple: true});
        cy.get('.addItem').eq(3).click({multiple: true});
        cy.get('a[href="/basket"]').click({multiple: true});
    };
    addShipping() {
        cy.get('.navbar-brand').click({multiple: true});
        cy.get('.addItem').eq(0).click({multiple: true});
        cy.get('.addItem').eq(1).click({multiple: true});
        cy.get('.addItem').eq(2).click({multiple: true});
        cy.get('.addItem').eq(3).click({multiple: true});
        cy.get('a[href="/basket"]').click({multiple: true});
        cy.get(this.selector.radioStandard).click({multiple: true});
    };
    deleteItem() {
        cy.get('.navbar-brand').click({multiple: true});
        cy.get('.addItem').eq(0).click({multiple: true});
        cy.get('.addItem').eq(1).click({multiple: true});
        cy.get('.addItem').eq(2).click({multiple: true});
        cy.get('.addItem').eq(3).click({multiple: true});
        cy.get('a[href="/basket"]').click({multiple: true});
        cy.get(this.selector.deleteItem).first().click({multiple: true});
    };
    promoCode() {
        cy.get('.navbar-brand').click({multiple: true});
        cy.get('.addItem').eq(0).click({multiple: true});
        cy.get('.addItem').eq(1).click({multiple: true});
        cy.get('.addItem').eq(2).click({multiple: true});
        cy.get('.addItem').eq(3).click({multiple: true});
        cy.get('a[href="/basket"]').click({multiple: true});
        cy.get(this.selector.promoCode).type('testPromoCode');
        cy.get(this.selector.promoBtn).click({multiple: true});
    };
};

export default TotalPage;