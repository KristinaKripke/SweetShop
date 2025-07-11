/// <reference types="cypress" />
import { SweetsPageSelectors } from "../components/sweetsPageComponents";

class SweetsPage {
    visit() {
        cy.visit('/sweets');
    };
    addToBasket() {
        cy.get(SweetsPageSelectors.addToCartButton).first().click();
    }
};

export default SweetsPage;