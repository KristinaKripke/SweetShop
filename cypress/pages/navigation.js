/// <reference types="cypress" />
import { navSelectors } from "../components/navigationComponents";

class Navigation {
    constructor () {
        this.selector = navSelectors;
    }

    visit(navigationItem = '') {
        cy.visit(`/${navigationItem}`);
    }

    navigateToHome() {
        cy.get(this.selector.home).click();
    }

    navigateToSweets() {
        cy.get(this.selector.sweets).click();
    }

    navigateToBasket() {
        cy.get(this.selector.basket).click();
    }

    navigateToLogin() {
        cy.get(this.selector.login).click();
    }

    navigateToAbout() {
        cy.get(this.selector.about).click();
    }
};

export default {Navigation};


