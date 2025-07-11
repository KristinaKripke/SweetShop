/// <reference types="cypress" />
import { totalSelectors } from "../components/totalComponents";

class TotalPage {
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
        cy.get(totalSelectors.radioStandard).click({multiple: true});
    };
    deleteItem() {
        cy.get('.navbar-brand').click({multiple: true});
        cy.get('.addItem').eq(0).click({multiple: true});
        cy.get('.addItem').eq(1).click({multiple: true});
        cy.get('.addItem').eq(2).click({multiple: true});
        cy.get('.addItem').eq(3).click({multiple: true});
        cy.get('a[href="/basket"]').click({multiple: true});
        cy.get(totalSelectors.deleteItem).first().click({multiple: true});
    };
};

export default TotalPage;