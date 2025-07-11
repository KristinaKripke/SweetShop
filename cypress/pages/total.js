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
        cy.get('a[href="/basket"]').click({multiple: true});
    };
};

export default TotalPage;