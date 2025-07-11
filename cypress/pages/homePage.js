/// <reference types="cypress" />
import { HomePageSelectors } from "../components/homePageComponents";

class HomePage {
    visit() {
        cy.visit('/');
    };
    clickButton() {
        cy.get(HomePageSelectors.button).click();
    };
};

export default HomePage;