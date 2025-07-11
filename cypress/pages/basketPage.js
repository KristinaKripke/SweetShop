/// <reference types="cypress" />
import { BasketPageSelectors } from "../components/aboutPageComponents";

class BasketPage {
    visit() {
        cy.visit('/basket');
    };
};

export default BasketPage;